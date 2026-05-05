import { Footer, Navbar, SmoothScroll } from "@/components/common";
import { ContactDetails, ContactForm } from "@/sections";

export default function Contact() {
  return (
    <div className="mt-22">
      <SmoothScroll />
      <Navbar />
      <ContactDetails />
      <ContactForm />
      <Footer />
    </div>
  );
}
