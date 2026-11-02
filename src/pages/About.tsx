import React from 'react';
import { PageId, Product } from '../types';
import { COMPANY_DETAILS, INITIAL_PRODUCTS } from '../data/products';
import { ContactSection } from '../components/ContactSection';
import {
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  Eye,
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  onViewProductDetails: (product: Product) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onViewProductDetails }) => {
  return (
    <div className="min-h-screen bg-[#F2F4F6] text-[#263238]">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#DCE4EA] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono mb-2">
              <span>Corporate Profile</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#263238] font-heading tracking-tight">
              ABOUT MS AUTO PART INDUSTRIES
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Automotive Parts Manufacturing dedicated to Heavy Commercial Vehicle Components, King Pins, and Wear Bushes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-12 sm:py-16 bg-[#F2F4F6] border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="p-8 bg-white border border-[#DCE4EA] rounded-xl shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#F2F4F6] border border-[#DCE4EA] flex items-center justify-center text-[#315B7D] mb-5">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Our Purpose
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] font-heading mt-1 mb-4">
                Company Mission
              </h2>
              <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-2 border-[#315B7D] pl-4 py-1">
                "{COMPANY_DETAILS.mission}"
              </blockquote>
            </div>

            {/* Vision Card */}
            <div className="p-8 bg-white border border-[#DCE4EA] rounded-xl shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#F2F4F6] border border-[#DCE4EA] flex items-center justify-center text-[#315B7D] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Long-Term Objective
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#263238] font-heading mt-1 mb-4">
                Business Vision
              </h2>
              <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-2 border-[#315B7D] pl-4 py-1">
                "{COMPANY_DETAILS.vision}"
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Company Profile & Manufacturing Focus */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Block 1: Automotive Components Manufacturing Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Industry Sector
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] font-heading tracking-tight">
                Automotive Components Manufacturing Focus
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Automotive front axle systems in heavy commercial vehicles require absolute structural integrity. As transport trucks and commercial carriers travel across diverse road conditions, front axle pivots undergo continuous rotational steering friction, dynamic shock loads, and high vehicle weights.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                At <strong className="text-[#263238]">MS AUTO PART INDUSTRIES</strong>, manufacturing operations are specifically structured around these demanding conditions. We concentrate exclusively on the machining and precision grinding of steering king pins and knuckle bushes rather than generic automotive hardware.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-semibold text-[#263238]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#315B7D] shrink-0" />
                  <span>Commercial Vehicle Axles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#315B7D] shrink-0" />
                  <span>Steering Knuckle Pivots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#315B7D] shrink-0" />
                  <span>Precision Cylindrical Grinding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#315B7D] shrink-0" />
                  <span>Grease Channel Tooling</span>
                </div>
              </div>
            </div>

            {/* Displaying Genuine Stepped King Pin Photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white border border-[#DCE4EA] rounded-xl p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#DCE4EA]">
                  <span className="font-mono text-[#315B7D] font-bold">{INITIAL_PRODUCTS[0].code}</span>
                  <span className="text-slate-500">Actual Component Photo</span>
                </div>
                <div className="h-72 w-full bg-[#FAFBFB] rounded-lg my-3 flex items-center justify-center p-4 border border-[#DCE4EA]">
                  <img
                    src={INITIAL_PRODUCTS[0].image}
                    alt={INITIAL_PRODUCTS[0].name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = INITIAL_PRODUCTS[0].fallbackImage;
                    }}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="pt-3 border-t border-[#DCE4EA] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#263238]">{INITIAL_PRODUCTS[0].name}</span>
                  <button
                    onClick={() => onViewProductDetails(INITIAL_PRODUCTS[0])}
                    className="text-xs font-bold text-[#315B7D] hover:text-[#274964] flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Precision Machining Focus & Quality Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Displaying Genuine Spiral Groove King Pin Photograph */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-sm bg-white border border-[#DCE4EA] rounded-xl p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#DCE4EA]">
                  <span className="font-mono text-[#315B7D] font-bold">{INITIAL_PRODUCTS[1].code}</span>
                  <span className="text-slate-500">Actual Component Photo</span>
                </div>
                <div className="h-72 w-full bg-[#FAFBFB] rounded-lg my-3 flex items-center justify-center p-4 border border-[#DCE4EA]">
                  <img
                    src={INITIAL_PRODUCTS[1].image}
                    alt={INITIAL_PRODUCTS[1].name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = INITIAL_PRODUCTS[1].fallbackImage;
                    }}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="pt-3 border-t border-[#DCE4EA] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#263238]">{INITIAL_PRODUCTS[1].name}</span>
                  <button
                    onClick={() => onViewProductDetails(INITIAL_PRODUCTS[1])}
                    className="text-xs font-bold text-[#315B7D] hover:text-[#274964] flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Machining Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] font-heading tracking-tight">
                Precision Machining & Quality Commitment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Precision machining is the cornerstone of our manufacturing discipline. Even slight ovality or taper along a king pin shaft leads to premature steering joint looseness, rapid bush wear, and dangerous steering wobble.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our workshop processes enforce cylindrical accuracy along the entire pivot length, verified helical channels on spiral groove pins to ensure unhindered lubricant distribution, and true internal conduits on oil-hole pins with anti-rotation lock faces.
              </p>

              <div className="p-4 bg-[#F2F4F6] rounded-xl border border-[#DCE4EA] space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#263238]">
                  Customer Satisfaction Commitment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We believe enduring B2B business relationships in automotive manufacturing are earned through reliability, responsiveness to customer dimension requests, and verified component performance on the road.
                </p>
              </div>
            </div>

          </div>

          {/* Block 3: King Pin Product Range & Knuckle Bushes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Oil-Hole Pin Showcase */}
            <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl flex flex-col sm:flex-row items-center gap-6 shadow-xs">
              <div className="h-44 w-36 bg-[#FAFBFB] rounded-lg p-3 flex items-center justify-center shrink-0 border border-[#DCE4EA]">
                <img
                  src={INITIAL_PRODUCTS[2].image}
                  alt={INITIAL_PRODUCTS[2].name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = INITIAL_PRODUCTS[2].fallbackImage;
                  }}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-2 text-left">
                <span className="text-[11px] font-mono text-[#315B7D] font-bold">
                  {INITIAL_PRODUCTS[2].code}
                </span>
                <h3 className="text-base font-bold text-[#263238] font-heading">
                  {INITIAL_PRODUCTS[2].name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precision side lubricator port with milled keyway face for positive alignment within suspension steering knuckles.
                </p>
                <button
                  onClick={() => onViewProductDetails(INITIAL_PRODUCTS[2])}
                  className="text-xs font-bold text-[#315B7D] hover:text-[#274964] flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* King Pin Bush Showcase */}
            <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl flex flex-col sm:flex-row items-center gap-6 shadow-xs">
              <div className="h-44 w-36 bg-[#FAFBFB] rounded-lg p-3 flex items-center justify-center shrink-0 border border-[#DCE4EA]">
                <img
                  src={INITIAL_PRODUCTS[3].image}
                  alt={INITIAL_PRODUCTS[3].name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = INITIAL_PRODUCTS[3].fallbackImage;
                  }}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-2 text-left">
                <span className="text-[11px] font-mono text-[#315B7D] font-bold">
                  {INITIAL_PRODUCTS[3].code}
                </span>
                <h3 className="text-base font-bold text-[#263238] font-heading">
                  {INITIAL_PRODUCTS[3].name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sacrificial knuckle wear bushing engineered with close concentric tolerances to prolong commercial vehicle axle life.
                </p>
                <button
                  onClick={() => onViewProductDetails(INITIAL_PRODUCTS[3])}
                  className="text-xs font-bold text-[#315B7D] hover:text-[#274964] flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Honest Profile Notice */}
      <section className="py-12 bg-[#F2F4F6] border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#263238] font-heading uppercase tracking-wide">
                Engineering Integrity & Verified Catalogue
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl">
                This project presents honest, uninflated technical manufacturing information. We do not claim unverified certifications or capacity numbers, focusing strictly on functional commercial vehicle component engineering.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              Explore Components
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </div>
  );
};
