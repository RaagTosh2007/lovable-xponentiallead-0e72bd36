import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <Approach />
        <section id="services">
          <Services />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
