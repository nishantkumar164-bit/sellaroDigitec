import React from 'react';
import ContactFAQ from './ContactFAQ';
import { homeFaqs } from '../../data/FAQ/homefaq';

const FAQ = () => {
  return (
    <ContactFAQ
      badge="FAQ"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our ecommerce growth services."
      faqs={homeFaqs}
    />
  );
};

export default FAQ;