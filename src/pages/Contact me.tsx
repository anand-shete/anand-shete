import { Footer, Navbar, SmoothScroll } from "@/components/common";
import { ContactForm } from "@/sections";

export default function Contact() {
  return (
    <div className="mt-22">
      <SmoothScroll />
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}
