import About from "./_components/About";
import Contact from "./_components/Contact";
import FeaturedProject from "./_components/FeaturedProject";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ProjectsGrid from "./_components/ProjectsGrid";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProject />
      <ProjectsGrid />
      <About />
      <Contact />
    </>
  );
}