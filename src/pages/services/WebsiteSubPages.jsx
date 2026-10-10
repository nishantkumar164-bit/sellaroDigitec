import React from "react";
import {
    ShoppingCart,
    Smartphone,
    Zap,
    Palette,
    Package,
    CreditCard,
    TrendingUp,
    Store,
    LayoutDashboard, Search,
    PenTool,
    ShieldCheck,
    Globe,
    Code2,
    RefreshCcw,
    BookOpen

} from 'lucide-react';


import WebsiteTemplate from '../../components/templates/WebsiteTemplate';
import { shopifyFaqs, wordpressFaqs, customWebsiteFaqs, redesignFaqs, productCatalogFaqs } from '../../data/FAQ/websiteFaqs';



export const ShopifyDevelopment = ({ onOpenForm }) => (
    <WebsiteTemplate
        onOpenForm={onOpenForm}

        badge="SHOPIFY DEVELOPMENT"

        title="Shopify Stores"

        highlight="Built To Convert"

        description="
    Launch a fast, scalable and conversion-focused
    Shopify store designed to increase sales and
    deliver an exceptional customer experience.
    "

        heroImage="/image/account/shopify_banner.webp"

        metric1Value="150+"
        metric1Label="Stores Delivered"

        metric2Value="+140%"
        metric2Label="Conversion Growth"

        heroHighlights={[
            {
                icon: ShoppingCart,
                title: "Ecommerce Ready",
                subtitle: "Built for online sales"
            },
            {
                icon: Smartphone,
                title: "Mobile Optimized",
                subtitle: "Responsive on every device"
            },
            {
                icon: Zap,
                title: "Fast Performance",
                subtitle: "Optimized loading speeds"
            }
        ]}

        performanceMetrics={[
            {
                value: "150+",
                label: "Stores Delivered"
            },
            {
                value: "+140%",
                label: "Conversion Growth"
            },
            {
                value: "98%",
                label: "Client Satisfaction"
            },
            {
                value: "3.1s",
                label: "Average Load Speed"
            }
        ]}

        services={[
            {
                icon: Store,
                title: "Store Setup",
                desc: "Complete Shopify store configuration and launch."
            },
            {
                icon: Palette,
                title: "Theme Customization",
                desc: "Custom layouts aligned with your brand identity."
            },
            {
                icon: Package,
                title: "Product Setup",
                desc: "Organized catalogs and optimized product pages."
            },
            {
                icon: CreditCard,
                title: "Payment Integration",
                desc: "Secure checkout and payment gateway setup."
            },
            {
                icon: TrendingUp,
                title: "Conversion Optimization",
                desc: "Improve customer journeys and sales performance."
            },
            {
                icon: Smartphone,
                title: "Mobile Experience",
                desc: "Responsive shopping experiences across devices."
            }
        ]}

        showcaseTitle="Shopify Store Performance"

        showcaseDescription="
    Ecommerce stores engineered for speed,
    usability and conversion growth.
    "

        showcaseMetrics={[
            {
                value: "+140%",
                label: "Conversion Growth",
                logo: "/image/account/shopify_growth.png"
            },
            {
                value: "150+",
                label: "Stores Delivered",
                logo: "/image/account/shopify_store_delivered.png"
            },
            {
                value: "98%",
                label: "Client Satisfaction",
                logo: "/image/account/shopify_satisfaction.png"
            },
            {
                value: "3.1s",
                label: "Average Load Speed",
                logo: "/image/account/shopify_speed_loading.png"
            }
        ]}

        showcaseHighlights={[
            "Custom Store Design",
            "Theme Development",
            "Mobile Optimization",
            "Conversion Optimization"
        ]}

        showcaseSlides={[
            {
                video: "/image/Shopify.mp4",
                title: "Before & After Homepage"
            }
        ]}

        faqs={shopifyFaqs}
    />
);

export const WordPressDevelopment = ({ onOpenForm }) => (
    <WebsiteTemplate
        onOpenForm={onOpenForm}

        badge="WORDPRESS DEVELOPMENT"

        title="WordPress Websites"

        highlight="Built For Growth"

        description="
    Professional WordPress websites designed for
    performance, SEO visibility and long-term business growth.
    "

        heroImage="/image/wordpress_hero.webp"

        metric1Value="120+"
        metric1Label="Projects Delivered"

        metric2Value="+110%"
        metric2Label="Traffic Growth"

        heroHighlights={[
            {
                icon: Globe,
                title: "SEO Friendly",
                subtitle: "Built for search visibility"
            },
            {
                icon: Smartphone,
                title: "Mobile Responsive",
                subtitle: "Works across all devices"
            },
            {
                icon: Zap,
                title: "Fast Performance",
                subtitle: "Optimized loading speed"
            }
        ]}

        performanceMetrics={[
            {
                value: "120+",
                label: "Projects Delivered"
            },
            {
                value: "+110%",
                label: "Traffic Growth"
            },
            {
                value: "98%",
                label: "Client Satisfaction"
            },
            {
                value: "2.8s",
                label: "Average Load Speed"
            }
        ]}

        services={[
            {
                icon: LayoutDashboard,
                title: "Business Websites",
                desc: "Professional websites tailored for businesses and brands."
            },
            {
                icon: PenTool,
                title: "Custom Design",
                desc: "Unique website layouts aligned with your brand identity."
            },
            {
                icon: Search,
                title: "SEO Optimization",
                desc: "Built with SEO best practices for better rankings."
            },
            {
                icon: ShieldCheck,
                title: "Security Setup",
                desc: "Enhanced protection with security and backup solutions."
            },
            {
                icon: TrendingUp,
                title: "Performance Optimization",
                desc: "Fast-loading pages designed for user engagement."
            },
            {
                icon: Smartphone,
                title: "Responsive Experience",
                desc: "Seamless browsing across mobile, tablet and desktop."
            }
        ]}

        showcaseTitle="WordPress Website Performance"

        showcaseDescription="
    Modern WordPress websites engineered for speed,
    lead generation and long-term business growth.
    "

        showcaseMetrics={[
            {
                value: "+110%",
                label: "Traffic Growth",
                logo: "/image/grow.webp"
            },
            {
                value: "120+",
                label: "Projects Delivered",
                logo: "/image/projects-delivery.webp"
            },
            {
                value: "98%",
                label: "Client Satisfaction",
                logo: "/image/client_satisfaction.webp"
            },
            {
                value: "2.8s",
                label: "Average Load Speed",
                logo: "/image/load-speed.webp"
            }
        ]}

        showcaseHighlights={[
            "Custom Website Design",
            "SEO Friendly Structure",
            "Mobile Responsive",
            "Fast Performance"
        ]}

        showcaseSlides={[
            
            {
                video: "/image/wordpress vd.mp4",
                title: "Before & After Homepage"
            }
        ]}

        faqs={wordpressFaqs}
    />
);

export const CustomWebsiteDevelopment = ({ onOpenForm }) => (
    <WebsiteTemplate
        onOpenForm={onOpenForm}

        badge="CUSTOM WEBSITE DEVELOPMENT"

        title="Custom Websites"

        highlight="Built Around Your Business"

        description="
    Fully customized websites and web applications
    developed to match your exact business requirements,
    workflows and growth goals.
    "

        heroImage="/image/ui.webp"

        metric1Value="80+"
        metric1Label="Custom Projects"

        metric2Value="+180%"
        metric2Label="Business Growth"

        heroHighlights={[
            {
                icon: Code2,
                title: "Custom Development",
                subtitle: "Built from scratch"
            },
            {
                icon: Smartphone,
                title: "Responsive Design",
                subtitle: "Optimized for every device"
            },
            {
                icon: Zap,
                title: "High Performance",
                subtitle: "Fast and scalable"
            }
        ]}

        performanceMetrics={[
            {
                value: "80+",
                label: "Projects Delivered"
            },
            {
                value: "+180%",
                label: "Business Growth"
            },
            {
                value: "99%",
                label: "Client Satisfaction"
            },
            {
                value: "2.5s",
                label: "Average Load Speed"
            }
        ]}

        services={[
            {
                icon: Code2,
                title: "Custom Development",
                desc: "Websites built entirely around your business requirements."
            },
            {
                icon: LayoutDashboard,
                title: "Business Portals",
                desc: "Admin dashboards and internal business systems."
            },
            {
                icon: PenTool,
                title: "UI/UX Design",
                desc: "Modern user experiences designed for conversions."
            },
            {
                icon: ShieldCheck,
                title: "Secure Architecture",
                desc: "Enterprise-grade security and performance."
            },
            {
                icon: TrendingUp,
                title: "Scalable Solutions",
                desc: "Ready to grow alongside your business."
            },
            {
                icon: Globe,
                title: "API Integrations",
                desc: "Connect with third-party tools and platforms."
            }
        ]}

        showcaseTitle="Custom Website Success"

        showcaseDescription="
    Tailored web solutions designed to improve
    efficiency, user engagement and business growth.
    "

        showcaseMetrics={[
            {
                value: "+180%",
                label: "Business Growth",
                logo: "/image/grow.webp"
            },
            {
                value: "80+",
                label: "Projects Delivered",
                logo: "/image/projects-delivery.webp"
            },
            {
                value: "99%",
                label: "Client Satisfaction",
                logo: "/image/client_satisfaction.webp"
            },
            {
                value: "2.5s",
                label: "Average Load Speed",
                logo: "/image/load-speed.webp"
            }
        ]}

        showcaseHighlights={[
            "Custom Business Logic",
            "Advanced Integrations",
            "Scalable Architecture",
            "Modern UI/UX"
        ]}

        showcaseSlides={[
            
            {
                video: "/image/custom_website.mp4",
                title: "Before & After Homepage"
            }
        ]}

        faqs={customWebsiteFaqs}
    />
);

export const WebsiteRedesign = ({ onOpenForm }) => (
    <WebsiteTemplate
        onOpenForm={onOpenForm}

        badge="WEBSITE REDESIGN & CUSTOMIZATION"

        title="Website Redesign"

        highlight="Modernize & Optimize"

        description="
    Transform outdated websites into modern,
    high-performing digital experiences that improve
    engagement, conversions and brand credibility.
    "

        heroImage="/image/website_redesign.webp"

        metric1Value="100+"
        metric1Label="Websites Revamped"

        metric2Value="+125%"
        metric2Label="Conversion Improvement"

        heroHighlights={[
            {
                icon: RefreshCcw,
                title: "Modern Redesign",
                subtitle: "Fresh user experience"
            },
            {
                icon: Smartphone,
                title: "Mobile Optimization",
                subtitle: "Responsive across devices"
            },
            {
                icon: Zap,
                title: "Performance Boost",
                subtitle: "Faster loading speeds"
            }
        ]}

        performanceMetrics={[
            {
                value: "100+",
                label: "Websites Revamped"
            },
            {
                value: "+125%",
                label: "Conversion Improvement"
            },
            {
                value: "98%",
                label: "Client Satisfaction"
            },
            {
                value: "2.7s",
                label: "Average Load Speed"
            }
        ]}

        services={[
            {
                icon: RefreshCcw,
                title: "Website Redesign",
                desc: "Modern layouts and updated visual experiences."
            },
            {
                icon: PenTool,
                title: "UI/UX Improvements",
                desc: "Enhanced user journeys and engagement."
            },
            {
                icon: Smartphone,
                title: "Mobile Optimization",
                desc: "Responsive experiences across all devices."
            },
            {
                icon: Search,
                title: "SEO Improvements",
                desc: "Better structure and search visibility."
            },
            {
                icon: ShieldCheck,
                title: "Performance Optimization",
                desc: "Improved speed, security and reliability."
            },
            {
                icon: TrendingUp,
                title: "Conversion Optimization",
                desc: "Turn more visitors into leads and customers."
            }
        ]}

        showcaseTitle="Website Transformation Results"

        showcaseDescription="
    Strategic redesigns focused on improving
    performance, engagement and business growth.
    "

        showcaseMetrics={[
            {
                value: "+125%",
                label: "Conversion Improvement",
                logo: "/image/campagins.webp"
            },
            {
                value: "100+",
                label: "Websites Revamped",
                logo: "/image/projects-delivery.webp"
            },
            {
                value: "98%",
                label: "Client Satisfaction",
                logo: "/image/client_satisfaction.webp"
            },
            {
                value: "2.7s",
                label: "Average Load Speed",
                logo: "/image/load-speed.webp"
            }
        ]}

        showcaseHighlights={[
            "Modern UI Design",
            "Mobile Optimization",
            "Speed Improvements",
            "Better Conversions"
        ]}

        showcaseSlides={[
            
            {
                video: "/image/Website_redesign_.mp4",
                title: "Before & After Homepage"
            }
        ]}

        faqs={redesignFaqs}
    />
);

export const ProductCatalogWebsite = ({ onOpenForm }) => (
    <WebsiteTemplate
        onOpenForm={onOpenForm}

        badge="PRODUCT CATALOG WEBSITE"

        title="Product Catalog Websites"

        highlight="Showcase Products Professionally"

        description="
    Display your products in a structured and
    professional way while generating inquiries,
    quotations and business leads online.
    "

        heroImage="/image/catalog-placeholder.png"

        metric1Value="200+"
        metric1Label="Catalogs Created"

        metric2Value="+95%"
        metric2Label="Lead Growth"

        heroHighlights={[
            {
                icon: BookOpen,
                title: "Organized Catalog",
                subtitle: "Professional product showcase"
            },
            {
                icon: Smartphone,
                title: "Mobile Friendly",
                subtitle: "Optimized for all devices"
            },
            {
                icon: TrendingUp,
                title: "Lead Generation",
                subtitle: "Turn visitors into inquiries"
            }
        ]}

        performanceMetrics={[
            {
                value: "200+",
                label: "Catalogs Created"
            },
            {
                value: "+95%",
                label: "Lead Growth"
            },
            {
                value: "98%",
                label: "Client Satisfaction"
            },
            {
                value: "3.0s",
                label: "Average Load Speed"
            }
        ]}

        services={[
            {
                icon: BookOpen,
                title: "Product Catalog Setup",
                desc: "Organized categories and product listings."
            },
            {
                icon: Package,
                title: "Product Showcase",
                desc: "Professional product pages with specifications."
            },
            {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Smooth experience across all devices."
            },
            {
                icon: Search,
                title: "SEO Optimization",
                desc: "Improve visibility for your products."
            },
            {
                icon: Globe,
                title: "Inquiry System",
                desc: "Generate leads through forms and WhatsApp."
            },
            {
                icon: TrendingUp,
                title: "Business Growth",
                desc: "Convert product views into business opportunities."
            }
        ]}

        showcaseTitle="Product Catalog Success"

        showcaseDescription="
    Catalog websites designed to increase visibility,
    generate inquiries and strengthen brand credibility.
    "

        showcaseMetrics={[
            {
                value: "+95%",
                label: "Lead Growth",
                logo: "/image/grow.webp"
            },
            {
                value: "200+",
                label: "Catalogs Created",
                logo: "/image/projects-delivery.webp"
            },
            {
                value: "98%",
                label: "Client Satisfaction",
                logo: "/image/client_satisfaction.webp"
            },
            {
                value: "3.0s",
                label: "Average Load Speed",
                logo: "/image/load-speed.webp"
            }
        ]}

        showcaseHighlights={[
            "Product Categories",
            "Lead Generation Forms",
            "Mobile Responsive",
            "SEO Optimized"
        ]}

        showcaseSlides={[
            {
                image: "/image/catalog-1.webp",
                title: "Product Listing Page"
            },
            {
                image: "/image/catalog-2.webp",
                title: "Category Showcase"
            },
            {
                image: "/image/catalog-3.webp",
                title: "Inquiry System"
            }
        ]}

        faqs={productCatalogFaqs}
    />
);