import React, { useState } from 'react';
import { Product } from '../types';
import { Eye, Send, Tag, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onRequestPrice: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onRequestPrice,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(product.image);

  // If primary image path fails, fallback to uploaded direct path
  const handleImageError = () => {
    if (imgSrc !== product.fallbackImage) {
      setImgSrc(product.fallbackImage);
    }
  };

  return (
    <div className="flex flex-col bg-white border border-[#DCE4EA] rounded-xl overflow-hidden shadow-xs hover:border-[#315B7D]/50 transition-all duration-200">
      
      {/* Top Header Strip: Code & Category */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F2F4F6] border-b border-[#DCE4EA] text-xs">
        <div className="flex items-center gap-1.5 font-mono text-[#315B7D] font-bold tracking-wide">
          <Tag className="w-3.5 h-3.5" />
          <span>{product.code}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500 font-medium truncate max-w-[170px]">
          <Layers className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="truncate">{product.category}</span>
        </div>
      </div>

      {/* Product Image Frame: Strict object-fit contain on clean light-grey neutral backdrop */}
      <div className="relative w-full h-64 sm:h-72 bg-[#FAFBFB] flex items-center justify-center p-5 border-b border-[#DCE4EA]">
        <img
          src={imgSrc}
          alt={product.name}
          onError={handleImageError}
          referrerPolicy="no-referrer"
          className="relative max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 space-y-4 bg-white">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#263238] font-heading">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Commercial Status */}
        <div className="pt-3 border-t border-[#DCE4EA] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
              Price Status
            </span>
            <div className="text-sm font-bold text-[#263238] font-mono">
              {product.price !== null ? (
                <span className="text-[#315B7D] text-base font-bold">
                  ₹ {product.price.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-500 font-sans font-normal ml-1">/ unit</span>
                </span>
              ) : (
                <span className="text-[#315B7D] tracking-wide font-sans text-xs sm:text-sm font-bold">
                  REQUEST A QUOTE
                </span>
              )}
            </div>
          </div>
          
          <span className="text-[11px] text-slate-500 font-medium bg-[#F2F4F6] px-2 py-0.5 rounded border border-[#DCE4EA]">
            Heavy Axle Grade
          </span>
        </div>

        {/* Action Buttons: View Details & Request Price */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#263238] bg-[#F2F4F6] hover:bg-[#E5E9ED] rounded-lg border border-[#DCE4EA] transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>View Details</span>
          </button>

          <button
            onClick={() => onRequestPrice(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#315B7D] hover:bg-[#274964] rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Request Price</span>
          </button>
        </div>
      </div>
    </div>
  );
};
