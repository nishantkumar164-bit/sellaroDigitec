import React from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  TrendingUp,
  Share2,
  Globe,
  ShieldCheck,
  Briefcase,
  Award,
  Users,
  Search,
  ClipboardList,
  Settings,
  Rocket,
  BarChart3
} from 'lucide-react';

import ContactCTA from '../components/sections/ContactCTA';

const serviceCategories = [
  {
    title: 'Marketplace Management',
    icon: Store,
    description:
      'End-to-end marketplace account management services across leading ecommerce platforms.',
    services: [
      {
        name: 'Amz',
        path: '/services/amazon'
      },
      {
        name: 'Flipkart',
        path: '/services/flipkart'
      },
      {
        name: 'Meesho',
        path: '/services/meesho'
      },
      {
        name: 'JioMart',
        path: '/services/jiomart'
      },
      {
        name: 'Walmart',
        path: '/services/walmart'
      },
      {
        name: 'eBay',
        path: '/services/ebay'
      },
      {
        name: 'Etsy',
        path: '/services/etsy'
      }
    ]
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    description:
      'Drive qualified traffic, increase conversions and scale revenue through paid advertising.',
    services: [
      {
        name: 'Google Search Ads',
        path: '/services/google-search-ads'
      },
      {
        name: 'Google Display Ads',
        path: '/services/google-display-ads'
      },
      {
        name: 'Google Product Listing',
        path: '/services/google-products-listing'
      },
      {
        name: 'Google Shopping Ads',
        path: '/services/google-shopping-ads'
      }
    ]
  },
  {
    title: 'Social Media Growth',
    icon: Share2,
    description:
      'Build brand awareness and generate leads through social media marketing strategies.',
    services: [
      {
        name: 'Meta Ads',
        path: '/services/meta-ads'
      },
      {
        name: 'Influencer Marketing',
        path: '/services/influencer-marketing'
      },
      {
        name: 'Content Design',
        path: '/services/content-design'
      },
      {
        name: 'Video Editing',
        path: '/services/video-editing'
      }
    ]
  },
  {
    title: 'Website Development',
    icon: Globe,
    description:
      'Build high-converting websites and ecommerce stores optimized for growth.',
    services: [
      {
        name: 'Shopify Development',
        path: '/services/shopify'
      },
      {
        name: 'WordPress Development',
        path: '/services/wordpress'
      },
      {
        name: 'Ecommerce Development',
        path: '/services/custom-website'
      }
    ]
  }
];

const platforms = [
  { name: 'Ebay', img: '/image/ebay_logo.png' },
  { name: 'Etsy', img: '/image/etsy_logo.png' },
  { name: 'Amz', img: '/image/amazon_logo.png' },
  { name: 'Flipkart', img: '/image/flipkart_logo.webp' },
  { name: 'Meta Ads', img: '/image/meta_ads.webp' },
  { name: 'Google Ads', img: '/image/google_ads.webp' },
  { name: 'Shopify', img: '/image/shopify_logo.webp' },
  { name: 'Wordpress', img: '/image/Wordpress_logo.webp' }
];

const ServicesPage = ({ onOpenForm }) => {
  return (<div className="min-h-screen bg-white">

    {/* HERO */}

    <section className="relative pt-32 pb-24 overflow-hidden">

      <div className="absolute inset-0 bg-white" />

      <div
        className="
                    absolute
                    top-10
                    right-20
                    w-[500px]
                    h-[500px]
                    bg-orange-400
                    rounded-full
                    blur-[140px]
                    opacity-15
                "
      />

      <div
        className="
                    absolute
                    bottom-0
                    left-20
                    w-[450px]
                    h-[450px]
                    bg-blue-400
                    rounded-full
                    blur-[140px]
                    opacity-15
                "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          <div>

            <span
              className="
                                inline-flex
                                rounded-full
                                border
                                border-orange-200
                                bg-orange-50
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-orange-600
                            "
            >
              Our Services
            </span>

            <h1
              className="
                                mt-8
                                text-4xl
                                md:text-5xl
                                lg:text-6xl
                                font-black
                                text-slate-900
                            "
            >
              Everything You Need To

              <span className="block text-orange-500">
                Launch, Scale & Grow
              </span>

            </h1>

            <p
              className="
                                mt-6
                                text-xl
                                text-slate-600
                                leading-relaxed
                                max-w-2xl
                            "
            >
              Marketplace management, digital marketing,
              website development and business compliance
              services under one roof.
            </p>

            {/* Trust Pills */}
            <div className="mt-6 flex flex-wrap gap-3">

              <div
                className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-slate-100
      border
      border-slate-200
      px-4
      py-2
      text-sm
      font-medium
      text-slate-700
    "
              >
                <Briefcase className="h-4 w-4 text-orange-500" />
                End-to-End Solutions
              </div>

              <div
                className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-slate-100
      border
      border-slate-200
      px-4
      py-2
      text-sm
      font-medium
      text-slate-700
    "
              >
                <Users className="h-4 w-4 text-orange-500" />
                Expert Team
              </div>

              <div
                className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-slate-100
      border
      border-slate-200
      px-4
      py-2
      text-sm
      font-medium
      text-slate-700
    "
              >
                <TrendingUp className="h-4 w-4 text-orange-500" />
                Growth Focused
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">

              <button
                onClick={onOpenForm}
                className="
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
      shadow-orange-500/25
      hover:scale-105
      transition-all
      duration-300
    "
              >
                Get Free Growth Audit
              </button>

            </div>

          </div>

          <div>

            <img
              src="/image/service_hub.webp"
              alt="Sellaro Services"
              className="
                                w-full
                                rounded-3xl
                                shadow-2xl
                                border
                                border-slate-200
                            "
            />

          </div>

        </div>

      </div>

    </section>

    {/* Infinite scrolling platform logos slider at the bottom of the section (Moving Right to Left) */}
    <div className="w-full border-y border-slate-200/80 bg-slate-50/50 py-4 overflow-hidden relative mt-0">
      <div className="max-w-7xl mx-auto px-6 mb-3">
        <p className="text-center text-[14px] font-bold text-slate-900 uppercase tracking-widest">
          Trusted by Brands Across Leading Marketplace
        </p>

      </div>

      {/* Right to Left Slider Container */}
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-scroll-left">
          {/* First Set */}
          {platforms.map((platform, idx) => (
            <div key={idx} className="mx-6 inline-flex items-center justify-center bg-white border border-slate-200 shadow-sm rounded-lg px-6 py-3 min-w-[130px] h-[58px] transition duration-300">
              <img
                src={platform.img}
                alt={platform.name}
                className="h-8 w-auto object-contain max-w-[100px]"
              />
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {platforms.map((platform, idx) => (
            <div key={idx + 8} className="mx-6 inline-flex items-center justify-center bg-white border border-slate-200 shadow-sm rounded-lg px-6 py-3 min-w-[130px] h-[58px] transition duration-300">
              <img
                src={platform.img}
                alt={platform.name}
                className="h-8 w-auto object-contain max-w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* QUICK STATS */}

    <section className="py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              value: '25+',
              label: 'Services',
              icon: Briefcase
            },
            {
              value: '7+',
              label: 'Marketplaces',
              icon: Store
            },
            {
              value: '5+',
              label: 'Years Experience',
              icon: Award
            },
            {
              value: '100+',
              label: 'Businesses Supported',
              icon: Users
            }
          ].map((item, idx) => (

            <div
              key={idx}
              className="
    group
    relative
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-7
    text-center
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-1
    hover:border-orange-200
    transition-all
    duration-300
  "
            >

              {/* Icon */}
              <div
                className="
      mx-auto
      mb-4
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-orange-50
      text-orange-500
      group-hover:bg-orange-100
      transition-all
    "
              >
                <item.icon className="h-7 w-7" />
              </div>

              <h3 className="text-4xl font-black text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600 font-medium">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

    {/* SERVICES GRID */}

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
                        text-center
                        text-4xl
                        font-black
                        text-slate-900
                        mb-16
                    "
        >
          Explore Our Solutions
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {serviceCategories.map((category, index) => {

            const Icon = category.icon;

            return (

              <div
                key={index}
                className="
                                    bg-white
                                    border
                                    border-slate-200
                                    rounded-3xl
                                    p-8
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                "
              >

                <div
                  className="
                                        w-14
                                        h-14
                                        rounded-xl
                                        bg-orange-100
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                    "
                >
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {category.services.map((service, idx) => (

                    <Link
                      key={idx}
                      to={service.path}
                      className="
    px-3
    py-2
    rounded-lg
    bg-slate-100
    text-slate-700
    text-sm
    font-medium
    transition-all
    duration-300
    hover:bg-orange-50
    hover:text-orange-600
    hover:-translate-y-1
  "
                    >
                      {service.name}
                    </Link>

                  ))}

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>

    {/* our process*/}
    <section className="py-15 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
          inline-flex
          rounded-full
          border
          border-orange-200
          bg-orange-50
          px-4
          py-2
          text-sm
          font-semibold
          text-orange-600
        "
          >
            Our Process
          </span>

          <h2
            className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          text-slate-900
        "
          >
            How We Work
          </h2>

          <p
            className="
          mt-4
          text-lg
          text-slate-600
        "
          >
            A proven framework designed to help brands
            launch faster, scale efficiently and grow sustainably.
          </p>

        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">

          {[
            {
              number: '01',
              title: 'Free Audit',
              description:
                'We analyze your marketplace presence, website and marketing performance.',
              icon: Search
            },
            {
              number: '02',
              title: 'Growth Strategy',
              description:
                'A customized roadmap aligned with your business goals and budget.',
              icon: ClipboardList
            },
            {
              number: '03',
              title: 'Implementation',
              description:
                'Our specialists execute marketplace, marketing and technology initiatives.',
              icon: Settings
            },
            {
              number: '04',
              title: 'Scale Revenue',
              description:
                'Continuous optimization focused on improving sales, ROAS and profitability.',
              icon: TrendingUp
            }
          ].map((step, idx) => (
            <div
              key={idx}
              className="
            relative
            group
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            hover:border-orange-200
            transition-all
            duration-300
          "
            >

              {/* Step Number */}
              <span
                className="
              absolute
              top-5
              right-5
              text-5xl
              font-black
              text-slate-100
            "
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-orange-50
              text-orange-500
            "
              >
                <step.icon className="h-7 w-7" />
              </div>

              <h3
                className="
              mt-6
              text-xl
              font-bold
              text-slate-900
            "
              >
                {step.title}
              </h3>

              <p
                className="
              mt-3
              text-slate-600
              leading-relaxed
            "
              >
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>



    {/* WHY CHOOSE US */}

    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span
            className="
          inline-flex
          px-4
          py-2
          rounded-full
          bg-orange-50
          border
          border-orange-100
          text-orange-500
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
        "
          >
            Why Sellaro
          </span>

          <h2
            className="
          mt-4
          text-4xl
          md:text-5xl
          font-extrabold
          text-slate-900
        "
          >
            Why Businesses Choose Sellaro
          </h2>

          <p
            className="
          mt-4
          text-lg
          text-slate-600
          max-w-3xl
          mx-auto
        "
          >
            We combine marketplace expertise, digital marketing,
            website development and compliance services to help
            businesses launch faster, scale efficiently and grow sustainably.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            className="
          group
          bg-white
          rounded-3xl
          border
          border-slate-200
          p-8
          shadow-sm
          hover:shadow-xl
          hover:shadow-orange-100
          hover:border-orange-200
          hover:-translate-y-2
          transition-all
          duration-500
        "
          >

            <div
              className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mb-5
            bg-orange-50
            transition-all
            duration-500
            group-hover:scale-105
          "
            >
              <Rocket className="w-8 h-8 text-orange-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-900">
              End-to-End Growth
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Marketplace management, digital marketing,
              website development and compliance services
              under one roof.
            </p>

            <div
              className="
            mt-5
            h-1
            w-0
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            rounded-full
            group-hover:w-16
            transition-all
            duration-500
          "
            />

          </div>

          {/* Card 2 */}
          <div
            className="
          group
          bg-white
          rounded-3xl
          border
          border-slate-200
          p-8
          shadow-sm
          hover:shadow-xl
          hover:shadow-orange-100
          hover:border-orange-200
          hover:-translate-y-2
          transition-all
          duration-500
        "
          >

            <div
              className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mb-5
            bg-orange-50
            transition-all
            duration-500
            group-hover:scale-105
          "
            >
              <Users className="w-8 h-8 text-orange-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-900">
              Dedicated Specialists
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Experts across ecommerce, advertising,
              website development and business growth.
            </p>

            <div
              className="
            mt-5
            h-1
            w-0
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            rounded-full
            group-hover:w-16
            transition-all
            duration-500
          "
            />

          </div>

          {/* Card 3 */}
          <div
            className="
          group
          bg-white
          rounded-3xl
          border
          border-slate-200
          p-8
          shadow-sm
          hover:shadow-xl
          hover:shadow-orange-100
          hover:border-orange-200
          hover:-translate-y-2
          transition-all
          duration-500
        "
          >

            <div
              className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mb-5
            bg-orange-50
            transition-all
            duration-500
            group-hover:scale-105
          "
            >
              <BarChart3 className="w-8 h-8 text-orange-500" />
            </div>

            <h3 className="font-bold text-xl text-slate-900">
              Data-Driven Results
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Every strategy is backed by performance
              metrics, analytics and ROI optimization.
            </p>

            <div
              className="
            mt-5
            h-1
            w-0
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            rounded-full
            group-hover:w-16
            transition-all
            duration-500
          "
            />

          </div>

        </div>

      </div>

    </section>

    {/* CTA */}

    <ContactCTA
      badge="Ready To Scale?"
      title="Let's Grow Your"
      highlightedText="Business Faster"
      description="Book a free consultation and discover how Sellaro Digitec can help you scale revenue across marketplaces."
      buttonText="Book Free Strategy Call"
      onButtonClick={onOpenForm}
    />

  </div>
  );
};

export default ServicesPage;
