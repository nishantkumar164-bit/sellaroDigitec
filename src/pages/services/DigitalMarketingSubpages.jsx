import React from 'react';
import DigitalMarketingTemplate from '../../components/templates/DigitalMarketingTemplate';
import { googleSearchFaqs, googleDisplayFaqs, googleShoppingFaqs, googleProductListingFaqs } from '../../data/FAQ/digitalMarketingFaqs';
import {
  Target,
  LineChart,
  Award,
  Search,
  ShoppingCart,
  BarChart3,
  RefreshCcw,
  Rocket,
  Eye,
  Activity,
  ShoppingBag,
  TrendingUp,
  CheckCircle
} from 'lucide-react';


export const GoogleSearchAds = ({ onOpenForm }) => (
  <DigitalMarketingTemplate
    onOpenForm={onOpenForm}

    badge="Google Advertising"

    title="Google Search Ads"

    highlight="That Drive Revenue"

    description="
    Capture high-intent customers exactly when they are
    searching for your products and services. We build,
    optimize and scale profitable Google Search campaigns
    focused on ROAS and revenue growth.
    "

    heroImage="/image/google_search_ads.webp"

    metric1Value="5.4x"
    metric1Label="Average ROAS"

    metric2Value="+82%"
    metric2Label="Revenue Growth"

    heroHighlights={[
      {
        icon: Target,
        title: "ROAS Focused",
        subtitle: "Revenue-first campaigns"
      },
      {
        icon: LineChart,
        title: "Conversion Tracking",
        subtitle: "Data-backed optimization"
      },
      {
        icon: Award,
        title: "Certified Experts",
        subtitle: "Google Ads specialists"
      }
    ]}

    performanceMetrics={[
      {
        value: "5.4x",
        label: "Average ROAS"
      },
      {
        value: "+82%",
        label: "Revenue Growth"
      },
      {
        value: "-37%",
        label: "Cost Per Acquisition"
      },
      {
        value: "250+",
        label: "Campaigns Managed"
      }
    ]}

    services={[
      {
        icon: Search,
        title: "Search Ads",
        desc: "Capture high-intent customers actively searching for your products."
      },
      {
        icon: ShoppingCart,
        title: "Shopping Ads",
        desc: "Showcase products directly in Google Shopping results."
      },
      {
        icon: BarChart3,
        title: "Display Advertising",
        desc: "Build awareness through Google's Display Network."
      },
      {
        icon: RefreshCcw,
        title: "Remarketing",
        desc: "Re-engage visitors and recover lost conversions."
      },
      {
        icon: Rocket,
        title: "Performance Max",
        desc: "Scale campaigns across Search, YouTube, Gmail and Discover."
      },
      {
        icon: Activity,
        title: "Analytics & Tracking",
        desc: "Measure every click, lead and purchase with precision."
      }
    ]}

    showcaseTitle="Google Ads Campaign Results"

    showcaseDescription="
    Revenue-focused campaigns designed to maximize ROAS,
    reduce acquisition costs and drive qualified leads.
    "

    showcaseMetrics={[
      {
        value: "+82%",
        label: "Revenue Growth",
        logo: "/image/google-ads.png"
      },
      {
        value: "5.4x",
        label: "Average ROAS",
        logo: "/image/google-analytics.png"
      },
      {
        value: "-37%",
        label: "Lower CPA",
        logo: "/image/google-tag-manager.png"
      },
      {
        value: "250+",
        label: "Campaigns Managed",
        logo: "/image/google-marketing-platform.png"
      }
    ]}

    showcaseHighlights={[
      "Keyword Research",
      "Conversion Tracking",
      "Bid Optimization",
      "Landing Page Analysis"
    ]}

    showcaseSlides={[
      {
        image: "/image/google_ads_mockup.png",
        title: "Google Ads Dashboard"
      },
      {
        image: "/image/google_ads_mockup_3.png",
        title: "Campaign Performance"
      },
      {
        image: "/image/google_ads_mockup.png",
        title: "Revenue Metrics"
      }
    ]}

    faqs={googleSearchFaqs}
  />
);

export const GoogleDisplayAds = ({ onOpenForm }) => (
  <DigitalMarketingTemplate
    onOpenForm={onOpenForm}

    badge="Google Display Advertising"

    title="Google Display Ads"

    highlight="That Build Brand Awareness"

    description="
    Reach millions of potential customers across Google's
    Display Network through strategic audience targeting,
    remarketing campaigns and visually engaging creatives
    that strengthen brand visibility and drive conversions.
    "

    heroImage="/image/google-display-placeholder.webp"

    metric1Value="15M+"
    metric1Label="Impressions Served"

    metric2Value="+65%"
    metric2Label="Brand Reach"

    heroHighlights={[
      {
        icon: Eye,
        title: "Audience Visibility",
        subtitle: "Expand brand reach"
      },
      {
        icon: RefreshCcw,
        title: "Remarketing",
        subtitle: "Recover lost visitors"
      },
      {
        icon: Award,
        title: "Creative Testing",
        subtitle: "Continuous optimization"
      }
    ]}

    performanceMetrics={[
      {
        value: "15M+",
        label: "Impressions Served"
      },
      {
        value: "+65%",
        label: "Brand Reach"
      },
      {
        value: "4.8x",
        label: "Average ROAS"
      },
      {
        value: "-28%",
        label: "CPA Reduction"
      }
    ]}

    services={[
      {
        icon: Eye,
        title: "Audience Targeting",
        desc: "Reach high-value audiences using demographics, interests and behaviors."
      },
      {
        icon: RefreshCcw,
        title: "Remarketing",
        desc: "Bring previous website visitors back into your sales funnel."
      },
      {
        icon: BarChart3,
        title: "Display Campaigns",
        desc: "Scale awareness across Google's extensive Display Network."
      },
      {
        icon: Activity,
        title: "Performance Tracking",
        desc: "Measure engagement, conversions and audience quality."
      },
      {
        icon: Rocket,
        title: "Campaign Scaling",
        desc: "Expand successful campaigns while maintaining efficiency."
      },
      {
        icon: Award,
        title: "Creative Optimization",
        desc: "Continuously test banners, formats and messaging."
      }
    ]}

    showcaseTitle="Google Display Campaign Results"

    showcaseDescription="
    Build awareness, improve engagement and drive qualified
    traffic through data-driven display advertising campaigns.
    "

    showcaseMetrics={[
      {
        value: "+65%",
        label: "Brand Reach",
        logo: "/image/google-ads.png"
      },
      {
        value: "4.8x",
        label: "Average ROAS",
        logo: "/image/google-analytics.png"
      },
      {
        value: "-28%",
        label: "CPA Reduction",
        logo: "/image/google-tag-manager.png"
      },
      {
        value: "15M+",
        label: "Impressions Served",
        logo: "/image/google-marketing-platform.png"
      }
    ]}

    showcaseHighlights={[
      "Audience Segmentation",
      "Remarketing Campaigns",
      "Creative Testing",
      "Display Network Scaling"
    ]}

    showcaseSlides={[
      {
        image: "/image/google_ads_mockup.png",
        title: "Google Ads Dashboard"
      },
      {
        image: "/image/google_ads_mockup_3.png",
        title: "Campaign Performance"
      },
      {
        image: "/image/google_ads_mockup.png",
        title: "Revenue Metrics"
      }
    ]}

    faqs={googleDisplayFaqs}
  />
);

export const GoogleProductsListing = ({ onOpenForm }) => (
  <DigitalMarketingTemplate
    onOpenForm={onOpenForm}

    badge="Google Merchant Center"

    title="Google Product Listings"

    highlight="That Improve Visibility"

    description="
    Optimize your product catalog for maximum visibility
    across Google Shopping and Search. We manage Merchant
    Center feeds, product data and listing performance.
    "

    heroImage="/image/google-product-listing-placeholder.webp"

    metric1Value="12K+"
    metric1Label="Products Optimized"

    metric2Value="+74%"
    metric2Label="Visibility Growth"

    faqs={googleProductListingFaqs}

    heroHighlights={[
      {
        icon: ShoppingCart,
        title: "Feed Optimization",
        subtitle: "Better product visibility"
      },
      {
        icon: CheckCircle,
        title: "Merchant Center",
        subtitle: "Policy compliant feeds"
      },
      {
        icon: Search,
        title: "Product Discovery",
        subtitle: "Higher search presence"
      }
    ]}

    performanceMetrics={[
      {
        value: "12K+",
        label: "Products Optimized"
      },
      {
        value: "+74%",
        label: "Visibility Growth"
      },
      {
        value: "98%",
        label: "Feed Health Score"
      },
      {
        value: "500+",
        label: "Catalogs Managed"
      }
    ]}
    showcaseMetrics={[
      {
        value: "12K+",
        label: "Products Optimized",
        logo: "/image/google-ads.png"
      },
      {
        value: "+74%",
        label: "Visibility Growth",
        logo: "/image/google-analytics.png"
      },
      {
        value: "98%",
        label: "Feed Health Score",
        logo: "/image/google-tag-manager.png"
      },
      {
        value: "500+",
        label: "Catalogs Managed",
        logo: "/image/google-marketing-platform.png"
      }
    ]}

    showcaseSlides={[
      {
        image: "/image/google_ads_mockup.png",
        title: "Google Ads Dashboard"
      },
      {
        image: "/image/google_ads_mockup_3.png",
        title: "Campaign Performance"
      },
      {
        image: "/image/google_ads_mockup.png",
        title: "Revenue Metrics"
      }
    ]}
    showcaseTitle="Google Merchant Center Performance"

    showcaseDescription="
    Structured feeds and optimized product data that
    improve visibility across Google Shopping.
    "

    showcaseHighlights={[
      "Feed Optimization",
      "GTIN Validation",
      "Category Mapping",
      "Merchant Center Compliance"
    ]}
  />
);

export const GoogleShoppingAds = ({ onOpenForm }) => (
  <DigitalMarketingTemplate
    onOpenForm={onOpenForm}

    badge="Google Shopping"

    title="Google Shopping Ads"

    highlight="That Increase Sales"

    description="
    Drive qualified buyers directly to your products
    through high-performing Shopping campaigns and
    Performance Max strategies focused on ROAS.
    "

    heroImage="/image/google-shopping-placeholder.webp"

    metric1Value="7.2x"
    metric1Label="Average ROAS"

    metric2Value="+145%"
    metric2Label="Revenue Growth"

    faqs={googleShoppingFaqs}

    heroHighlights={[
      {
        icon: ShoppingBag,
        title: "Product Sales",
        subtitle: "High-intent shoppers"
      },
      {
        icon: TrendingUp,
        title: "Revenue Growth",
        subtitle: "ROAS focused campaigns"
      },
      {
        icon: Rocket,
        title: "Performance Max",
        subtitle: "Full funnel scaling"
      }
    ]}

    performanceMetrics={[
      {
        value: "7.2x",
        label: "Average ROAS"
      },
      {
        value: "+145%",
        label: "Revenue Growth"
      },
      {
        value: "-42%",
        label: "Lower CPA"
      },
      {
        value: "300+",
        label: "Campaigns Managed"
      }
    ]}

    showcaseTitle="Google Shopping Campaign Results"

    showcaseDescription="
    Revenue-focused Shopping campaigns designed
    to maximize conversions and profitability.
    "

    showcaseHighlights={[
      "Performance Max",
      "Shopping Campaigns",
      "Bid Optimization",
      "Revenue Scaling"
    ]}
    showcaseMetrics={[
      {
        value: "7.2x",
        label: "Average ROAS",
        logo: "/image/google-ads.png"
      },
      {
        value: "+145%",
        label: "Revenue Growth",
        logo: "/image/google-analytics.png"
      },
      {
        value: "-42%",
        label: "Lower CPA",
        logo: "/image/google-tag-manager.png"
      },
      {
        value: "300+",
        label: "Campaigns Managed",
        logo: "/image/google-marketing-platform.png"
      }
    ]}
    showcaseSlides={[
      {
        image: "/image/google_ads_mockup.png",
        title: "Google Ads Dashboard"
      },
      {
        image: "/image/google_ads_mockup_3.png",
        title: "Campaign Performance"
      },
      {
        image: "/image/google_ads_mockup.png",
        title: "Revenue Metrics"
      }
    ]}
  />
);
