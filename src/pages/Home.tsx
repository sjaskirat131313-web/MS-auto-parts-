import React from 'react';
import { PageId, Product } from '../types';
import { INITIAL_PRODUCTS, COMPANY_DETAILS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ContactSection } from '../components/ContactSection';
import {
  ArrowRight,
  Shield,
  Cog,
  Wrench,
  CheckCircle,
  Truck,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onViewProductDetails: (product: Product) => void;
  onRequestPrice: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onViewProductDetails,
  onRequestPrice,
}) => {
  // Use the uploaded Stepped King Pin or Spiral Groove Pin in the Hero
  const heroProduct = INITIAL_PRODUCTS[1] || INITIAL_PRODUCTS[0];

  const whyChoosePoints = [
    {
      title: 'Precision-Focused Components',
      description:
        'Engineered with exacting dimensional tolerances ensuring accurate fitment inside commercial vehicle steering knuckles and front axles.',
      icon: Cog,
    },
    {
      title: 'Automotive Industry Expertise',
      description:
        'Focused exclusively on critical steering pivot and suspension joint parts for medium and heavy commercial vehicle categories.',
      icon: Truck,
    },
    {
      title: 'Product Quality Commitment',
      description:
        'Continuous attention to uniform surface finish, concentricity, and structural integrity under dynamic road vibration.',
      icon: Shield,
    },
    {
      title: 'Customer-Focused Approach',
      description:
        'Flexible consultation on customer vehicle requirements, dimensions, drawing verifications, and order lot sizing.',
      icon: CheckCircle,
    },
    {
      title: 'Heavy Vehicle Component Range',
      description:
        'Specialized production of stepped king pins, spiral lubrication pins, oil-hole designs, and companion axle wear bushes.',
      icon: Layers,
    },
  ];

  const categories = [
    {
      name: 'Heavy Vehicle King Pins',
      count: 'Precision Machined',
      desc: 'Stepped and straight-diameter king pins designed for heavy-duty front steering knuckle assemblies.',
      code: 'MS-KP-001',
      tag: 'Front Axle Pivot',
    },
    {
      name: 'Lubrication Groove King Pins',
      count: 'Helical & Spiral',
      desc: 'Engineered spiral channels to distribute grease along rotational friction contact zones.',
      code: 'MS-KP-002',
      tag: 'Continuous Lubrication',
    },
    {
      name: 'Oil-Hole King Pins',
      count: 'Direct Ported',
      desc: 'Internal conduits with precision side ports and anti-rotation keyway flats for positive locking.',
      code: 'MS-KP-003',
      tag: 'Channel Lubricated',
    },
    {
      name: 'Automotive Bushes',
      count: 'Sacrificial Wear Sleeves',
      desc: 'Close-tolerance cylindrical bushes engineered to protect axle beam bores and retain steering stability.',
      code: 'MS-BU-001',
      tag: 'Steering Assembly',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F2F4F6] text-[#263238]">
      
      {/* =========================================================================
          SECTION 1: HERO BANNER (CLEAN WHITE BACKGROUND, STEEL BLUE ACCENTS)
          ========================================================================= */}
      <section className="bg-white border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F2F4F6] border border-[#DCE4EA] text-xs font-bold text-[#315B7D] uppercase tracking-wider font-mono">
                <span>{COMPANY_DETAILS.name}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#263238] font-heading tracking-tight leading-[1.15]">
                Precision Engineering.{' '}
                <span className="text-[#315B7D]">
                  Reliable Performance.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {COMPANY_DETAILS.subheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('login')}
                  className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#263238] bg-[#F2F4F6] hover:bg-[#E5E9ED] rounded-lg border border-[#DCE4EA] transition-colors cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#DCE4EA] text-left">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Component Class
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#263238] font-heading mt-0.5">
                    Commercial Axle
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Machining Focus
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#263238] font-heading mt-0.5">
                    High Concentricity
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Core Range
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#263238] font-heading mt-0.5">
                    Pins & Bushes
                  </div>
                </div>
              </div>

            </div>

            {/* Right Visual Column: Genuine Uploaded Component Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-[#DCE4EA] rounded-xl p-5 shadow-xs">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-[#DCE4EA] text-xs">
                  <span className="font-mono text-[#315B7D] font-bold">
                    {heroProduct.code}
                  </span>
                  <span className="text-slate-500 font-medium">
                    Original Component Photo
                  </span>
                </div>

                {/* Hero Product Photo with strict object-fit: contain */}
                <div className="relative h-72 sm:h-84 w-full bg-[#FAFBFB] rounded-lg my-3 flex items-center justify-center p-4 border border-[#DCE4EA]">
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = heroProduct.fallbackImage;
                    }}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Component Label */}
                <div className="pt-3 border-t border-[#DCE4EA] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#263238] font-heading">
                      {heroProduct.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {heroProduct.category}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => onViewProductDetails(heroProduct)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#263238] bg-[#F2F4F6] hover:bg-[#E5E9ED] border border-[#DCE4EA] rounded-lg transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F2F4F6] border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Company Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] font-heading tracking-tight leading-tight">
                Dedicated Automotive Parts Manufacturing
              </h2>
              <div className="w-12 h-1 bg-[#315B7D] rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                <strong className="text-[#263238]">MS AUTO PART INDUSTRIES</strong> is dedicated to the manufacturing of high-integrity heavy commercial vehicle automotive components. Operating in the commercial vehicle front axle segment, our focus is centered on king pins, spiral groove lubrication pins, oil-hole king pins, and matching wear bushes.
              </p>
              <p className="text-slate-600">
                Front axle steering knuckles bear immense vertical loads and continuous rotational friction while steering loaded commercial transport vehicles. Our engineering methodology emphasizes precise cylindrical tolerances, surface finish consistency, and dependable material hardness designed to meet exacting vehicle application criteria.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-semibold text-[#263238]">
                <span className="px-3 py-1 bg-white border border-[#DCE4EA] rounded">
                  ✓ Heavy Commercial Vehicle Focus
                </span>
                <span className="px-3 py-1 bg-white border border-[#DCE4EA] rounded">
                  ✓ Front Axle & Knuckle Assemblies
                </span>
                <span className="px-3 py-1 bg-white border border-[#DCE4EA] rounded">
                  ✓ Precision Machined Tolerances
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED PRODUCTS CATALOGUE (ALL 4 ORIGINAL PHOTOGRAPHS)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Component Catalogue
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263238] font-heading tracking-tight mt-1">
                Featured Automotive Products
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Explore our commercial vehicle king pins and matching bushes. All items photographed from actual manufactured batches.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#315B7D] hover:text-[#274964] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIAL_PRODUCTS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={onViewProductDetails}
                onRequestPrice={onRequestPrice}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PRODUCT CATEGORIES
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F2F4F6] border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
              Manufacturing Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] font-heading tracking-tight mt-1">
              Core Product Categories
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Specialized classifications tailored for heavy commercial transport axles and steering pivots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-[#DCE4EA] rounded-xl shadow-xs hover:border-[#315B7D]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-[#315B7D] font-bold">{cat.code}</span>
                    <span className="text-[11px] text-slate-500">{cat.tag}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#263238] font-heading mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE4EA] flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{cat.count}</span>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-xs font-bold text-[#315B7D] hover:text-[#274964] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>View</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE US
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
              Engineering Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263238] font-heading tracking-tight mt-1">
              Why Choose MS Auto Part Industries
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our business is built upon precision engineering, automotive industry commitment, and direct customer cooperation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => {
              const IconComp = point.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-[#F2F4F6] border border-[#DCE4EA] rounded-xl hover:border-[#315B7D]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#DCE4EA] flex items-center justify-center text-[#315B7D] mb-4 shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#263238] font-heading mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}

            {/* Sixth Card: Credibility Card */}
            <div className="p-6 bg-white border border-[#DCE4EA] rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F2F4F6] border border-[#DCE4EA] flex items-center justify-center text-[#315B7D] mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#263238] font-heading mb-2">
                  Transparent Specifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We state verified component properties without exaggerated claims, ensuring commercial vehicle operators receive accurately matched parts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DCE4EA] text-[11px] text-[#315B7D] font-mono font-bold">
                Precision Machined Grade
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 & 7: QUALITY COMMITMENT & MANUFACTURING FOCUS
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F2F4F6] border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Quality Commitment Box */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                Inspection & Reliability
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] font-heading tracking-tight">
                Our Quality Commitment
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                In heavy commercial transportation, king pin failure results in severe steering assembly breakdown and roadside stoppage. Therefore, MS Auto Part Industries treats quality as a core engineering obligation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider">
                      Dimensional Accuracy
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Close tolerance machining to match king pin bush bores and axle beam seating.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider">
                      Surface Finish Integrity
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Smooth precision-ground exterior to minimize frictional wear against steering bushes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider">
                      Lubrication Path Verification
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Deburred spiral grooves and unobstructed oil-holes for uniform grease dispersion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Focus Box */}
            <div className="p-7 bg-white border border-[#DCE4EA] rounded-xl shadow-xs space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Machining Operations
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#263238] font-heading">
                Manufacturing Focus Areas
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-[#F2F4F6] rounded-lg border border-[#DCE4EA]">
                  <strong className="text-[#315B7D] block mb-1">
                    1. Stepped Cylindrical Turning:
                  </strong>
                  Multi-diameter turning designed to seat securely into upper and lower knuckle bearings with threaded end geometry.
                </div>

                <div className="p-3 bg-[#F2F4F6] rounded-lg border border-[#DCE4EA]">
                  <strong className="text-[#315B7D] block mb-1">
                    2. Spiral & Helical Milling:
                  </strong>
                  Helical grooves milled to optimize grease circulation under continuous turning forces.
                </div>

                <div className="p-3 bg-[#F2F4F6] rounded-lg border border-[#DCE4EA]">
                  <strong className="text-[#315B7D] block mb-1">
                    3. Bush Press-Fit Concentricity:
                  </strong>
                  Bushing manufacturing centered on concentricity to prevent uneven tire wear and knuckle play.
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-[#DCE4EA]">
                <span>Direct B2B Manufacturing</span>
                <span className="text-[#315B7D] font-bold">Strict Dimensional Discipline</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CUSTOMER ENQUIRY CALL TO ACTION
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#DCE4EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2F4F6] border border-[#DCE4EA] rounded text-xs font-bold text-[#315B7D] uppercase tracking-wider">
              <span>Ready for Procurement Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#263238] font-heading tracking-tight">
              Request a Commercial Component Quote
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Require specific dimensions or vehicle model compatibility for Stepped King Pins, Spiral Groove Pins, or Axle Bushes? Submit an enquiry or draft a quote request online.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('login')}
                className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>Open Enquiry & Login Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#263238] bg-[#F2F4F6] hover:bg-[#E5E9ED] rounded-lg border border-[#DCE4EA] transition-colors cursor-pointer"
              >
                <span>Browse All 4 Products</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CONTACT SECTION
          ========================================================================= */}
      <ContactSection />

    </div>
  );
};
