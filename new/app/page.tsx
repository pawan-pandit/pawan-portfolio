import Image from "next/image";
import Hero from "./components/Hero/page";
// import Hero from "";

export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black cormor">
    <Hero/>
    </div>
  );
}
