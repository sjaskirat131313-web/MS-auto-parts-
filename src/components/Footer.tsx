import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/products';
import { ShieldCheck, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onContactClick }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#DCE4EA] text-[#263238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#315B7D] text-white font-extrabold text-lg">
                MS
              </div>
              <span className="text-base font-bold text-[#263238] font-heading tracking-tight">
                {COMPANY_DETAILS.name}
              </span>
            </div>
            
            <p className="text-[#315B7D] text-xs font-bold uppercase tracking-wider">
              {COMPANY_DETAILS.tagline}
            </p>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Specialized manufacturing of heavy commercial vehicle automotive components, front axle king pins, and precision bushing systems.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#315B7D]" />
              <span>Precision Machined Automotive Components</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#315B7D] font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#315B7D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#315B7D]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#315B7D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#315B7D]" />
                  <span>Products Catalogue</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#315B7D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#315B7D]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('login')}
                  className="hover:text-[#315B7D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#315B7D]" />
                  <span>Login & Enquiry</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onContactClick) onContactClick();
                    else handleNav('login');
                  }}
                  className="hover:text-[#315B7D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#315B7D]" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Component Range */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#315B7D] font-heading">
              Component Range
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315B7D]"></span>
                <span>Stepped King Pins (MS-KP-001)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315B7D]"></span>
                <span>Spiral Groove King Pins (MS-KP-002)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315B7D]"></span>
                <span>Oil-Hole King Pins (MS-KP-003)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315B7D]"></span>
                <span>King Pin Bushes (MS-BU-001)</span>
              </li>
              <li className="text-xs text-[#315B7D] font-semibold pt-1">
                Commercial Axle Compatibility
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Desk */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#315B7D] font-heading">
              Factory & Business Desk
            </h3>
            <div className="space-y-3 text-xs leading-relaxed text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#315B7D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#263238] block font-semibold">Factory Location:</span>
                  <span>{COMPANY_DETAILS.placeholders.factoryAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#315B7D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#263238] block font-semibold">Commercial Email:</span>
                  <span className="break-all">{COMPANY_DETAILS.placeholders.email}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F2F4F6] rounded-lg border border-[#DCE4EA] text-[11px] text-slate-600">
              <span className="font-semibold text-[#263238] block mb-0.5">Note:</span>
              Contact values are editable placeholders awaiting official company registration info.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-[#DCE4EA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <span className="text-[#263238] font-semibold">{COMPANY_DETAILS.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Precision Manufacturing</span>
            <span>•</span>
            <span>Commercial Axle Knuckles</span>
            <span>•</span>
            <span>Frontend College Project</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
