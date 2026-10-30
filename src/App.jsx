import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import GlassModal from './components/common/GlassModal';
import ContactAuditForm from './components/forms/ContactAuditForm';
import ScrollToTop from './components/common/ScrollToTop';
//Country pages
import CountryPage from './pages/countires/CountryPage';


// Core Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import NewAccountLaunch from './pages/NewAccountLaunch';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndCondition';
import CachePolicy from './pages/CachePolicy';
import { MetaAds, ContentDesign, InfluencerMarketing, VideoEditing } from './pages/services/SocialMediaSubpages';
import { ShopifyDevelopment, WordPressDevelopment, CustomWebsiteDevelopment, WebsiteRedesign, ProductCatalogWebsite } from './pages/services/WebsiteSubPages';

// Nested Account Management Pages
import {
  AmazonAccount,
  FlipkartAccount,
  MeeshoAccount,
  JoimartAccount,
  EbayAccount,
  EtsyAccount,
  WalmartAccount
} from './pages/services/AccountManagementSubpages';

// Nested Digital Marketing Pages
import {
  GoogleSearchAds,
  GoogleDisplayAds,
  GoogleProductsListing,
  GoogleShoppingAds
} from './pages/services/DigitalMarketingSubpages';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FreeAudit from "./pages/FreeAudit";



const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Geolocation / Timezone Auto-Resolver
  useEffect(() => {
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const userLang = navigator.language || '';

      const isIndianVisitor =
        userTimeZone === 'Asia/Kolkata' ||
        userTimeZone === 'Asia/Calcutta' ||
        userLang.toLowerCase() === 'en-in' ||
        userLang.toLowerCase() === 'hi-in';

      if (isIndianVisitor) {
        setCurrency('INR');
      } else {
        setCurrency('USD');
      }
    } catch (e) {
      console.warn('Geolocation auto-detection offline, defaulting to USD', e);
      setCurrency('USD');
    }
  }, []);

  const handleCurrencyToggle = () => {
    setCurrency((prev) => (prev === 'USD' ? 'INR' : 'USD'));
  };

  const handleScrollToROI = () => {
    const roiSec = document.getElementById('roi-calculator');
    if (roiSec) {
      roiSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <Router>

      <ScrollToTop />

      <div className="relative min-h-screen bg-obsidian-950 overflow-x-hidden text-slate-800 flex flex-col">
        {/* Sticky navigation */}
        <Navbar
          currency={currency}
          onCurrencyToggle={handleCurrencyToggle}
        />

        {/* Main Content Area */}
        {/* Main Content Area */}
        <main className="flex-1 pt-[88px] lg:pt-[96px]">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenForm={handleOpenContactModal}
                  currency={currency}
                  onCurrencyToggle={handleCurrencyToggle}
                  handleScrollToROI={handleScrollToROI}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenForm={handleOpenContactModal}
                />
              }
            />

            {/* Main Menu Pages */}
            <Route
              path="/launch"
              element={
                <NewAccountLaunch
                  onOpenForm={handleOpenContactModal}
                />
              }
            />

            {/* <Route path="/portfolio" element={<Portfolio onOpenForm={handleOpenContactModal} />} /> */}
            <Route path="/contact" element={<Contact onOpenForm={handleOpenContactModal} />} />

            {/* Nested Account Management Routes */}
            <Route
              path="/services/amazon"
              element={
                <AmazonAccount
                  onOpenForm={handleOpenContactModal}
                />
              }
            />
            <Route path="/services/flipkart" element={<FlipkartAccount onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/meesho" element={<MeeshoAccount onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/joimart" element={<JoimartAccount onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/ebay" element={<EbayAccount onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/etsy" element={<EtsyAccount onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/walmart" element={<WalmartAccount onOpenForm={handleOpenContactModal} />} />


            {/* Nested Digital Marketing Routes */}
            <Route path="/services/google-search-ads" element={<GoogleSearchAds onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/google-display-ads" element={<GoogleDisplayAds onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/google-products-listing" element={<GoogleProductsListing onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/google-shopping-ads" element={<GoogleShoppingAds onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/meta-ads" element={<MetaAds onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/content-design" element={<ContentDesign onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/video-editing" element={<VideoEditing onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/shopify" element={<ShopifyDevelopment onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/wordpress" element={<WordPressDevelopment onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/custom-website" element={<CustomWebsiteDevelopment onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/website-redesign" element={<WebsiteRedesign onOpenForm={handleOpenContactModal} />} />
            <Route path="/services/product-catalouge-design" element={<ProductCatalogWebsite onOpenForm={handleOpenContactModal} />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/cache-policy" element={<CachePolicy />} />
            <Route
              path="/uk"
              element={
                <CountryPage
                  country="uk"
                  onOpenForm={handleOpenContactModal}
                />
              }
            />

            <Route
              path="/usa"
              element={
                <CountryPage
                  country="usa"
                  onOpenForm={handleOpenContactModal}
                />
              }
            />

          <Route
            path="/uae"
            element={
              <CountryPage
                country="uae"
                onOpenForm={handleOpenContactModal}
              />
            }
          />

        <Route
          path="/canada"
          element={
            <CountryPage
              country="canada"
              onOpenForm={handleOpenContactModal}
            />
          }
        />

        <Route
          path="/australia"
          element={
            <CountryPage
              country="australia"
              onOpenForm={handleOpenContactModal}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/free-audit" element={<FreeAudit />} />

          </Routes>
        </main>

        {/* Global Footer */}
        <GlassModal
          isOpen={isContactModalOpen}
          onClose={handleCloseContactModal}
          title="Get Free Ecommerce Growth Audit"
        >
          <ContactAuditForm />
        </GlassModal>

        <Footer />
            {/* Comenting the whatsapp Icon just to test  */}
        {/* Floating WhatsApp Button
        <a
          href="https://wa.me/+919031047291"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window.fbq === 'function') {
              window.fbq('trackCustom', 'WhatsAppEnquiry', {
                content_name: 'Floating WhatsApp Button',
              });
            }
          }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a> */}

      </div>
    </Router>
  );
};

export default App;
