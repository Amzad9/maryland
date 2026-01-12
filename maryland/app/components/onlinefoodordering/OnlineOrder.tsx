import WhyChoose from "../solutions/WhyChoose";
import TestimonialCard from "../solutions/TestimonialCard";
import Tabs from "../onlinefoodordering/Tabs";
import MarylandPaymentProcessing from "../solutions/MarylandPaymentProcessing";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
import CTA from "../solutions/CTA";
import ResourcesSection from "../solutions/ResourcesSection";
import MarylandRestaurantNovi from "./ MarylandRestaurantNovi";

export default function Page() {
  return (
    <>
      <Tabs />
      <WhyChoose />
      <TestimonialCard />
      <MarylandRestaurantNovi />
      <ContactEliteCardProcessing />
      <ResourcesSection />
      <CTA />
    </>
  );
}
