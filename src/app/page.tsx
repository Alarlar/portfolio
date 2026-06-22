import About from "./_components/About";
import Contact from "./_components/Contact";
import FeaturedProject from "./_components/FeaturedProject";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProject />
      <About />
      <Contact />
    </>
  );
}