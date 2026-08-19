import AiEngineersSection from "./_section/AiEngineersSection";
import AiInceptionBlogSection from "./_section/AiInceptionBlogSection";
import FaqBannerSection from "./_section/FaqBannerSection";
import HeroSection from "./_section/hero";
import HowItWorksFlowSection from "./_section/HowItWorksFlowSection";
import HowItWorksSection from "./_section/HowItWorksSection";
import PricingPromoSection from "./_section/PricingPromoSectionProps";
import QuotesRowSection from "./_section/QuotesRowSection";
import TestimonialsQuotesRow from "./_section/TestimonialsQuotesRow";
import ThreeStepsSection from "./_section/ThreeStepsSection";

export default function HomePage() {
  return (
    <div className="booking-home">
      <HeroSection />
      <QuotesRowSection/>
      <HowItWorksSection/>
      <AiEngineersSection/>
      <HowItWorksFlowSection/>
      <ThreeStepsSection/>
      <TestimonialsQuotesRow/>
      <PricingPromoSection/>
      <FaqBannerSection/>
      <AiInceptionBlogSection/>
    </div>
  );
}
