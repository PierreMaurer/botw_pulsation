import {Card} from "@/components";

export default function DanceTypes() {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-[42px] pt-[122px] pb-[24px] flex-col justify-end items-center gap-[122px]">
        <div className="flex w-[378px] h-[30px] flex-col justify-center">
            <p className="text-black font-sans text-[26px] font-normal tracking-[2.6px] uppercase">EXPLORE THE MOVEMENT</p>
        </div>
        <div className="flex flex-row gap-40 justify-center items-start">
        <Card image="Contemporary.png" header="CONTEMPORARY" title="UNBOUND" description="Master the art of movement through a structured blend of floorwork, fluidity, and creative expression. Designed for those seeking technical growth and artistic release."></Card>
          <Card image="ONDEMANDE.png" header="CONTEMPORARY" title="UNBOUND" description="Master the art of movement through a structured blend of floorwork, fluidity, and creative expression. Designed for those seeking technical growth and artistic release."></Card>
          <Card image="HIPHOP.png" header="CONTEMPORARY" title="UNBOUND" description="Master the art of movement through a structured blend of floorwork, fluidity, and creative expression. Designed for those seeking technical growth and artistic release."></Card>
      </div>
    </section>
  );
}
