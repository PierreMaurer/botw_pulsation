"use client";

import Image from "next/image";

/**
 * Pricing card content: two-line title, price, description and optional button label.
 */
const PRICING_CARDS: Array<{
  titleLines: [string, string];
  price: string;
  description: string;
}> = [
  {
    titleLines: ["SINGLE", "CLASS"],
    price: "19.99$/session",
    description:
      "One-shot access to any studio or live session. No strings attached, just show up and sync.",
  },
  {
    titleLines: ["Member", "SHIP"],
    price: "19.99$/Months",
    description:
      "Unlimited access to all live sessions and the replay library. Your studio, your rhythm.",
  },
  {
    titleLines: ["ON", "DEMAND"],
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
}: {
  titleLines: [string, string];
  price: string;
  description: string;
}) {
  return (
    <div
      className="group relative flex h-[246px] w-full min-w-0 max-w-[400px] mx-auto flex-col overflow-hidden rounded-[25px] px-0.5 transition-[height] duration-300 ease-out hover:h-[578px]"
      style={{
        background: 'url("/CARD PRICING.png") lightgray 50% / cover no-repeat',
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
          src="/IMAGEHOVER.jpg"
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
          <div className="flex flex-col items-center gap-0 text-center font-display text-[40px] font-bold leading-none tracking-[4px] uppercase">
            <span>{titleLines[0]}</span>
            <span>{titleLines[1]}</span>
          </div>
          <div
            className="flex h-[12.653px] w-[192px] flex-col justify-center text-center font-sans text-[15.6px] font-light leading-normal tracking-[1.56px] uppercase"
            style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
          >
            {price}
          </div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center px-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto !text-[var(--Primaire-Blanc)]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="flex flex-col items-center gap-0 text-center font-display text-[40px] font-bold leading-none tracking-[4px] uppercase !text-[var(--Primaire-Blanc)]"
            >
              <span>{titleLines[0]}</span>
              <span>{titleLines[1]}</span>
            </div>
            <div
              className="flex min-h-[112px] w-[192px] flex-col justify-center text-center font-sans text-[15.6px] font-medium leading-normal tracking-[1.56px] uppercase"
              style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
            >
              {description}
            </div>
            <div
              className="flex h-[23px] w-[192px] flex-col justify-center text-center font-sans text-[15.6px] font-light leading-normal tracking-[1.56px] uppercase"
              style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
            >
              {price}
            </div>
            <button
              type="button"
              className="flex w-[190px] h-[60px] px-[27px] justify-center items-center gap-[10px] rounded-[30px] border-2 border-[var(--Primaire-Blanc,#F4F4F4)] bg-transparent font-display text-[20px] font-normal tracking-[2px] uppercase whitespace-nowrap transition-colors hover:bg-[var(--Primaire-Blanc,#F4F4F4)] hover:!text-black"
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

/**
 * Our Pricing section: centered title with 122px vertical spacing and three pricing cards.
 */
export default function Pricing() {
  return (
    <section className="w-full min-w-0 bg-white overflow-x-hidden">
      <div className="w-full min-w-0 max-w-[1440px] mx-auto px-6 flex flex-col items-center">
        <div className="w-full pt-[122px] pb-[122px] flex flex-col items-center">
          <p
            className="text-center font-sans text-[26px] font-normal tracking-[2.6px] uppercase text-[var(--Noir-main,#121212)]"
          >
            OUR PRICING
          </p>
        </div>
        <div className="w-full min-w-0 grid grid-cols-1 md:grid-cols-3 gap-8 pb-30">
          {PRICING_CARDS.map((card, index) => (
            <PricingCard
              key={index}
              titleLines={card.titleLines}
              price={card.price}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
