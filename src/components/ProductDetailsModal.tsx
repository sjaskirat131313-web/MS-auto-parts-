import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { X, Send, CheckCircle2, Info } from 'lucide-react';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestPrice: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onRequestPrice,
}) => {
  const [imgSrc, setImgSrc] = useState<string>('');

  useEffect(() => {
    if (product) {
      setImgSrc(product.image);
    }
  }, [product]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleImageError = () => {
    if (imgSrc !== product.fallbackImage) {
      setImgSrc(product.fallbackImage);
    }
  };

  const specs = [
    { label: 'Product Code', value: product.code, highlight: true },
    { label: 'Category', value: product.category },
    { label: 'Product Type', value: product.specifications.productType },
    { label: 'Material', value: product.specifications.material },
    { label: 'Inner Diameter', value: product.specifications.innerDiameter },
    { label: 'Outer Diameter', value: product.specifications.outerDiameter },
    { label: 'Total Length', value: product.specifications.totalLength },
    { label: 'Weight', value: product.specifications.weight },
    { label: 'Surface Finish', value: product.specifications.surfaceFinish },
    { label: 'Vehicle Application', value: product.specifications.vehicleApplication },
    { label: 'Availability', value: product.specifications.availability },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-[#DCE4EA] rounded-2xl shadow-xl overflow-hidden z-10 text-[#263238]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F2F4F6] border-b border-[#DCE4EA]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-bold text-[#315B7D] bg-white border border-[#DCE4EA] rounded">
              {product.code}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-[#263238] font-heading truncate">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-[#263238] rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close specification dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Product Photograph */}
            <div className="md:col-span-5 flex flex-col space-y-3">
              <div className="relative w-full h-80 sm:h-96 bg-[#FAFBFB] border border-[#DCE4EA] rounded-xl p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={imgSrc}
                  alt={product.name}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                />

                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-slate-600 bg-white border border-[#DCE4EA] rounded">
                  Original Component Photo
                </span>
              </div>

              {/* Price Callout */}
              <div className="p-4 bg-[#F2F4F6] border border-[#DCE4EA] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 block font-semibold">
                    Pricing
                  </span>
                  <div className="text-base font-bold text-[#263238] font-mono">
                    {product.price !== null ? (
                      <span className="text-[#315B7D] font-bold">
                        ₹ {product.price.toLocaleString('en-IN')}{' '}
                        <span className="text-xs text-slate-500 font-sans font-normal">/ unit (Ex-Factory)</span>
                      </span>
                    ) : (
                      <span className="text-[#315B7D] font-sans font-bold text-sm">
                        REQUEST A QUOTE
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onRequestPrice(product);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Quote</span>
                </button>
              </div>
            </div>

            {/* Right Column: Descriptions & Detailed Technical Specs */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#315B7D] mb-1">
                  Component Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Technical Characteristics */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Technical Characteristics
                </h4>
                <div className="space-y-1.5">
                  {product.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B7D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strict Non-Hallucinated Specification Table */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#263238]">
                    Component Specifications
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    B2B Manufacturing Data
                  </span>
                </div>

                <div className="bg-white border border-[#DCE4EA] rounded-xl overflow-hidden divide-y divide-[#DCE4EA]">
                  {specs.map((item, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-12 px-3.5 py-2 text-xs items-center hover:bg-[#F2F4F6] transition-colors"
                    >
                      <div className="col-span-5 text-slate-500 font-medium">
                        {item.label}
                      </div>
                      <div
                        className={`col-span-7 font-mono ${
                          item.highlight ? 'text-[#315B7D] font-bold' : 'text-[#263238]'
                        }`}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Advisory Note */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F2F4F6] border border-[#DCE4EA] text-[11px] text-slate-600">
                <Info className="w-4 h-4 text-[#315B7D] shrink-0 mt-0.5" />
                <p>
                  Dimensions, custom alloy hardness, and fitment tolerances vary by commercial vehicle model and axle configuration. Submit your drawing or axle model via the Customer Enquiry form for exact compatibility confirmation.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-[#F2F4F6] border-t border-[#DCE4EA]">
          <div className="text-xs text-slate-600">
            Manufacturing Code: <span className="font-mono text-[#263238] font-bold">{product.code}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-[#DCE4EA] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestPrice(product);
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire For This Product</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
