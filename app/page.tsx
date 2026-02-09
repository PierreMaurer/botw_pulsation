import { Navbar, Footer, Hero, DanceTypes, Pricing } from "@/components";
import Session from "@/components/sections/Session";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Hero />
        <DanceTypes />
          <Session/>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
