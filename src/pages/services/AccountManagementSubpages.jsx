
import React from 'react';
import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import {
  TrendingUp,
  Target,
  Store,
  Package,
  ShieldCheck,
  BadgeCheck,
  Users,
  Award,
  BarChart3
} from 'lucide-react';
import SEO from "../../components/common/SEO";




export const AmazonAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="Amazon Account Management Services | Sellaro Digitec"
  description="Grow your Amazon business with Sellaro Digitec. Get expert seller account management, product listing optimization, catalog management and marketplace support."
  canonical="/services/amazon-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="Amz Account"
    highlight="Management"
    heroImage="/image/account/amazon_banner.webp"
    description="Grow your Amz business with listing optimization, PPC management, inventory planning, catalog management and brand protection services."
    trustItems={[
      {
        icon: Award,
        title: 'Amz Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaceBadge="Amz Marketplace Experts"

    marketplaceTitle="Complete Amz Growth Management"

    marketplaceDescription="We help brands scale faster on Amz through listing optimization, PPC management, A+ content, storefront design, inventory planning and account health monitoring."
    marketplaceImage="/image/account/amazon_expert.webp"
    growthMetric="+52%"
    listingMetric="1200+"
    retentionMetric="98% Client Retention"

    marketplacePoints={[
      'Amz Listing Optimization',
      'Sponsored Ads Management',
      'A+ Content Creation',
      'Brand Registry Support',
      'Storefront Development',
      'Inventory Planning'
    ]}
    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}
    features={[
      {
        icon: TrendingUp,
        name: 'Listing Optimization',
        desc: 'Improve keyword rankings and conversions.'
      },
      {
        icon: Target,
        name: 'Amz PPC',
        desc: 'Manage Sponsored Product and Sponsored Brand campaigns.'
      },
      {
        icon: Store,
        name: 'A+ Content',
        desc: 'Create premium branded product content.'
      },
      {
        icon: Package,
        name: 'Store Management',
        desc: 'Maintain storefront and category structure.'
      },
      {
        icon: BadgeCheck,
        name: 'Inventory Planning',
        desc: 'Prevent stockouts and overstock situations.'
      },
      {
        icon: ShieldCheck,
        name: 'Brand Registry',
        desc: 'Protect intellectual property and listings.'
      }
    ]}
    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Account Managers',
        desc: 'Dedicated account manager with weekly reporting and growth planning.'
      },
      {
        icon: Award,
        title: 'Marketplace Experts',
        desc: 'Expertise across Amz SEO, PPC, catalog management and account health.'
      },
      {
        icon: BarChart3,
        title: 'Data Driven Decisions',
        desc: 'Every strategy is based on performance data, conversion metrics and ROI.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage Amz PPC campaigns?',
        answer: 'Yes. We manage Sponsored Products, Sponsored Brands and Sponsored Display campaigns to improve visibility and maximize ROAS.'
      },
      {
        question: 'Can you optimize existing listings?',
        answer: 'Yes. We optimize titles, bullet points, descriptions, backend keywords and A+ Content for better ranking and conversion.'
      },
      {
        question: 'Do you help with Amz Brand Registry?',
        answer: 'Yes. We assist with Brand Registry setup, trademark integration and brand protection activities.'
      },
      {
        question: 'Can you manage my complete Amz account?',
        answer: 'Yes. Our end-to-end account management covers listings, advertising, catalog management, inventory planning and performance monitoring.'
      }
    ]}
  />
  </>
);

export const FlipkartAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="Flipkart Account Management Services | Sellaro Digitec"
  description="Grow your Flipkart business with Sellaro Digitec. Get seller account management, product listing optimization, catalogue management and marketplace support."
  canonical="/services/flipkart-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="Flipkart Account"
    highlight="Management"

    heroImage="/image/account/flipkart_banner.png"

    description="Scale your Flipkart business with catalog optimization, Flipkart Ads management, inventory planning and marketplace growth strategies."

    growthMetric="+25%"
    listingMetric="850+"
    retentionMetric="97% Client Retention"
    trustItems={[
      {
        icon: Award,
        title: 'Flipkart Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}

    marketplaceBadge="Flipkart Marketplace Experts"

    marketplaceTitle="Complete Flipkart Growth Management"

    marketplaceDescription="Our team helps brands increase visibility, improve conversions and scale revenue on Flipkart through catalog optimization, advertising management and account growth strategies."

    marketplaceImage="/image/account/flipkart_expert.png"

    marketplacePoints={[
      'Catalog Optimization',
      'Flipkart Ads Management',
      'Brand Store Setup',
      'Inventory Planning',
      'Smart Fulfillment Support',
      'Seller Performance Monitoring'
    ]}

    features={[
      {
        icon: TrendingUp,
        name: 'Catalog Optimization',
        desc: 'Improve product discoverability and conversion rates.'
      },
      {
        icon: Target,
        name: 'Flipkart Ads',
        desc: 'Manage Product Listing Ads and promotional campaigns.'
      },
      {
        icon: Store,
        name: 'Brand Store Setup',
        desc: 'Create professional branded storefronts.'
      },
      {
        icon: Package,
        name: 'Inventory Management',
        desc: 'Avoid stockouts and improve fulfillment efficiency.'
      },
      {
        icon: BadgeCheck,
        name: 'Smart Fulfillment',
        desc: 'Optimize logistics and order processing workflows.'
      },
      {
        icon: ShieldCheck,
        name: 'Account Health',
        desc: 'Maintain seller ratings and compliance standards.'
      }
    ]}

    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Marketplace Specialists',
        desc: 'Experienced account managers focused on sustainable growth and reporting.'
      },
      {
        icon: Award,
        title: 'Flipkart Growth Experts',
        desc: 'Deep expertise in Flipkart ranking factors, advertising and catalog optimization.'
      },
      {
        icon: BarChart3,
        title: 'Performance Driven Strategy',
        desc: 'Every action is backed by marketplace analytics and profitability metrics.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage Flipkart advertising campaigns?',
        answer: 'Yes. We manage Product Listing Ads, promotions and campaign optimization to maximize sales.'
      },
      {
        question: 'Can you optimize existing Flipkart listings?',
        answer: 'Yes. We improve titles, attributes, descriptions and images for better visibility.'
      },
      {
        question: 'Do you help with catalog management?',
        answer: 'Yes. We handle catalog uploads, corrections, listing quality improvements and bulk updates.'
      },
      {
        question: 'Can you manage my complete Flipkart seller account?',
        answer: 'Yes. Our services cover catalog management, advertising, inventory planning and account growth.'
      }
    ]}
  />
  </>
);

export const MeeshoAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="Meesho Account Management Services | Sellaro Digitec"
  description="Grow your Meesho business with Sellaro Digitec. Get seller account management, product listing optimization, catalogue management and marketplace support."
  canonical="/services/meesho-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="Meesho Account"
    highlight="Management"

    heroImage="/image/account/meesho_banner.png"

    description="Scale your Meesho business with catalog optimization, Meesho Ads management, inventory planning and marketplace growth strategies."
    growthMetric="+61%"
    listingMetric="700+"
    retentionMetric="96% Client Retention"
    trustItems={[
      {
        icon: Award,
        title: 'Meesho Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}

    marketplaceBadge="Meesho Marketplace Experts"

    marketplaceTitle="Complete Meesho Growth Management"

    marketplaceDescription="Our team helps brands increase visibility, improve conversions and scale revenue on Meesho through catalog optimization, advertising management and account growth strategies."

    marketplaceImage="/image/account/Meesho_expert.png"

    marketplacePoints={[
      'Catalog Optimization',
      'Meesho Ads Management',
      'Brand Store Setup',
      'Inventory Planning',
      'Smart Fulfillment Support',
      'Seller Performance Monitoring'
    ]}

    features={[
      {
        icon: TrendingUp,
        name: 'Catalog Optimization',
        desc: 'Improve product discoverability and conversion rates.'
      },
      {
        icon: Target,
        name: 'Meesho Ads',
        desc: 'Manage Product Listing Ads and promotional campaigns.'
      },
      {
        icon: Store,
        name: 'Brand Store Setup',
        desc: 'Create professional branded storefronts.'
      },
      {
        icon: Package,
        name: 'Inventory Management',
        desc: 'Avoid stockouts and improve fulfillment efficiency.'
      },
      {
        icon: BadgeCheck,
        name: 'Smart Fulfillment',
        desc: 'Optimize logistics and order processing workflows.'
      },
      {
        icon: ShieldCheck,
        name: 'Account Health',
        desc: 'Maintain seller ratings and compliance standards.'
      }
    ]}

    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Marketplace Specialists',
        desc: 'Experienced account managers focused on sustainable growth and reporting.'
      },
      {
        icon: Award,
        title: 'Meesho Growth Experts',
        desc: 'Deep expertise in Meesho ranking factors, advertising and catalog optimization.'
      },
      {
        icon: BarChart3,
        title: 'Performance Driven Strategy',
        desc: 'Every action is backed by marketplace analytics and profitability metrics.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage Meesho advertising campaigns?',
        answer: 'Yes. We manage Product Listing Ads, promotions and campaign optimization to maximize sales.'
      },
      {
        question: 'Can you optimize existing Meesho listings?',
        answer: 'Yes. We improve titles, attributes, descriptions and images for better visibility.'
      },
      {
        question: 'Do you help with catalog management?',
        answer: 'Yes. We handle catalog uploads, corrections, listing quality improvements and bulk updates.'
      },
      {
        question: 'Can you manage my complete Meesho seller account?',
        answer: 'Yes. Our services cover catalog management, advertising, inventory planning and account growth.'
      }
    ]}
  />
  </>
);
export const JoimartAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="JioMart Account Management Services | Sellaro Digitec"
  description="Grow your JioMart business with Sellaro Digitec. Get seller account management, product listing optimization, catalogue management and marketplace support."
  canonical="/services/jiomart-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="JioMart Account"
    highlight="Management"

    heroImage="/image/account/jio_banner.png"

    description="Scale your JioMart business with catalog optimization, JioMart Ads management, inventory planning and marketplace growth strategies."
    growthMetric="+22%"
    listingMetric="380+"
    retentionMetric="95% Client Retention"
    trustItems={[
      {
        icon: Award,
        title: 'JioMart Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}

    marketplaceBadge="JioMart Marketplace Experts"

    marketplaceTitle="Complete JioMart Growth Management"

    marketplaceDescription="Our team helps brands increase visibility, improve conversions and scale revenue on JioMart through catalog optimization, advertising management and account growth strategies."

    marketplaceImage="/image/account/JioMart_expert.png"

    marketplacePoints={[
      'Catalog Optimization',
      'JioMart Ads Management',
      'Brand Store Setup',
      'Inventory Planning',
      'Smart Fulfillment Support',
      'Seller Performance Monitoring'
    ]}

    features={[
      {
        icon: TrendingUp,
        name: 'Catalog Optimization',
        desc: 'Improve product discoverability and conversion rates.'
      },
      {
        icon: Target,
        name: 'JioMart Ads',
        desc: 'Manage Product Listing Ads and promotional campaigns.'
      },
      {
        icon: Store,
        name: 'Brand Store Setup',
        desc: 'Create professional branded storefronts.'
      },
      {
        icon: Package,
        name: 'Inventory Management',
        desc: 'Avoid stockouts and improve fulfillment efficiency.'
      },
      {
        icon: BadgeCheck,
        name: 'Smart Fulfillment',
        desc: 'Optimize logistics and order processing workflows.'
      },
      {
        icon: ShieldCheck,
        name: 'Account Health',
        desc: 'Maintain seller ratings and compliance standards.'
      }
    ]}

    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Marketplace Specialists',
        desc: 'Experienced account managers focused on sustainable growth and reporting.'
      },
      {
        icon: Award,
        title: 'JioMart Growth Experts',
        desc: 'Deep expertise in JioMart ranking factors, advertising and catalog optimization.'
      },
      {
        icon: BarChart3,
        title: 'Performance Driven Strategy',
        desc: 'Every action is backed by marketplace analytics and profitability metrics.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage JioMart advertising campaigns?',
        answer: 'Yes. We manage Product Listing Ads, promotions and campaign optimization to maximize sales.'
      },
      {
        question: 'Can you optimize existing JioMart listings?',
        answer: 'Yes. We improve titles, attributes, descriptions and images for better visibility.'
      },
      {
        question: 'Do you help with catalog management?',
        answer: 'Yes. We handle catalog uploads, corrections, listing quality improvements and bulk updates.'
      },
      {
        question: 'Can you manage my complete JioMart seller account?',
        answer: 'Yes. Our services cover catalog management, advertising, inventory planning and account growth.'
      }
    ]}
  />
  </>
);

export const EbayAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="eBay Account Management Services | Sellaro Digitec"
  description="Grow your eBay business with Sellaro Digitec. Get seller account management, product listing optimization, catalogue management and marketplace support."
  canonical="/services/ebay-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="Ebay Account"
    highlight="Management"

    heroImage="/image/account/ebay_banner.png"

    description="Scale your Ebay business with catalog optimization, Ebay Ads management, inventory planning and marketplace growth strategies."
    growthMetric="+32%"
    listingMetric="650+"
    retentionMetric="95% Client Retention"
    trustItems={[
      {
        icon: Award,
        title: 'Ebay Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}

    marketplaceBadge="Ebay Marketplace Experts"

    marketplaceTitle="Complete Ebay Growth Management"

    marketplaceDescription="Our team helps brands increase visibility, improve conversions and scale revenue on Ebay through catalog optimization, advertising management and account growth strategies."

    marketplaceImage="/image/account/Ebay_expert.png"

    marketplacePoints={[
      'Catalog Optimization',
      'Ebay Ads Management',
      'Brand Store Setup',
      'Inventory Planning',
      'Smart Fulfillment Support',
      'Seller Performance Monitoring'
    ]}

    features={[
      {
        icon: TrendingUp,
        name: 'Catalog Optimization',
        desc: 'Improve product discoverability and conversion rates.'
      },
      {
        icon: Target,
        name: 'Ebay Ads',
        desc: 'Manage Product Listing Ads and promotional campaigns.'
      },
      {
        icon: Store,
        name: 'Brand Store Setup',
        desc: 'Create professional branded storefronts.'
      },
      {
        icon: Package,
        name: 'Inventory Management',
        desc: 'Avoid stockouts and improve fulfillment efficiency.'
      },
      {
        icon: BadgeCheck,
        name: 'Smart Fulfillment',
        desc: 'Optimize logistics and order processing workflows.'
      },
      {
        icon: ShieldCheck,
        name: 'Account Health',
        desc: 'Maintain seller ratings and compliance standards.'
      }
    ]}

    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Marketplace Specialists',
        desc: 'Experienced account managers focused on sustainable growth and reporting.'
      },
      {
        icon: Award,
        title: 'Ebay Growth Experts',
        desc: 'Deep expertise in Ebay ranking factors, advertising and catalog optimization.'
      },
      {
        icon: BarChart3,
        title: 'Performance Driven Strategy',
        desc: 'Every action is backed by marketplace analytics and profitability metrics.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage Ebay advertising campaigns?',
        answer: 'Yes. We manage Product Listing Ads, promotions and campaign optimization to maximize sales.'
      },
      {
        question: 'Can you optimize existing Ebay listings?',
        answer: 'Yes. We improve titles, attributes, descriptions and images for better visibility.'
      },
      {
        question: 'Do you help with catalog management?',
        answer: 'Yes. We handle catalog uploads, corrections, listing quality improvements and bulk updates.'
      },
      {
        question: 'Can you manage my complete Ebay seller account?',
        answer: 'Yes. Our services cover catalog management, advertising, inventory planning and account growth.'
      }
    ]}
  />
  </>
);

export const EtsyAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="Etsy Account Management Services | Sellaro Digitec"
  description="Grow your Etsy shop with Sellaro Digitec. Get expert seller account management, product listing optimization, shop setup and catalogue management support."
  canonical="/services/etsy-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="Etsy Account"
    highlight="Management"

    heroImage="/image/account/etsy_banner.png"

    description="Scale your Etsy business with catalog optimization, Etsy Ads management, inventory planning and marketplace growth strategies."
    growthMetric="+42%"
    listingMetric="400+"
    retentionMetric="95% Client Retention"
    trustItems={[
      {
        icon: Award,
        title: 'Etsy Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}

    marketplaceBadge="Etsy Marketplace Experts"

    marketplaceTitle="Complete Etsy Growth Management"

    marketplaceDescription="Our team helps brands increase visibility, improve conversions and scale revenue on Etsy through catalog optimization, advertising management and account growth strategies."

    marketplaceImage="/image/account/Etsy_expert.png"

    marketplacePoints={[
      'Catalog Optimization',
      'Etsy Ads Management',
      'Brand Store Setup',
      'Inventory Planning',
      'Smart Fulfillment Support',
      'Seller Performance Monitoring'
    ]}

    features={[
      {
        icon: TrendingUp,
        name: 'Catalog Optimization',
        desc: 'Improve product discoverability and conversion rates.'
      },
      {
        icon: Target,
        name: 'Etsy Ads',
        desc: 'Manage Product Listing Ads and promotional campaigns.'
      },
      {
        icon: Store,
        name: 'Brand Store Setup',
        desc: 'Create professional branded storefronts.'
      },
      {
        icon: Package,
        name: 'Inventory Management',
        desc: 'Avoid stockouts and improve fulfillment efficiency.'
      },
      {
        icon: BadgeCheck,
        name: 'Smart Fulfillment',
        desc: 'Optimize logistics and order processing workflows.'
      },
      {
        icon: ShieldCheck,
        name: 'Account Health',
        desc: 'Maintain seller ratings and compliance standards.'
      }
    ]}

    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Marketplace Specialists',
        desc: 'Experienced account managers focused on sustainable growth and reporting.'
      },
      {
        icon: Award,
        title: 'Etsy Growth Experts',
        desc: 'Deep expertise in Etsy ranking factors, advertising and catalog optimization.'
      },
      {
        icon: BarChart3,
        title: 'Performance Driven Strategy',
        desc: 'Every action is backed by marketplace analytics and profitability metrics.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage Etsy advertising campaigns?',
        answer: 'Yes. We manage Product Listing Ads, promotions and campaign optimization to maximize sales.'
      },
      {
        question: 'Can you optimize existing Etsy listings?',
        answer: 'Yes. We improve titles, attributes, descriptions and images for better visibility.'
      },
      {
        question: 'Do you help with catalog management?',
        answer: 'Yes. We handle catalog uploads, corrections, listing quality improvements and bulk updates.'
      },
      {
        question: 'Can you manage my complete Etsy seller account?',
        answer: 'Yes. Our services cover catalog management, advertising, inventory planning and account growth.'
      }
    ]}
  />
  </>
);

export const WalmartAccount = ({ onOpenForm }) => (
  <>
  <SEO
  title="Walmart Account Management Services | Sellaro Digitec"
  description="Grow your Walmart Marketplace business with Sellaro Digitec. Get seller account management, product listing optimization, catalogue management and marketplace support."
  canonical="/services/walmart-account-management"
/>
  <ServicePageTemplate
    onOpenForm={onOpenForm}
    badge="Marketplace Management"
    title="WalmartAccount Account"
    highlight="Management"

    heroImage="/image/account/wallmart_banner.png"

    description="Scale your WalmartAccount business with catalog optimization, WalmartAccount Ads management, inventory planning and marketplace growth strategies."
    growthMetric="+58%"
    listingMetric="500+"
    retentionMetric="98% Client Retention"
    trustItems={[
      {
        icon: Award,
        title: 'WalmartAccount Growth Partner'
      },
      {
        icon: Users,
        title: '95% Client Retention'
      },
      {
        icon: TrendingUp,
        title: '5+ Years Experience'
      }
    ]}

    marketplaces={[
      {
        name: 'Amz',
        logo: '/image/amazon_logo.png'
      },
      {
        name: 'Flipkart',
        logo: '/image/flipkart_logo.webp'
      },
      {
        name: 'Meesho',
        logo: '/image/meesho_logo.png'
      },
      {
        name: 'JioMart',
        logo: '/image/jio-mart-logo.png'
      },
      {
        name: 'Walmart',
        logo: '/image/walmart_logo.png'
      },
      {
        name: 'eBay',
        logo: '/image/ebay_logo.png'
      },
      {
        name: 'Etsy',
        logo: '/image/etsy_logo.png'
      }
    ]}

    marketplaceBadge="WalmartAccount Marketplace Experts"

    marketplaceTitle="Complete WalmartAccount Growth Management"

    marketplaceDescription="Our team helps brands increase visibility, improve conversions and scale revenue on WalmartAccount through catalog optimization, advertising management and account growth strategies."

    marketplaceImage="/image/account/WalmartAccount_expert.png"

    marketplacePoints={[
      'Catalog Optimization',
      'WalmartAccount Ads Management',
      'Brand Store Setup',
      'Inventory Planning',
      'Smart Fulfillment Support',
      'Seller Performance Monitoring'
    ]}

    features={[
      {
        icon: TrendingUp,
        name: 'Catalog Optimization',
        desc: 'Improve product discoverability and conversion rates.'
      },
      {
        icon: Target,
        name: 'WalmartAccount Ads',
        desc: 'Manage Product Listing Ads and promotional campaigns.'
      },
      {
        icon: Store,
        name: 'Brand Store Setup',
        desc: 'Create professional branded storefronts.'
      },
      {
        icon: Package,
        name: 'Inventory Management',
        desc: 'Avoid stockouts and improve fulfillment efficiency.'
      },
      {
        icon: BadgeCheck,
        name: 'Smart Fulfillment',
        desc: 'Optimize logistics and order processing workflows.'
      },
      {
        icon: ShieldCheck,
        name: 'Account Health',
        desc: 'Maintain seller ratings and compliance standards.'
      }
    ]}

    whyChooseUs={[
      {
        icon: Users,
        title: 'Dedicated Marketplace Specialists',
        desc: 'Experienced account managers focused on sustainable growth and reporting.'
      },
      {
        icon: Award,
        title: 'WalmartAccount Growth Experts',
        desc: 'Deep expertise in WalmartAccount ranking factors, advertising and catalog optimization.'
      },
      {
        icon: BarChart3,
        title: 'Performance Driven Strategy',
        desc: 'Every action is backed by marketplace analytics and profitability metrics.'
      }
    ]}

    faqs={[
      {
        question: 'Do you manage WalmartAccount advertising campaigns?',
        answer: 'Yes. We manage Product Listing Ads, promotions and campaign optimization to maximize sales.'
      },
      {
        question: 'Can you optimize existing WalmartAccount listings?',
        answer: 'Yes. We improve titles, attributes, descriptions and images for better visibility.'
      },
      {
        question: 'Do you help with catalog management?',
        answer: 'Yes. We handle catalog uploads, corrections, listing quality improvements and bulk updates.'
      },
      {
        question: 'Can you manage my complete WalmartAccount seller account?',
        answer: 'Yes. Our services cover catalog management, advertising, inventory planning and account growth.'
      }
    ]}
  />
  </>
);
