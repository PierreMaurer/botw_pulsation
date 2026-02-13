import { Card } from "@/components";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealStaggerItem } from "@/components/ui/ScrollReveal";

export default function DanceTypes() {
  return (
    <section id="dance-types" className="flex w-full max-w-[1440px] mx-auto px-[42px] pt-[122px] pb-[24px] flex-col justify-end items-center gap-[122px] overflow-x-hidden">
      <ScrollReveal as="div" className="flex w-[378px] h-[30px] flex-col justify-center" y={14} duration={0.55}>
        <p className="text-black font-sans text-[26px] font-normal tracking-[2.6px] uppercase">EXPLORE THE MOVEMENT</p>
      </ScrollReveal>
      <ScrollRevealStagger as="div" className="flex flex-row gap-40 justify-center items-start" staggerDelay={0.12} amount={0.08}>
        <ScrollRevealStaggerItem>
          <Card image="Contemporary.jpg" header="CONTEMPORARY" title="UNBOUND" description="Master the art of movement through a structured blend of floorwork, fluidity, and creative expression. Designed for those seeking technical growth and artistic release." hideGrainOnHover />
        </ScrollRevealStaggerItem>
        <ScrollRevealStaggerItem>
          <Card image="ONDEMANDE.jpg" header="ON-DEMAND" title="LIMITLESS" description="Your studio follows you wherever you go. Access a curated library of live sessions and 4K replays. High-quality guidance from our instructors, synchronized with your busy lifestyle." hideGrainOnHover />
        </ScrollRevealStaggerItem>
        <ScrollRevealStaggerItem>
          <Card image="HIPHOP.jpg" header="HIP HOP" title="IGNITE" description="Sync your body to the urban beat. Master the foundations of street dance with high-energy sessions designed to build confidence, rhythm, and your own unique flow." hideGrainOnHover />
        </ScrollRevealStaggerItem>
      </ScrollRevealStagger>
    </section>
  );
}
