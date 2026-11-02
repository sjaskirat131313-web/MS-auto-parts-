import React from 'react';
import { COMPANY_DETAILS } from '../data/products';
import { Phone, Mail, MapPin, Building2, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-14 sm:py-16 bg-[#F2F4F6] border-t border-[#DCE4EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono mb-1.5">
            Corporate Communication
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] font-heading tracking-tight">
            Contact & Factory Desk
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Direct communication channels for heavy commercial vehicle component procurement, dealer distribution, and engineering consultations.
          </p>
        </div>

        {/* Contact Cards Grid (Editable Placeholders) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Phone */}
          <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#315B7D]/10 text-[#315B7D] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#263238] font-heading uppercase tracking-wide">
              Phone Number
            </h3>
            <p className="mt-2 text-sm text-slate-700 font-mono">
              {COMPANY_DETAILS.placeholders.phone}
            </p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] uppercase font-semibold text-slate-500 bg-[#F2F4F6] border border-[#DCE4EA] rounded">
              Editable Placeholder
            </span>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#315B7D]/10 text-[#315B7D] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#263238] font-heading uppercase tracking-wide">
              Company Email
            </h3>
            <p className="mt-2 text-sm text-slate-700 font-mono truncate">
              {COMPANY_DETAILS.placeholders.email}
            </p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] uppercase font-semibold text-slate-500 bg-[#F2F4F6] border border-[#DCE4EA] rounded">
              Editable Placeholder
            </span>
          </div>

          {/* Card 3: Factory Address */}
          <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#315B7D]/10 text-[#315B7D] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#263238] font-heading uppercase tracking-wide">
              Factory Address
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-snug">
              {COMPANY_DETAILS.placeholders.factoryAddress}
            </p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] uppercase font-semibold text-slate-500 bg-[#F2F4F6] border border-[#DCE4EA] rounded">
              Editable Placeholder
            </span>
          </div>

          {/* Card 4: Business Location */}
          <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#315B7D]/10 text-[#315B7D] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#263238] font-heading uppercase tracking-wide">
              Business Location
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              {COMPANY_DETAILS.placeholders.businessLocation}
            </p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] uppercase font-semibold text-slate-500 bg-[#F2F4F6] border border-[#DCE4EA] rounded">
              {COMPANY_DETAILS.placeholders.enquiryContact}
            </span>
          </div>

        </div>

        {/* Note on updating placeholders */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#DCE4EA] flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-[#315B7D] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-[#263238]">Company Configuration Guide:</strong> Official telephone numbers, registered factory addresses, and sales contact details can be customized anytime in <code className="text-[#315B7D] font-mono">src/data/products.ts</code> under <code className="text-[#263238] font-mono">COMPANY_DETAILS</code>.
          </p>
        </div>

      </div>
    </section>
  );
};
