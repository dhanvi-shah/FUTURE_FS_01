import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CursorGlow from "@/components/layout/CursorGlow";
import GradientBlobs from "@/components/layout/GradientBlobs";
import Particles from "@/components/layout/Particles";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Leadership from "@/components/sections/Leadership";
import Volunteering from "@/components/sections/Volunteering";
import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import Honors from "@/components/sections/Honors";
import Languages from "@/components/sections/Languages";
import BlogPosts from "@/components/sections/BlogPosts";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <GradientBlobs />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Leadership />
        <Volunteering />
        <Publications />
        <Education />
        <Honors />
        <Languages />
        <BlogPosts />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
