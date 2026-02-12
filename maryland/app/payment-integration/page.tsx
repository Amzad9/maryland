import IntegratedPaymentsHero from "../components/payment-integration/IntegratedPaymentsHero";
import PaymentsStatsSection from "../components/payment-integration/PaymentsStatsSection";
import WhitepaperBanner from "../components/payment-integration/WhitepaperBanner";
import StepsSection from "../components/payment-integration/StepsSection";
import ExperienceCarousel from "../components/payment-integration/ExperienceCarousel";
import TabsSection from "../components/payment-integration/TabsSection";
import TestimonialSection from "../components/payment-integration/TestimonialSection";
import ResourcesCarousel from "../components/payment-integration/ResourcesCarousel";
import FinalCTA from "../components/payment-integration/FinalCTA";

export const metadata = {
  title: "Integrated Payments for Software Vendors | Maryland Merchant Services",
  description:
    "Integrate and monetize payments on your platforms. Seamless omni-channel payments, developer-friendly APIs, and dedicated partner support for software vendors.",
};

export default function PaymentIntegrationPage() {
  return (
    <main className="overflow-x-hidden">
      <IntegratedPaymentsHero />
      <WhitepaperBanner />
      <StepsSection />

      <PaymentsStatsSection />

      <ExperienceCarousel />
      <TabsSection />
      {/* <TestimonialSection /> */}
      <ResourcesCarousel />
      <FinalCTA />
    </main>
  );
}
