import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Blueprint from '../components/sections/Blueprint';
import CaseStudies from '../components/sections/CaseStudies';
import ROICalculator from '../components/sections/ROICalculator';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

const Home = ({ onOpenForm, currency, onCurrencyToggle, handleScrollToROI }) => {
  return (
    <>
      <Hero
        onOpenForm={onOpenForm}
        onScrollToROI={handleScrollToROI}
      />
      <Services />
      <Blueprint />
      <CaseStudies />
      <ROICalculator
        onOpenForm={onOpenForm}
        currency={currency}
        onCurrencyToggle={onCurrencyToggle}
      />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <ContactCTA
        badge="Ready To Scale?"
        title="Let's Grow Your"
        highlightedText="Business Faster"
        description="Book a free consultation and discover how Sellaro Digitec can help you scale revenue across marketplaces."
        buttonText="Book Free Strategy Call"
        onButtonClick={onOpenForm}
      />
    </>
  );
};

export default Home;
