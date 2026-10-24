import React from 'react';
import Card from '../../components/common/Card';
import SocialMediaTemplate from '../../components/templates/SocialMediaTemplate';
import { metaAdsFaqs, contentDesignFaqs, influencerMarketingFaqs, videoEditingFaqs } from '../../data/FAQ/socialMediaFaqs';
import {
    Target,
    Users,
    BarChart3,
    RefreshCcw,
    Rocket,
    TrendingUp,
    Instagram,
    Facebook,
    MessageCircle,
    Palette,
    LayoutGrid,
    Sparkles,
    ImageIcon,
    PenTool,
    Monitor,
    ShieldCheck, Search,
    Handshake,
    Camera,
    Star, Video,
    Film,
    PlayCircle,
    Clapperboard,
    MonitorPlay
} from 'lucide-react';
import SEO from "../../components/common/SEO";






export const MetaAds = ({ onOpenForm }) => (
    <SocialMediaTemplate
        onOpenForm={onOpenForm}

        badge="META ADVERTISING"

        title="Meta Ads"

        highlight="That Scale Brands"

        description="
    Reach, engage and convert customers across Facebook,
    Instagram and Messenger through high-performing Meta
    advertising campaigns built for growth.
    "

        heroImage="/image/meta-ads-banner.webp"

        metric1Value="6.1x"
        metric1Label="Average ROAS"

        metric2Value="+135%"
        metric2Label="Revenue Growth"

        heroHighlights={[
            {
                icon: Facebook,
                title: "Facebook Ads",
                subtitle: "Conversion-focused campaigns"
            },
            {
                icon: Instagram,
                title: "Instagram Growth",
                subtitle: "Reels & Stories advertising"
            },
            {
                icon: Target,
                title: "Audience Targeting",
                subtitle: "Precision customer acquisition"
            }
        ]}

        performanceMetrics={[
            {
                value: "25M+",
                label: "Impressions Generated"
            },
            {
                value: "150+",
                label: "Brands Managed"
            },
            {
                value: "500+",
                label: "Creatives Delivered"
            },
            {
                value: "4.8%",
                label: "Avg Engagement Rate"
            }
        ]}

        services={[
            {
                icon: Target,
                title: "Audience Research",
                desc: "Identify and target high-value customer segments."
            },
            {
                icon: Users,
                title: "Lead Generation",
                desc: "Generate qualified leads through optimized campaigns."
            },
            {
                icon: RefreshCcw,
                title: "Retargeting",
                desc: "Recover lost visitors and improve conversion rates."
            },
            {
                icon: BarChart3,
                title: "Creative Testing",
                desc: "Continuously improve ad creatives through A/B testing."
            },
            {
                icon: Rocket,
                title: "Campaign Scaling",
                desc: "Scale profitable campaigns while maintaining efficiency."
            },
            {
                icon: TrendingUp,
                title: "Performance Tracking",
                desc: "Measure results and optimize for maximum ROI."
            }
        ]}

        showcaseTitle="Meta Campaign Results"

        showcaseDescription="
    Revenue-focused Meta advertising campaigns designed
    to increase engagement, generate leads and drive sales.
    "

        showcaseMetrics={[
            {
                value: "+135%",
                label: "Revenue Growth",
                logo: "/image/grow.webp"
            },
            {
                value: "6.1x",
                label: "Average ROAS",
                logo: "/image/average.webp"
            },
            {
                value: "-41%",
                label: "Lower CPA",
                logo: "/image/cpa.webp"
            },
            {
                value: "25M+",
                label: "Impressions",
                logo: "/image/impression.webp"
            }
        ]}

        showcaseHighlights={[
            "Audience Targeting",
            "Creative Testing",
            "Retargeting Campaigns",
            "Revenue Scaling"
        ]}

        showcaseSlides={[
            {
                image: "/image/meta_ads_dashboard.webp",
                title: "Meta Campaign Dashboard"
            },
            {
                image: "/image/facebook_insights.webp",
                title: "Instagram Ad Performance"
            },
            {
                image: "/image/audience-insights.webp",
                title: "Facebook Campaign Results"
            }
        ]}

        faqs={metaAdsFaqs}
    />
);

export const ContentDesign = ({ onOpenForm }) => (
    <SocialMediaTemplate
        onOpenForm={onOpenForm}

        badge="CONTENT DESIGN"

        title="Content Design"

        highlight="That Builds Brands"

        description="
    Create scroll-stopping social media content that
    strengthens brand identity, improves engagement
    and drives meaningful audience interactions.
    "

        heroImage="/image/content-design-banner.webp"

        metric1Value="500+"
        metric1Label="Creatives Delivered"

        metric2Value="+180%"
        metric2Label="Engagement Growth"

        heroHighlights={[
            {
                icon: Palette,
                title: "Brand Identity",
                subtitle: "Consistent visual storytelling"
            },
            {
                icon: LayoutGrid,
                title: "Carousel Design",
                subtitle: "High-engagement content"
            },
            {
                icon: Sparkles,
                title: "Premium Creatives",
                subtitle: "Designed to stand out"
            }
        ]}

        performanceMetrics={[
            {
                value: "500+",
                label: "Creatives Delivered"
            },
            {
                value: "+180%",
                label: "Engagement Growth"
            },
            {
                value: "150+",
                label: "Brands Supported"
            },
            {
                value: "4.9/5",
                label: "Client Satisfaction"
            }
        ]}

        services={[
            {
                icon: Palette,
                title: "Social Media Posts",
                desc: "Custom branded creatives designed for audience engagement."
            },
            {
                icon: LayoutGrid,
                title: "Carousel Design",
                desc: "Educational and conversion-focused carousel content."
            },
            {
                icon: ImageIcon,
                title: "Ad Creatives",
                desc: "High-performing visual assets for advertising campaigns."
            },
            {
                icon: PenTool,
                title: "Brand Graphics",
                desc: "Maintain consistency across all digital touchpoints."
            },
            {
                icon: Monitor,
                title: "Story Creatives",
                desc: "Instagram and Facebook story designs optimized for attention."
            },
            {
                icon: Sparkles,
                title: "Creative Strategy",
                desc: "Content frameworks built around your growth objectives."
            }
        ]}

        showcaseTitle="Creative Design Portfolio"

        showcaseDescription="
    Premium social media creatives designed to
    improve engagement, strengthen branding
    and increase content performance.
    "

        showcaseMetrics={[
            {
                value: "500+",
                label: "Creatives Delivered",
                logo: "/image/creatives.webp"
            },
            {
                value: "+180%",
                label: "Engagement Growth",
                logo: "/image/grow.webp"
            },
            {
                value: "150+",
                label: "Brands Supported",
                logo: "/image/brands.webp"
            },
            {
                value: "4.9/5",
                label: "Client Satisfaction",
                logo: "/image/client_satisfaction.webp"
            }
        ]}

        showcaseHighlights={[
            "Carousel Design",
            "Story Creatives",
            "Brand Identity",
            "Ad Creative Production"
        ]}

        showcaseSlides={[
            {
                image: "/image/content-design-1.webp",
                title: "Instagram Creative"
            },
            {
                image: "/image/content-design-2.webp",
                title: "Carousel Design"
            },
            {
                image: "/image/content-design-3.webp",
                title: "Brand Creative"
            }
        ]}

        faqs={contentDesignFaqs}
    />
);

export const InfluencerMarketing = ({ onOpenForm }) => (
    <SocialMediaTemplate
        onOpenForm={onOpenForm}

        badge="INFLUENCER MARKETING"

        title="Influencer Marketing"

        highlight="That Builds Trust"

        description="
    Connect your brand with the right creators and
    influencers to increase reach, build credibility
    and drive authentic customer engagement.
    "

        heroImage="/image/influencer-placeholder.webp"

        metric1Value="500+"
        metric1Label="Creators Network"

        metric2Value="12M+"
        metric2Label="Audience Reach"

        heroHighlights={[
            {
                icon: Users,
                title: "Creator Network",
                subtitle: "Verified influencers across niches"
            },
            {
                icon: Handshake,
                title: "Brand Partnerships",
                subtitle: "Long-term creator collaborations"
            },
            {
                icon: Camera,
                title: "UGC Content",
                subtitle: "Authentic audience engagement"
            }
        ]}

        performanceMetrics={[
            {
                value: "500+",
                label: "Influencers Available"
            },
            {
                value: "12M+",
                label: "Audience Reach"
            },
            {
                value: "150+",
                label: "Campaigns Executed"
            },
            {
                value: "4.7%",
                label: "Avg Engagement"
            }
        ]}

        services={[
            {
                icon: Search,
                title: "Influencer Discovery",
                desc: "Find creators aligned with your industry and audience."
            },
            {
                icon: Users,
                title: "Creator Outreach",
                desc: "Build relationships with high-performing influencers."
            },
            {
                icon: Handshake,
                title: "Campaign Management",
                desc: "Coordinate end-to-end influencer marketing campaigns."
            },
            {
                icon: Camera,
                title: "UGC Production",
                desc: "Generate authentic content that drives trust and engagement."
            },
            {
                icon: TrendingUp,
                title: "Performance Tracking",
                desc: "Monitor reach, engagement and campaign effectiveness."
            },
            {
                icon: Star,
                title: "Brand Partnerships",
                desc: "Develop long-term influencer collaboration strategies."
            }
        ]}

        showcaseTitle="Creator Collaboration Results"

        showcaseDescription="
    Strategic influencer partnerships that help brands
    reach new audiences and build lasting customer trust.
    "

        showcaseMetrics={[
            {
                value: "12M+",
                label: "Audience Reach",
                logo: "/image/audience_reach.webp"
            },
            {
                value: "500+",
                label: "Creators Network",
                logo: "/image/creator_network.webp"
            },
            {
                value: "150+",
                label: "Campaigns Managed",
                logo: "/image/campagins.webp"
            },
            {
                value: "4.7%",
                label: "Engagement Rate",
                logo: "/image/engagement.webp"
            }
        ]}

        showcaseHighlights={[
            "Influencer Discovery",
            "Creator Partnerships",
            "UGC Content Creation",
            "Performance Reporting"
        ]}

        showcaseSlides={[
            {
                image: "/image/influencer-1.webp",
                title: "Creator Collaboration"
            },
            {
                image: "/image/influencer-2.webp",
                title: "Influencer Campaign"
            },
            {
                image: "/image/influencer-3.webp",
                title: "UGC Content Performance"
            }
        ]}

        faqs={influencerMarketingFaqs}
    />
);


export const VideoEditing = ({ onOpenForm }) => (
    <SocialMediaTemplate
        onOpenForm={onOpenForm}

        badge="VIDEO EDITING"

        title="Video Editing"

        highlight="That Captures Attention"

        description="
    Create engaging short-form and long-form videos
    designed to increase engagement, improve retention
    and drive measurable results across social platforms.
    "

        heroImage="/image/video-editing-placeholder.webp"

        metric1Value="1000+"
        metric1Label="Videos Delivered"

        metric2Value="+220%"
        metric2Label="Engagement Growth"

        heroHighlights={[
            {
                icon: Video,
                title: "Short Form Content",
                subtitle: "Reels, Shorts & TikTok"
            },
            {
                icon: Film,
                title: "Professional Editing",
                subtitle: "High-quality post-production"
            },
            {
                icon: PlayCircle,
                title: "Attention-Grabbing Videos",
                subtitle: "Built for engagement"
            }
        ]}

        performanceMetrics={[
            {
                value: "1000+",
                label: "Videos Delivered"
            },
            {
                value: "+220%",
                label: "Engagement Growth"
            },
            {
                value: "50M+",
                label: "Video Views"
            },
            {
                value: "150+",
                label: "Brands Supported"
            }
        ]}

        services={[
            {
                icon: Video,
                title: "Reels Editing",
                desc: "High-performing Instagram Reels optimized for engagement."
            },
            {
                icon: PlayCircle,
                title: "YouTube Shorts",
                desc: "Short-form video content designed for maximum reach."
            },
            {
                icon: Clapperboard,
                title: "Product Videos",
                desc: "Showcase products with professional video storytelling."
            },
            {
                icon: Sparkles,
                title: "Motion Graphics",
                desc: "Animations and effects that elevate content quality."
            },
            {
                icon: MonitorPlay,
                title: "Video Ads",
                desc: "Conversion-focused video creatives for paid campaigns."
            },
            {
                icon: Film,
                title: "UGC Video Editing",
                desc: "Transform raw creator footage into polished content."
            }
        ]}

        showcaseTitle="Video Performance Results"

        showcaseDescription="
    Premium video editing solutions designed to
    increase watch time, engagement and brand visibility.
    "

        showcaseMetrics={[
            {
                value: "50M+",
                label: "Video Views",
                logo: "/image/impression.webp"
            },
            {
                value: "+220%",
                label: "Engagement Growth",
                logo: "/image/grow.webp"
            },
            {
                value: "1000+",
                label: "Videos Delivered",
                logo: "/image/audience_reach.webp"
            },
            {
                value: "150+",
                label: "Brands Supported",
                logo: "/image/brands.webp"
            }
        ]}

        showcaseHighlights={[
            "Instagram Reels",
            "YouTube Shorts",
            "Motion Graphics",
            "Video Ad Production"
        ]}

        showcaseSlides={[
            {
                image: "/image/video-editing-1.webp",
                title: "Instagram Reel"
            },
            {
                image: "/image/video-editing-2.webp",
                title: "YouTube Short"
            },
            {
                image: "/image/video-editing-3.webp",
                title: "Video Advertisement"
            }
        ]}

        faqs={videoEditingFaqs}
    />
);