import React, { useState, useEffect } from 'react';
import { Product, EnquiryFormData } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { Send, Copy, Check, AlertCircle, FileText, CheckCircle2, RotateCcw } from 'lucide-react';

interface EnquiryFormProps {
  preselectedProductId?: string;
  onClearPreselection?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  preselectedProductId,
  onClearPreselection,
}) => {
  const initialFormState: EnquiryFormData = {
    customerName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    selectedProductId: preselectedProductId || 'stepped-king-pin',
    vehicleBrand: '',
    vehicleModel: '',
    requiredQuantity: '',
    requiredDimensions: '',
    additionalMessage: '',
  };

  const [formData, setFormData] = useState<EnquiryFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submittedSummary, setSubmittedSummary] = useState<EnquiryFormData | null>(null);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProductId) {
      setFormData((prev) => ({
        ...prev,
        selectedProductId: preselectedProductId,
      }));
    }
  }, [preselectedProductId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer Name is required.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Fleet Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Enter a valid telephone/mobile number.';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.emailAddress.trim())
    ) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.selectedProductId) {
      newErrors.selectedProductId = 'Please select a component.';
    }

    if (!formData.vehicleBrand.trim()) {
      newErrors.vehicleBrand = 'Vehicle Brand is required (e.g. Tata, Ashok Leyland, BharatBenz).';
    }

    if (!formData.vehicleModel.trim()) {
      newErrors.vehicleModel = 'Vehicle Model is required.';
    }

    if (!formData.requiredQuantity.trim()) {
      newErrors.requiredQuantity = 'Required Quantity is required.';
    } else if (parseInt(formData.requiredQuantity, 10) <= 0) {
      newErrors.requiredQuantity = 'Quantity must be at least 1 unit.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatusMessage('Please correct the highlighted errors before submitting.');
      return;
    }

    setSubmittedSummary({ ...formData });
    setStatusMessage('Enquiry generated successfully! You can copy the complete summary below.');
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmittedSummary(null);
    setStatusMessage(null);
    setCopied(false);
    if (onClearPreselection) onClearPreselection();
  };

  const getSelectedProductDetails = (id: string): Product | undefined => {
    return INITIAL_PRODUCTS.find((p) => p.id === id);
  };

  const generateFormattedSummary = (data: EnquiryFormData): string => {
    const prod = getSelectedProductDetails(data.selectedProductId);
    return `================================================
MS AUTO PART INDUSTRIES - CUSTOMER ENQUIRY DRAFT
================================================
DATE: ${new Date().toLocaleDateString()}
ENQUIRY REFERENCE: MS-RFQ-${Math.floor(100000 + Math.random() * 900000)}

CUSTOMER INFORMATION:
- Name: ${data.customerName}
- Company / Workshop: ${data.companyName}
- Phone: ${data.phoneNumber}
- Email: ${data.emailAddress}

COMPONENT REQUESTED:
- Product Name: ${prod ? prod.name : data.selectedProductId}
- Product Code: ${prod ? prod.code : 'N/A'}
- Category: ${prod ? prod.category : 'N/A'}

VEHICLE & TECHNICAL FITMENT:
- Vehicle Brand: ${data.vehicleBrand}
- Vehicle Model: ${data.vehicleModel}
- Required Quantity: ${data.requiredQuantity} Units
- Required Dimensions / Notes: ${data.requiredDimensions || 'Standard drawing / confirm with manufacturer'}

ADDITIONAL MESSAGE:
${data.additionalMessage || 'Please provide quotation, unit availability, and delivery timeline.'}

================================================
Generated via MS Auto Part Industries Catalogue
Frontend Project Demonstration (No Email Backend)
================================================`;
  };

  const handleCopySummary = async () => {
    if (!submittedSummary) return;
    const text = generateFormattedSummary(submittedSummary);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const activeProduct = getSelectedProductDetails(formData.selectedProductId);

  return (
    <div className="bg-white border border-[#DCE4EA] rounded-xl shadow-xs overflow-hidden text-[#263238]">
      
      {/* Header Bar */}
      <div className="px-6 py-4 bg-[#F2F4F6] border-b border-[#DCE4EA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-[#263238] font-heading">
            Commercial & Technical Price Enquiry
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Heavy commercial vehicle component quotation request system
          </p>
        </div>

        {activeProduct && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#DCE4EA] rounded-lg text-xs">
            <span className="text-slate-500 font-medium">Selected:</span>
            <span className="text-[#315B7D] font-bold font-mono">{activeProduct.code}</span>
            <span className="text-slate-700">({activeProduct.name})</span>
          </div>
        )}
      </div>

      <div className="p-6 lg:p-8 space-y-6">
        
        {/* Transparent Disclaimer Banner */}
        <div className="p-4 bg-[#F2F4F6] border border-[#DCE4EA] rounded-lg text-xs text-slate-700 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#315B7D] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Frontend Demonstration Notice:</strong> This website operates strictly on the frontend without a live backend or database. Submitting this form processes your input locally, validates all requirements, generates an official structured RFQ summary, and allows you to copy the enquiry to clipboard.
          </p>
        </div>

        {statusMessage && (
          <div
            className={`p-3.5 rounded-lg text-xs flex items-center gap-2 ${
              submittedSummary
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {submittedSummary ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{statusMessage}</span>
          </div>
        )}

        {/* 10-Field Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Field 1: Customer Name */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                1. Customer / Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. Jaspreet Singh"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.customerName
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.customerName && (
                <p className="text-[11px] text-red-600 mt-1">{errors.customerName}</p>
              )}
            </div>

            {/* Field 2: Company Name */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                2. Company / Fleet Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Punjab Commercial Transporters"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.companyName
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.companyName && (
                <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>
              )}
            </div>

            {/* Field 3: Phone Number */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                3. Phone / Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.phoneNumber
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-[11px] text-red-600 mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Field 4: Email Address */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                4. Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="procurement@company.com"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.emailAddress
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.emailAddress && (
                <p className="text-[11px] text-red-600 mt-1">{errors.emailAddress}</p>
              )}
            </div>

            {/* Field 5: Select Product */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                5. Select Component <span className="text-red-500">*</span>
              </label>
              <select
                name="selectedProductId"
                value={formData.selectedProductId}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DCE4EA] rounded-lg text-sm text-[#263238] focus:outline-none focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D] cursor-pointer"
              >
                {INITIAL_PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name} ({prod.code}) - {prod.category}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 6: Vehicle Brand */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                6. Vehicle Brand / Make <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="vehicleBrand"
                value={formData.vehicleBrand}
                onChange={handleChange}
                placeholder="e.g. Tata Motors / Ashok Leyland / Eicher"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.vehicleBrand
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.vehicleBrand && (
                <p className="text-[11px] text-red-600 mt-1">{errors.vehicleBrand}</p>
              )}
            </div>

            {/* Field 7: Vehicle Model */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                7. Vehicle Model / Axle Series <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder="e.g. Signa 4825.TK / 1618 / Heavy Front Axle"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.vehicleModel
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.vehicleModel && (
                <p className="text-[11px] text-red-600 mt-1">{errors.vehicleModel}</p>
              )}
            </div>

            {/* Field 8: Required Quantity */}
            <div>
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                8. Required Order Quantity (Units) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min="1"
                name="requiredQuantity"
                value={formData.requiredQuantity}
                onChange={handleChange}
                placeholder="e.g. 50"
                className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none transition-colors ${
                  errors.requiredQuantity
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#DCE4EA] focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]'
                }`}
              />
              {errors.requiredQuantity && (
                <p className="text-[11px] text-red-600 mt-1">{errors.requiredQuantity}</p>
              )}
            </div>

            {/* Field 9: Required Dimensions */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                9. Required Dimensions / Tolerances (Optional)
              </label>
              <input
                type="text"
                name="requiredDimensions"
                value={formData.requiredDimensions}
                onChange={handleChange}
                placeholder="e.g. Outer Dia: Standard OEM, Length: 220mm, or 'Refer to OEM drawing'"
                className="w-full px-3.5 py-2.5 bg-white border border-[#DCE4EA] rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Leave blank if requesting standard factory sample dimensions.
              </span>
            </div>

            {/* Field 10: Additional Message */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-[#263238] uppercase tracking-wider mb-1.5">
                10. Additional Requirements / Logistics Notes
              </label>
              <textarea
                name="additionalMessage"
                rows={3}
                value={formData.additionalMessage}
                onChange={handleChange}
                placeholder="Specify delivery destination, batch packaging requirements, or urgency of quote..."
                className="w-full px-3.5 py-2.5 bg-white border border-[#DCE4EA] rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]"
              />
            </div>

          </div>

          {/* Form Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Generate RFQ Summary</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#263238] bg-[#F2F4F6] hover:bg-[#E5E9ED] border border-[#DCE4EA] rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Clear Form</span>
            </button>
          </div>
        </form>

        {/* Generated Enquiry Summary Card */}
        {submittedSummary && (
          <div className="mt-8 pt-6 border-t border-[#DCE4EA] animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#315B7D]" />
                <h4 className="text-base font-bold text-[#263238] font-heading">
                  Generated Quotation Enquiry Summary
                </h4>
              </div>

              <button
                onClick={handleCopySummary}
                className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Details'}</span>
              </button>
            </div>

            <div className="p-4 bg-[#F2F4F6] rounded-xl border border-[#DCE4EA] font-mono text-xs text-[#263238] leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
              {generateFormattedSummary(submittedSummary)}
            </div>

            <p className="text-[11px] text-slate-500 mt-2">
              Tip: Click <strong>"Copy Enquiry Details"</strong> to copy the draft and share via WhatsApp or Email with the factory desk.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
