import WhyChoose from "../solutions/WhyChoose";
import TestimonialCard from "../solutions/TestimonialCard";
import Tabs from "./Tabs";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
import CTA from "../solutions/CTA";
import ProcessingResources from "./ProcessingResources";
import MarylandRestaurantNovi from "./MarylandRestaurantNovi";
import BusinessFinancing from "./BusinessFinancing";
export default function Page() {
  return (
    <>
      <Tabs />
      <BusinessFinancing />
      <WhyChoose />
      <TestimonialCard />
      <MarylandRestaurantNovi />
      <ContactEliteCardProcessing />
      <ProcessingResources />
      <CTA />
    </>
  );
}
