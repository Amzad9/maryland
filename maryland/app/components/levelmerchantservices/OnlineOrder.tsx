import WhyChoose from "../solutions/WhyChoose";
import TestimonialCard from "../solutions/TestimonialCard";
import Tabs from "../levelmerchantservices/Tabs";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
import CTA from "../solutions/CTA";
import ProcessingResources from "../levelmerchantservices/ProcessingResources";
import MarylandRestaurantNovi from "./ MarylandRestaurantNovi";

export default function Page() {
  return (
    <>
      <Tabs />
      <WhyChoose />
      <TestimonialCard />
      <MarylandRestaurantNovi />
      <ContactEliteCardProcessing />
      <ProcessingResources />
      <CTA />
    </>
  );
}
