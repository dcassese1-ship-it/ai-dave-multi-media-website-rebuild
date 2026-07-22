import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Launch from "@/app/components/Launch";
import Story from "@/app/components/Story";
import Watch from "@/app/components/Watch";
import Music from "@/app/components/Music";
import UniverseTeaser from "@/app/components/UniverseTeaser";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Launch />
        <Story />
        <Watch />
        <Music />
        <UniverseTeaser />
      </main>
      <Footer />
    </>
  );
}
