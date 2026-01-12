import WhyChoose from "../solutions/WhyChoose";
import CTA from "../solutions/CTA";
import ProcessingResources from "../merchantrestaurant/ProcessingResources";
import Business from "./Business";
import RetailPOSSystem from "./RetailPOSSystem";
import CompleteRestaurant from "./CompleteRestaurant";
import EnhancedCustomer from "./EnhancedCustomer";
import OrderingPricing from "./OrderingPricing";
import IndustrySolutions from "./Industries";
import RestaurantPaymentProcessing from './RestaurantPaymentProcessing'
export default function Page() {
  return (
    <>
      <Business />
      <RetailPOSSystem />
      <IndustrySolutions />
      <CompleteRestaurant />
      <EnhancedCustomer />
      <OrderingPricing />
      <RestaurantPaymentProcessing />
      <WhyChoose />
      <ProcessingResources />
      <CTA />
    </>
  );
}
