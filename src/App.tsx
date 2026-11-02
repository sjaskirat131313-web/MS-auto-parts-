import React, { useState, useEffect } from 'react';
import { PageId, Product } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [preselectedProductId, setPreselectedProductId] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleRequestPrice = (product: Product) => {
    setPreselectedProductId(product.id);
    setCurrentPage('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F4F6] text-[#263238] selection:bg-[#315B7D] selection:text-white">
      
      {/* Universal Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onViewProductDetails={handleViewProductDetails}
            onRequestPrice={handleRequestPrice}
          />
        )}

        {currentPage === 'products' && (
          <Products
            onNavigate={handleNavigate}
            onViewProductDetails={handleViewProductDetails}
            onRequestPrice={handleRequestPrice}
          />
        )}

        {currentPage === 'about' && (
          <About
            onNavigate={handleNavigate}
            onViewProductDetails={handleViewProductDetails}
          />
        )}

        {currentPage === 'login' && (
          <Login
            onNavigate={handleNavigate}
            preselectedProductId={preselectedProductId}
            onClearPreselection={() => setPreselectedProductId(undefined)}
          />
        )}
      </main>

      {/* Product Details & Specifications Modal Popup */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onRequestPrice={handleRequestPrice}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-30 p-2.5 rounded-lg bg-[#315B7D] hover:bg-[#274964] text-white shadow-md transition-colors cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Universal Consistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        onContactClick={() => {
          const contactElement = document.getElementById('contact-section');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            handleNavigate('login');
          }
        }}
      />
    </div>
  );
}
