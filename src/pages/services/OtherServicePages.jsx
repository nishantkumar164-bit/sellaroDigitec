import React from 'react';
import { ShieldCheck, Sparkles, Code, BookOpen, Layers } from 'lucide-react';
import Card from '../../components/common/Card';

const GeneralServiceTemplate = ({ title, desc, icon: Icon, features }) => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Badge */}
        <span className="inline-block mb-4 text-[10px] font-extrabold uppercase tracking-widest text-accent-400 bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full animate-pulse">
          Premium Brand Services
        </span>

        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          {title}{' '}
          <span className="bg-gradient-to-r from-accent-500 to-amber-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {desc}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-6 text-left border border-white/5 bg-white/[0.02]" glowColor="blue">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-accent-400" />
                <h4 className="font-heading font-bold text-sm text-white uppercase">{feature.name}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Info Notification */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-350 text-xs px-5 py-3 rounded-xl">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Core service configuration active. Contact our strategic architects to review dynamic case data.</span>
        </div>
      </div>
    </div>
  );
};

export const SocialMediaMarketing = () => (
  <GeneralServiceTemplate
    title="Social Media Marketing"
    desc="Deploy authentic, high-converting customer touchpoints across social discovery networks."
    icon={Sparkles}
    features={[
      { name: 'Organic Brand Advocacy', desc: 'Craft beautiful, high-engagement content architectures across top networks.' },
      { name: 'Paid Social Ads Integration', desc: 'Scale advertising funnels across Instagram, Facebook, and TikTok feeds.' }
    ]}
  />
);

export const Training = () => (
  <GeneralServiceTemplate
    title="Merchant Operations Training"
    desc="Equip your in-house teams with certified marketplace workflows and best practice catalogs."
    icon={BookOpen}
    features={[
      { name: 'SP-API Technical Training', desc: 'Train developers to securely hook into Amz SP-API and Flipkart APIs.' },
      { name: 'FBA Inventory Strategy', desc: 'Accelerate team efficiency in warehouse preparation and compliance policies.' }
    ]}
  />
);

export const DocumentCreation = () => (
  <GeneralServiceTemplate
    title="Corporate Document Creation"
    desc="Draft verified compliance templates, operational agreements, and regulatory briefs."
    icon={Layers}
    features={[
      { name: 'Merchant Compliance Agreements', desc: 'Review operational rules, liability guidelines, and brand assignments.' },
      { name: 'A+ Storyboard Blueprints', desc: 'Document strict copywriting and image formatting standard operations.' }
    ]}
  />
);

export const WebsiteDevelopment = () => (
  <GeneralServiceTemplate
    title="Website & D2C Development"
    desc="Engine fast, conversion-optimized D2C storefronts using headless Shopify frameworks."
    icon={Code}
    features={[
      { name: 'Headless Shopify Architecture', desc: 'Accelerate sub-second load metrics on responsive eCommerce frontends.' },
      { name: 'Custom App Integrations', desc: 'Build private React extensions to hook into CRM pipelines and ERP pools.' }
    ]}
  />
);
