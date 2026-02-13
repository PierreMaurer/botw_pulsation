"use client";

import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealStaggerItem } from "@/components/ui/ScrollReveal";

const PRICING_CARDS: Array<{
  titleLines: [string, string];
  price: string;
  description: string;
  image: string;
}> = [
  {
    titleLines: ["SINGLE", "CLASS"],
    image: "/CARDPRICING1.jpg",
    price: "19.99$/session",
    description:
      "One-shot access to any studio or live session. No strings attached, just show up and sync.",
  },
  {
    titleLines: ["Member", "SHIP"],
    image: "/CARDPRICING2.jpg",
    price: "19.99$/Months",
    description:
      "Unlimited access to all live sessions and the replay library. Your studio, your rhythm.",
  },
  {
    titleLines: ["ON", "DEMAND"],
    image: "/CARDPRICING3.jpg",
    price: "49.99$/session",
    description:
      "Custom class tailored to you. Schedule when it suits you and sync at your own pace.",
  },
];

/**
 * Single pricing card with background image, halo overlay; expands on hover to show description, price and BOOK NOW.
 */
function PricingCard({
  titleLines,
  price,
  description,
  image,
}: {
  titleLines: [string, string];
  price: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className="group relative flex h-[220px] sm:h-[246px] w-full min-w-0 max-w-[400px] mx-auto flex-col overflow-hidden rounded-[20px] sm:rounded-[25px] px-0.5 transition-[height] duration-300 ease-out hover:h-[520px] sm:hover:h-[578px]"
      style={{
        background: `url(${image}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/halo2.svg"
          alt=""
          width={260}
          height={182}
          className="absolute bottom-0 left-0 w-[65%] max-w-[260px] h-auto opacity-100 object-left-bottom"
          aria-hidden
        />
        <Image
          src={image}
          alt=""
          width={400}
          height={578}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          aria-hidden
        />
        <Image
          src="/HALO3.png"
          alt=""
          width={260}
          height={182}
          className="absolute bottom-0 left-0 w-[65%] max-w-[260px] h-auto object-left-bottom opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-90"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div
          className="flex flex-col items-center gap-3 transition-opacity duration-300 ease-out group-hover:opacity-0 pointer-events-none group-hover:pointer-events-none"
          style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
        >
          <div className="flex flex-col items-center gap-0 text-center font-display text-[32px] sm:text-[40px] font-bold leading-none tracking-[4px] uppercase">
            <span>{titleLines[0]}</span>
            <span>{titleLines[1]}</span>
          </div>
          <div
            className="flex min-h-[12px] w-full max-w-[192px] flex-col justify-center text-center font-sans text-[14px] sm:text-[15.6px] font-light leading-normal tracking-[1.56px] uppercase"
            style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
          >
            {price}
          </div>
        </div>
          <div
            className="absolute inset-0 flex items-center justify-center px-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto !text-[var(--Primaire-Blanc)]"
            aria-hidden
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div
                className="flex flex-col items-center gap-0 text-center font-display text-[32px] sm:text-[40px] font-bold leading-none tracking-[4px] uppercase !text-[var(--Primaire-Blanc)]"
              >
                <span>{titleLines[0]}</span>
                <span>{titleLines[1]}</span>
              </div>
              <div
                className="flex min-h-[80px] sm:min-h-[112px] w-full max-w-[192px] flex-col justify-center text-center font-sans text-[13px] sm:text-[15.6px] font-medium leading-normal tracking-[1.56px] uppercase"
                style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
              >
                {description}
              </div>
            </div>
            <div
              className="absolute bottom-[19px] left-1/2 -translate-x-1/2 flex min-h-[23px] w-[192px] flex-col justify-center text-center font-sans text-[14px] sm:text-[15.6px] font-light leading-normal tracking-[1.56px] uppercase gap-3"
              style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
            >
              <p>{price}</p>
              <button
                type="button"
                className="flex w-full max-w-[190px] h-[52px] sm:h-[60px] px-[27px] justify-center items-center gap-[10px] rounded-[30px] border-2 border-[var(--Primaire-Blanc,#F4F4F4)] bg-transparent font-display text-[17px] sm:text-[20px] font-normal tracking-[2px] uppercase whitespace-nowrap transition-colors hover:bg-[var(--Primaire-Blanc,#F4F4F4)] hover:!text-black"
                style={{
                  color: "var(--Primaire-Blanc, #F4F4F4)",
                }}
              >
                BOOK NOW
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="w-full min-w-0 bg-white overflow-x-hidden">
      <div className="w-full min-w-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <ScrollReveal as="div" className="w-full pt-16 sm:pt-20 lg:pt-[122px] pb-12 sm:pb-16 lg:pb-[122px] flex flex-col items-center" y={14} duration={0.5}>
          <p
            className="text-center font-sans text-[20px] sm:text-[22px] lg:text-[26px] font-normal tracking-[2.6px] uppercase text-[var(--Noir-main,#121212)]"
          >
            OUR PRICING
          </p>
        </ScrollReveal>
        <ScrollRevealStagger as="div" className="w-full min-w-0 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-30" staggerDelay={0.1} amount={0.08}>
          {PRICING_CARDS.map((card, index) => (
            <ScrollRevealStaggerItem key={index}>
              <PricingCard
                titleLines={card.titleLines}
                price={card.price}
                description={card.description}
                image={card.image}
              />
            </ScrollRevealStaggerItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
