import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <section className="h-screen w-screen absolute -z-10"></section>
      <Nav />
      <HeroSection />
    </main>
  );
}
