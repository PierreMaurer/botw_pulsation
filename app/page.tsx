import { Navbar, Footer, Hero, DanceTypes, Pricing } from "@/components";
import Session from "@/components/sections/Session";
import Lenis from 'lenis'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-x-hidden max-w-full">
        <Hero />
        <DanceTypes />
        <Session />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
