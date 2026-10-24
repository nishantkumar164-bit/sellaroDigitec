import LaunchHero from "../components/launch/LaunchHero";
import MarketplaceSetupCards from "../components/launch/MarketplaceSetupCards";
import WhyChooseLaunch from "../components/launch/WhyChooseLaunch";
import LaunchProcess from "../components/launch/LaunchProcess";
import GlobalPresence from "../components/launch/GlobalPresence";
import LaunchReadiness from "../components/launch/LaunchReadiness";
import LaunchIncluded from "../components/launch/LaunchIncluded";
import ContactCTA from "../components/sections/ContactCTA";
import SEO from "../components/common/SEO";

export default function NewAccountLaunch({ onOpenForm }) {
  return (
    <>
    <SEO
        title="New Seller Account Launch Services | Sellaro Digitec"
        description="Launch your marketplace business with Sellaro Digitec. Get seller account setup guidance, product listing creation, catalogue setup and launch support."
        canonical="/launch"
      />
      <LaunchHero onOpenForm={onOpenForm} />

      <MarketplaceSetupCards
        onOpenForm={onOpenForm}
      />

      <WhyChooseLaunch />

      <LaunchProcess />

      <div className="max-w-[1400px] mx-auto px-6 mt-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <GlobalPresence />

          <LaunchReadiness onOpenForm={onOpenForm} />

          <LaunchIncluded />
        </div>

        <ContactCTA
          badge="Ready To Scale?"
          title="Let's Register & Grow"
          highlightedText="Your Business"
          description="Book a free consultation and get expert guidance on registrations, compliance and business growth."
          buttonText="Get Free Consultation"
          onButtonClick={onOpenForm}
        />
      </div>
    </>
  );
}