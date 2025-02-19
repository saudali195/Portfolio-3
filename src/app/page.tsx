import Hero from "./components/hero";
import TechStack from "./components/techtack";
import ProjectShowcase from "./components/projectShowcase";
import Testimonials from "./components/testimontals";
import ContactForm from "./components/contactForm";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <ProjectShowcase />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
