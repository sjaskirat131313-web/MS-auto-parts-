import React, { useState, useMemo } from 'react';
import { Product, PageId } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Search,
  DollarSign,
  ArrowUpDown,
  RotateCcw,
  Layers,
  Info,
} from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: PageId) => void;
  onViewProductDetails: (product: Product) => void;
  onRequestPrice: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onNavigate,
  onViewProductDetails,
  onRequestPrice,
}) => {
  const [productsList, setProductsList] = useState<Product[]>(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOption, setSortOption] = useState<'name-asc' | 'name-desc' | 'code-asc'>('name-asc');
  
  // Interactive Price Simulator for demonstration
  const [showPriceSimulator, setShowPriceSimulator] = useState(false);
  const [customPrices, setCustomPrices] = useState<Record<string, string>>({
    'stepped-king-pin': '',
    'spiral-groove-king-pin': '',
    'oil-hole-king-pin': '',
    'king-pin-bush': '',
  });

  const categories = [
    'All',
    'Heavy Vehicle King Pin',
    'Lubrication Groove King Pin',
    'Oil-Hole King Pin',
    'Automotive Bush',
  ];

  const filteredProducts = useMemo(() => {
    let result = productsList.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    result.sort((a, b) => {
      if (sortOption === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortOption === 'code-asc') {
        return a.code.localeCompare(b.code);
      }
      return 0;
    });

    return result;
  }, [productsList, searchQuery, selectedCategory, sortOption]);

  const handleUpdatePrice = (productId: string, val: string) => {
    setCustomPrices((prev) => ({ ...prev, [productId]: val }));
    const numeric = val.trim() === '' ? null : parseFloat(val);
    setProductsList((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, price: isNaN(numeric as number) ? null : numeric } : item
      )
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortOption('name-asc');
  };

  return (
    <div className="min-h-screen bg-[#F2F4F6] text-[#263238] pb-16">
      
      {/* Page Header */}
      <div className="bg-white border-b border-[#DCE4EA] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono mb-2">
              <span>Automotive Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#263238] font-heading tracking-tight">
              Commercial King Pins & Bushes
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore precision-machined heavy commercial vehicle front axle components. High concentricity, superior finish, and durable steering pivot solutions.
            </p>
          </div>

          {/* Pricing System Demonstration Strip */}
          <div className="mt-8 p-4 bg-[#F2F4F6] border border-[#DCE4EA] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE4EA] flex items-center justify-center text-[#315B7D] shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider">
                  Pricing Architecture: Indian Rupees (₹)
                </h4>
                <p className="text-xs text-slate-600">
                  Initial catalogue state displays <strong className="text-[#315B7D] font-mono">REQUEST A QUOTE</strong>. Pricing automatically renders in ₹ INR when configured.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPriceSimulator(!showPriceSimulator)}
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#263238] bg-white hover:bg-slate-50 rounded-lg border border-[#DCE4EA] transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              {showPriceSimulator ? 'Hide Price Simulator' : 'Test ₹ Price Display'}
            </button>
          </div>

          {/* Collapsible Price Simulator Box */}
          {showPriceSimulator && (
            <div className="mt-4 p-5 bg-white border border-[#315B7D]/40 rounded-xl animate-in fade-in duration-150">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#315B7D] font-mono">
                    Live ₹ Currency & Price Configuration Tool
                  </h5>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Enter test prices in Indian Rupees (₹) below to see cards immediately switch from "REQUEST A QUOTE" to active formatted currency (e.g. ₹ 1,450). Clear the box to return to quote mode.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {productsList.map((prod) => (
                  <div key={prod.id} className="p-3 bg-[#F2F4F6] rounded-lg border border-[#DCE4EA]">
                    <span className="text-xs font-semibold text-[#263238] block truncate">
                      {prod.name} ({prod.code})
                    </span>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#315B7D]">₹</span>
                      <input
                        type="number"
                        placeholder="e.g. 1500"
                        value={customPrices[prod.id] || ''}
                        onChange={(e) => handleUpdatePrice(prod.id, e.target.value)}
                        className="w-full px-2 py-1 bg-white border border-[#DCE4EA] rounded text-xs text-[#263238] placeholder-slate-400 focus:outline-none focus:border-[#315B7D]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Main Search, Filter & Catalogue Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Search & Sort Controls Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-white border border-[#DCE4EA] rounded-xl mb-8 shadow-xs">
          
          {/* Search Input (By Name or Code) */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components by name (e.g. King Pin) or code (e.g. MS-KP-001)..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#DCE4EA] rounded-lg text-sm text-[#263238] placeholder-slate-400 focus:outline-none focus:border-[#315B7D] focus:ring-1 focus:ring-[#315B7D]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-[#263238]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium whitespace-nowrap">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#315B7D]" />
              <span>Sort:</span>
            </div>
            
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="px-3 py-2 bg-white border border-[#DCE4EA] rounded-lg text-xs text-[#263238] focus:outline-none focus:border-[#315B7D] cursor-pointer"
            >
              <option value="name-asc">Alphabetical (A - Z)</option>
              <option value="name-desc">Alphabetical (Z - A)</option>
              <option value="code-asc">Product Code (MS-KP...)</option>
            </select>

            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#263238] bg-[#F2F4F6] border border-[#DCE4EA] rounded-lg transition-colors cursor-pointer"
                title="Reset all search queries and category filters"
              >
                <RotateCcw className="w-3 h-3 text-slate-500" />
                <span>Reset</span>
              </button>
            )}
          </div>

        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1 text-xs text-slate-500 font-bold uppercase tracking-wider mr-2 shrink-0">
            <Layers className="w-3.5 h-3.5 text-[#315B7D]" />
            <span>Categories:</span>
          </div>
          
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#315B7D] text-white shadow-xs'
                    : 'bg-white border border-[#DCE4EA] text-[#263238] hover:bg-[#F2F4F6]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Catalogue Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={onViewProductDetails}
                onRequestPrice={onRequestPrice}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white border border-[#DCE4EA] rounded-xl space-y-3 shadow-xs">
            <p className="text-base text-[#263238] font-bold">
              No products found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or reset the filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-3 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Notice on Specifications */}
        <div className="mt-12 p-4 bg-white border border-[#DCE4EA] rounded-xl flex items-start gap-3 text-xs text-slate-600 shadow-xs">
          <Info className="w-4 h-4 text-[#315B7D] shrink-0 mt-0.5" />
          <p>
            All four products pictured are genuine commercial vehicle components of MS Auto Part Industries. To ensure precision fitment with your axle beam, click <strong>"View Details"</strong> for engineering notes or <strong>"Request Price"</strong> to draft an RFQ with custom dimensions.
          </p>
        </div>

      </div>
    </div>
  );
};
