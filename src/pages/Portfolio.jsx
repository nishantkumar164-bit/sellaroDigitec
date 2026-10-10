import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioExplorer from "../components/portfolio/PortfolioExplorer";
import ContactCTA from "../components/sections/ContactCTA";

export default function Portfolio({ onOpenForm }) {
  return (
    <>
      <PortfolioHero />
      <PortfolioExplorer />
      <ContactCTA
        badge="Ready To Scale?"
        title="Let's Register & Grow"
        highlightedText="Your Business"
        description="Book a free consultation and get expert guidance on registrations, compliance and business growth."
        buttonText="Get Free Consultation"
        onButtonClick={onOpenForm}
      />
    </>
  );
}