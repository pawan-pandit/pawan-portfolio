import Image from "next/image";
import Hero from "./components/Hero/page";
import WorkSection from "./components/Work/page";

export default function Home() {
  return (
    <div className="flex-col  items-center justify-center  cormor ">
    <Hero/>
    <WorkSection/>
    </div>
  );
}
