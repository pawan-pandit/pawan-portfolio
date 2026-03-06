import Image from "next/image";
import Hero from "./components/Hero/page";
import WorkSection from "./components/Work/page";
import Skills from "./components/Skills"
import { MovingCards } from "./components/Testimonial";
import Footer from "./components/Footer";
import HowIWork from "./components/HowIWork";
export default function Home() {
  return (
    <div className="flex-col  items-center justify-center  roboto ">
    <Hero/>
    <section id="work">
  <WorkSection />
</section>
    <Skills/>
    <section id="process">
  <HowIWork />
</section>
    <MovingCards/>
    <Footer/>
    </div>
  );
}
