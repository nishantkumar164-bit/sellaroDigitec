
import { LineChart, Palette, Megaphone, Globe, Check, Store, SearchCheck } from 'lucide-react';
import Card from '../common/Card';
import React, { useState } from 'react';
import GlassModal from '../common/GlassModal';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate();
  const coreServices = [
    {
      icon: Store,
      illustration: '/image/illustrations/marketplace.webp',
      title: 'Full-Service Marketplace Operations',
      glow: 'blue',
      description: 'Launch, manage, and scale your seller accounts across Amz, Flipkart, Walmart, Etsy, eBay, Meesho, and JioMart. Our dedicated account managers handle onboarding, compliance, catalog optimization, and day-to-day marketplace operations to maximize performance.',
      deliverables: [
        'Amz Seller Account Management',
        'Flipkart, Meesho, JioMart Account Management',
        'Walmart Marketplace Management',
        'Etsy & eBay Store Management',
        'Marketplace Compliance & Support',
        'Seller Performance Monitoring',
        'Account Health Optimization'
      ],
      badge: 'Marketplace Account Management',
      story: {
        heroTag: 'Marketplace Growth Engine',

        heroTitle: 'Marketplace Operations Transformation',

        heroDescription:
          'Helping brands streamline marketplace operations, improve account health, optimize catalog performance, and scale revenue across Amz, Flipkart, Walmart, Etsy, eBay, Meesho, and JioMart.',

        before: [
          'Account Health Issues',
          'Catalog Errors',
          'Poor Marketplace Visibility',
          'Inconsistent Sales Performance'
        ],

        after: [
          'Healthy Seller Accounts',
          'Optimized Catalogs',
          'Improved Marketplace Rankings',
          'Scalable Revenue Growth'
        ],

        approachTitle: 'Our Marketplace Management Framework',

        approach: [
          'Seller Account Setup & Compliance',
          'Catalog Management & Optimization',
          'Performance Monitoring & Reporting',
          'Continuous Marketplace Growth Strategy'
        ],

        resultsTitle: 'Results Delivered',

        results: [
          {
            value: '+55%',
            label: 'Marketplace Revenue'
          },
          {
            value: '+38%',
            label: 'Conversion Rate'
          },
          {
            value: '99%',
            label: 'Account Health Score'
          }
        ],

        deliverablesTitle: 'Marketplace Services Delivered'
      }
    },
    {
      icon: SearchCheck,
      illustration: '/image/illustrations/listing.webp',
      title: 'Product Listing Optimization & A+ Content',
      glow: 'emerald',
      description: 'Increase product visibility and conversions through marketplace SEO, keyword-rich listings, A+ content design, enhanced brand content, and optimized product detail pages.',
      deliverables: [
        'Amz Listing Creation',
        'Product SEO Optimization',
        'A+ Content Design',
        'Keyword Research & Ranking',
        'Catalog Structure Optimization',
        'Conversion Rate Improvement'
      ],
      badge: 'LISTING SEO & CATALOG OPTIMIZATION',
      story: {
        heroTag: 'Listing Optimization Engine',

        heroTitle: 'Product Listing Transformation',

        heroDescription:
          'Helping brands improve product discoverability, marketplace rankings, and conversion rates through optimized listings, keyword strategy, and premium A+ content.',

        before: [
          'Low Product Visibility',
          'Weak Search Rankings',
          'Poor Product Detail Pages',
          'Low Conversion Rates'
        ],

        after: [
          'Higher Search Rankings',
          'Improved Discoverability',
          'Premium Product Pages',
          'Better Conversion Rates'
        ],

        approachTitle: 'Our Listing Optimization Framework',

        approach: [
          'Keyword Research & Competitor Analysis',
          'SEO Optimized Product Listings',
          'A+ Content Design & Enhancement',
          'Conversion Rate Optimization'
        ],

        resultsTitle: 'Results Delivered',

        results: [
          {
            value: '+68%',
            label: 'Organic Visibility'
          },
          {
            value: '+44%',
            label: 'Conversion Rate'
          },
          {
            value: '+35%',
            label: 'Revenue Growth'
          }
        ],

        deliverablesTitle: 'Listing Services Delivered'
      }
    },
    {
      icon: Globe,
      illustration: '/image/illustrations/shopify.webp',
      title: 'Shopify, WooCommerce & Custom Websites',
      glow: 'gold',
      description: 'Build high-converting ecommerce stores with Shopify, WooCommerce, and custom ecommerce solutions designed for speed, scalability, and superior customer experience.',
      deliverables: [
        'Shopify Store Development',
        'WooCommerce Development',
        'Custom Ecommerce Websites',
        'Conversion-Focused Design',
        'Mobile Optimization',
        'Payment & Shipping Integration'
      ],
      badge: 'SHOPIFY & ECOMMERCE DEVELOPMENT',
      story: {
        heroTag: 'Ecommerce Development',

        heroTitle: 'Website Growth Transformation',

        heroDescription:
          'Building high-performing ecommerce websites that improve customer experience, increase conversion rates, and create a scalable foundation for online growth.',

        before: [
          'Outdated Website Design',
          'Slow Page Speed',
          'Poor Mobile Experience',
          'Low Conversion Rates'
        ],

        after: [
          'Modern Storefront',
          'Fast & Responsive Experience',
          'Optimized Checkout Journey',
          'Higher Conversion Performance'
        ],

        approachTitle: 'Our Ecommerce Development Process',

        approach: [
          'Business Requirement Discovery',
          'UI/UX & Conversion Focused Design',
          'Development & Integrations',
          'Performance Optimization & Launch'
        ],

        resultsTitle: 'Results Delivered',

        results: [
          {
            value: '+41%',
            label: 'Conversion Rate'
          },
          {
            value: '+63%',
            label: 'Mobile Engagement'
          },
          {
            value: '+29%',
            label: 'Revenue Growth'
          }
        ],

        deliverablesTitle: 'Development Services Delivered'
      }
    },
    {
      icon: Megaphone,
      illustration: '/image/illustrations/google.webp',
      title: 'Google & Meta Advertising',
      glow: 'blue',
      description: 'Generate qualified traffic and profitable sales through data-driven Google Ads, Meta Ads, retargeting campaigns, and marketplace advertising strategies.',
      deliverables: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'Amz PPC Campaigns',
        'Conversion Tracking Setup',
        'ROAS Optimization',
        'Audience Targeting'
      ],
      badge: 'PERFORMANCE MARKETING',
      story: {
        heroTag: 'Performance Marketing Engine',

        heroTitle: 'Paid Growth Transformation',

        heroDescription:
          'Helping ecommerce brands scale profitably through Google Ads, Meta Advertising, retargeting campaigns, audience segmentation, and conversion-focused performance marketing strategies.',

        before: [
          'High Advertising Spend',
          'Low Return On Ad Spend',
          'Poor Audience Targeting',
          'Unpredictable Lead & Sales Volume'
        ],

        after: [
          'Profitable Ad Campaigns',
          'Improved ROAS',
          'Qualified Traffic & Leads',
          'Predictable Revenue Growth'
        ],

        approachTitle: 'Our Performance Marketing Framework',

        approach: [
          'Full Funnel Campaign Strategy',
          'Google Ads & Meta Campaign Setup',
          'Conversion Tracking & Attribution',
          'Continuous ROAS Optimization & Scaling'
        ],

        resultsTitle: 'Campaign Performance Delivered',

        results: [
          {
            value: '5.4x',
            label: 'Average ROAS'
          },
          {
            value: '-37%',
            label: 'Lower Cost Per Acquisition'
          },
          {
            value: '+82%',
            label: 'Revenue Growth'
          }
        ],

        deliverablesTitle: 'Marketing Services Delivered'
      }
    },

    {
      icon: LineChart,
      illustration: '/image/illustrations/organic.webp',
      title: 'Organic Search Visibility',
      glow: 'blue',
      description: 'Drive long-term ecommerce growth through technical SEO, on-page optimization, keyword targeting, content marketing, and marketplace search optimization.',
      deliverables: [
        'Ecommerce SEO',
        'Technical SEO Audits',
        'Keyword Strategy',
        'Content Optimization',
        'Organic Traffic Growth',
        'Competitor Analysis'
      ],
      badge: 'ECOMMERCE SEO SERVICES',

      story: {
        heroTag: 'SEO Growth Engine',

        heroTitle: 'Organic Growth Transformation',

        heroDescription:
          'Helping ecommerce brands dominate search rankings, increase organic traffic, and generate sustainable revenue growth through strategic SEO and content optimization.',

        before: [
          'Low Organic Traffic',
          'Poor Keyword Rankings',
          'High Dependence on Paid Ads',
          'Limited Search Visibility'
        ],

        after: [
          'Top Ranking Keywords',
          'Sustainable Organic Growth',
          'Higher Search Visibility',
          'Reduced Customer Acquisition Cost'
        ],

        approach: [
          'Comprehensive Technical SEO Audit',
          'Keyword Research & Opportunity Analysis',
          'Content & Category Page Optimization',
          'Internal Linking & Site Architecture Improvements'
        ],

        results: [
          {
            value: '+180%',
            label: 'Organic Traffic'
          },
          {
            value: '+95',
            label: 'Keywords in Top 10'
          },
          {
            value: '+42%',
            label: 'Revenue Growth'
          }
        ]
      }
    },
    {
      icon: Palette,
      illustration: '/image/illustrations/branding.webp',
      title: 'Product Graphics, Photography & Brand Building',
      glow: 'emerald',
      description: 'Create compelling visual assets that improve click-through rates, build brand credibility, and increase conversions across marketplaces and ecommerce websites.',
      deliverables: [
        'Product Photography',
        'Product Video Production',
        'Infographic Design',
        'Product Graphics Design',
        'Brand Identity Design',
        'Social Media Creatives'
      ],
      badge: 'CREATIVE & BRAND DEVELOPMENT',

      story: {
        heroTag: 'Creative Growth Engine',

        heroTitle: 'Brand Transformation',

        heroDescription:
          'Helping ecommerce brands improve click-through rates, strengthen brand identity, and increase marketplace conversions through premium visual storytelling and high-performing creative assets.',

        before: [
          'Weak Product Images',
          'Low Click Through Rate',
          'Inconsistent Branding',
          'Poor Marketplace Visibility'
        ],

        after: [
          'Premium Product Assets',
          'Strong Brand Presence',
          'Better Conversion Rates',
          'Marketplace Ready Content'
        ],

        approachTitle: 'Our Creative Process',

        approach: [
          'Professional marketplace-ready product photography',
          'A+ Content and infographic design',
          'Brand identity and visual consistency',
          'Creative optimization for Amz, Walmart and Shopify'
        ],

        resultsTitle: 'Results Delivered',

        results: [
          {
            value: '+31%',
            label: 'CTR Increase'
          },
          {
            value: '+24%',
            label: 'Conversion Rate'
          },
          {
            value: '+18%',
            label: 'Revenue Growth'
          }
        ],

        deliverablesTitle: 'Creative Assets Delivered'
      }
    },

  ];

  return (
    <section
      id="services"
      className="relative pt-8 pb-20 md:pt-12 md:pb-24 overflow-hidden bg-obsidian-950"
    >

      {/* Background radial glow */}
      <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full glow-orb-gold pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-primary-500 font-extrabold tracking-widest uppercase bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 rounded-full">
            OUR ECOMMERCE GROWTH SERVICES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            360° Ecommerce Solutions<br />Built to Scale  <span className="text-brand-gradient">Online Revenue</span>.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            From marketplace onboarding and account management to Shopify development, SEO, paid advertising, and creative production, Sellaro Digitec Solutions provides end-to-end ecommerce growth services for brands selling across Amz, Walmart, Flipkart, Etsy, eBay, Meesho, JioMart, and direct-to-consumer websites.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                glowColor={service.glow}
                className="
relative
overflow-hidden
flex
flex-col
justify-between
min-h-[520px]
"
                onClick={() => service.story && setSelectedStory(service)}
              >
                <div>
                  {service.illustration && (
                    <div
                      className="
      absolute
      top-4
      -right-4
      opacity-80
      pointer-events-none
      hidden
      lg:block
    "
                    >
                      <img
                        src={service.illustration}
                        alt=""
                        className="w-60 h-60 object-contain"
                      />
                    </div>
                  )}
                  {/* Badge & Icon Area */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-3 rounded-xl border ${service.glow === 'emerald'
                      ? 'bg-accent-500/10 border-accent-500/20 text-accent-600'
                      : service.glow === 'gold'
                        ? 'bg-secondary-500/10 border-secondary-500/20 text-secondary-600'
                        : 'bg-primary-500/10 border-primary-500/20 text-primary-600'
                      }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] text-slate-700 font-extrabold uppercase bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Copy */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-3 lg:pr-24">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 lg:pr-24">
                    {service.description}
                  </p>
                </div>

                {/* Bullet Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 border-t border-slate-200/60 mt-auto">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                      <Check className="h-4 w-4 text-accent-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                {service.story && (
                  <div className="mt-5 flex items-center justify-end text-sm font-semibold text-primary-600">
                    View Success Story →
                  </div>
                )}
              </Card>
            );
          })}
        </div>

      </div>

      <GlassModal
        isOpen={!!selectedStory}
        onClose={() => setSelectedStory(null)}
      >

        {selectedStory && (
          <div className="space-y-10">

            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-slate-200 p-8 lg:p-10">

              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />

              <div className="relative z-10">

                <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-[0.2em]">
                  {selectedStory.story.heroTag}
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  {selectedStory.story.heroTitle}
                </h2>

                <h3 className="mt-3 text-xl lg:text-2xl font-semibold text-slate-700">
                  {selectedStory.title}
                </h3>

                <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-3xl">
                  {selectedStory.story.heroDescription}
                </p>

              </div>

            </div>

            {/* Before / After */}
            <div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Before vs After
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="rounded-2xl border border-red-100 bg-red-50 p-6">

                  <div className="text-red-600 font-bold uppercase tracking-wider text-sm mb-5">
                    Before
                  </div>

                  <ul className="space-y-4 text-slate-700">
                    {selectedStory.story.before.map((item, idx) => (
                      <li key={idx}>❌ {item}</li>
                    ))}
                  </ul>

                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

                  <div className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-5">
                    After
                  </div>

                  <ul className="space-y-4 text-slate-700">
                    {selectedStory.story.after.map((item, idx) => (
                      <li key={idx}>✅ {item}</li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* Creative Process */}
            <div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {selectedStory.story.approachTitle}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {selectedStory.story.approach.map((item, idx) => (
                  <div
                    key={idx}
                    className="
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                hover:shadow-md
                transition-all
              "
                  >
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Results */}
            <div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {selectedStory.story.resultsTitle}
              </h3>

              <div className="grid md:grid-cols-3 gap-5">

                {selectedStory.story.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="
        rounded-2xl
        bg-gradient-to-br
        from-orange-50
        to-white
        border
        border-orange-100
        p-8
        text-center
        shadow-sm
      "
                  >
                    <div className="text-5xl font-black text-orange-600">
                      {result.value}
                    </div>

                    <div className="mt-3 text-slate-700 font-semibold">
                      {result.label}
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* Deliverables */}
            <div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {selectedStory.story.deliverablesTitle}
              </h3>

              <div className="flex flex-wrap gap-3">

                {selectedStory.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="
                px-4
                py-2.5
                rounded-full
                bg-slate-100
                border
                border-slate-200
                text-sm
                font-medium
                text-slate-700
                hover:bg-orange-50
                hover:border-orange-200
                transition-all
              "
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-[#07112A] text-white p-8 lg:p-10">

              <h3 className="text-3xl lg:text-4xl font-bold">
                Ready To Scale Your Business?
              </h3>

              <p className="mt-4 text-slate-300 text-lg max-w-2xl leading-relaxed">
                Partner with Sellaro Digitec to unlock growth across
                marketplaces, ecommerce websites, SEO, paid advertising,
                and brand development.
              </p>

              <button
                onClick={() => {
                  setSelectedStory(null);
                  navigate('/contact');
                }}
                className="
            mt-8
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            text-white
            font-semibold
            shadow-lg
            shadow-orange-500/20
            hover:scale-105
            hover:shadow-xl
            hover:shadow-orange-500/30
            transition-all
            duration-300
          "
              >
                Book Free Strategy Call →
              </button>

            </div>

          </div>
        )}

      </GlassModal>

    </section>
  );
};

export default Services;