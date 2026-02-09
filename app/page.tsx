import { Navbar, Footer, Hero, DanceTypes, Pricing } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Hero />
        <DanceTypes />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
