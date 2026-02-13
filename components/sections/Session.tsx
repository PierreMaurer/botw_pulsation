import Image from "next/image";
import ButtonJOIN from "@/components/ui/Button";

/**
 * Overlay content for a session card: title (optional second line), subtitle, button label, bottom-right label.
 */
type CardOverlay = {
  title: string;
  titleLine2?: string;
  subtitle: string;
  subtitleBlock?: { width: number; height: number };
  buttonLabel: string;
  bottomRight: string;
};

/**
 * Session row config: image, dimensions, layout side, text block dimensions and lines, and optional card overlay.
 */
const ROWS: Array<{
  image: string;
  width: number;
  height: number;
  imageSide: "left" | "right";
  textBlockWidth: number;
  textBlockHeight: number;
  lines: string[];
  overlay?: CardOverlay;
}> = [
  {
    image: "/CARD_SESSION.png",
    width: 678,
    height: 525,
    imageSide: "left",
    textBlockWidth: 689,
    textBlockHeight: 525,
    lines: ["MOVE WITH THE CITY,", "SYNC WITH", "YOURSELF"],
    overlay: {
      title: "NEXT SESSION",
      subtitle: "WEDNESDAY 14 FEB. - 4PM",
      subtitleBlock: { width: 253, height: 23 },
      buttonLabel: "JOIN SYNC",
      bottomRight: "20 MIN — BEGINNER STEP-BY-STEP",
    },
  },
  {
    image: "/ON_DEMANDE.png",
    width: 678,
    height: 525,
    imageSide: "right",
    textBlockWidth: 689,
    textBlockHeight: 525,
    lines: ["YOUR PROGRESS IS", "OUR", "CHOREOGRAPHY"],
    overlay: {
      title: "ON-DEMAND",
      titleLine2: "SESSION",
      subtitle: "CUSTOM CLASS",
      subtitleBlock: { width: 253, height: 23 },
      buttonLabel: "CONTACT-US",
      bottomRight: "45 MIN – INTENSITY VARIABLE",
    },
  },
  {
    image: "/REPLAY.png",
    width: 678,
    height: 523,
    imageSide: "left",
    textBlockWidth: 706,
    textBlockHeight: 525,
    lines: ["THE BEAT NEVER STOPS", "NEITHER", "DO", "YOU"],
    overlay: {
      title: "WATCH REPLAY",
      subtitle: "LAST CLASS REPLAY",
      subtitleBlock: { width: 253, height: 23 },
      buttonLabel: "WATCH REPLAY",
      bottomRight: "45 MIN – HIGH INTENSITY",
    },
  },
];

/**
 * Renders a session card: image with halo, and optional overlay (title, subtitle, button, bottom-right label).
 */
function SessionCard({
  src,
  alt,
  width,
  height,
  overlay,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  overlay?: CardOverlay;
}) {
  return (
    <div
      className="relative overflow-hidden flex-shrink-0"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        sizes={`${width}px`}
      />
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/Halo_Lumineux.svg"
          alt=""
          width={280}
          height={200}
          className="absolute top-0 left-0 w-[60%] max-w-[280px] h-auto opacity-90 object-left-top"
          aria-hidden
        />
      </div>
      {overlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-8 pb-16">
          <div
            className="text-center font-display text-[40px] font-bold leading-normal tracking-[4px] uppercase"
            style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
          >
            <p>{overlay.title}</p>
            {overlay.titleLine2 && <p>{overlay.titleLine2}</p>}
          </div>
          <div
            className={`flex flex-col justify-center text-center font-sans font-medium leading-normal tracking-[1.56px] uppercase mt-2 ${overlay.subtitleBlock ? "" : "text-white/90 text-lg"}`}
            style={
              overlay.subtitleBlock
                ? {
                    width: `${overlay.subtitleBlock.width}px`,
                    height: `${overlay.subtitleBlock.height}px`,
                    color: "var(--Primaire-Blanc, #F4F4F4)",
                    fontSize: "15.6px",
                  }
                : undefined
            }
          >
            <p>{overlay.subtitle}</p>
          </div>
          <div className="mt-6 pointer-events-auto">
            <ButtonJOIN>{overlay.buttonLabel}</ButtonJOIN>
          </div>
          <div
            className="absolute bottom-6 right-6 flex flex-col justify-center text-center font-sans font-medium leading-normal tracking-[1.56px] uppercase pointer-events-none"
            style={{
              width: "232px",
              height: "23.282px",
              color: "var(--Primaire-Blanc, #F4F4F4)",
              fontSize: "15.6px",
            }}
          >
            {overlay.bottomRight}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Renders stacked uppercase headline lines; fixed dimensions, center-aligned, Plus Jakarta Sans 48px.
 */
function TextBlock({
  lines,
  width,
  height,
}: {
  lines: string[];
  width: number;
  height: number;
}) {
  return (
    <div
      className="flex flex-shrink-0 flex-col justify-center text-center font-sans text-[48px] font-extrabold leading-normal tracking-[4.8px] uppercase"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        color: "var(--Noir-main, #121212)",
      }}
    >
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

/**
 * Session section: SYNCED SCHEDULE title and three image/text blocks in a staggered grid.
 * Grid ensures image 2 touches the bottom-right of image 1 and the top-left of image 3.
 */
export default function Session() {
  return (
    <section className="flex w-full min-w-0 max-w-[1440px] mx-auto px-[42px] flex-col items-center bg-white overflow-x-hidden">
      <div className="w-full pt-[122px] pb-[122px] flex flex-col items-center">
        <p className="text-center text-black font-sans text-[26px] font-normal tracking-[2.6px] uppercase">
          SYNCED SCHEDULE
        </p>
      </div>
      <div
        className="w-full min-w-0 grid gap-0 overflow-hidden"
        style={{
          gridTemplateColumns: "minmax(0, 678px) minmax(0, 1fr)",
          gridTemplateRows: "525px 525px 523px",
        }}
      >
          <div className="flex min-w-0 items-center justify-center overflow-hidden" style={{ gridColumn: 1, gridRow: 1 }}>
            <SessionCard
              src={ROWS[0].image}
              alt=""
              width={ROWS[0].width}
              height={ROWS[0].height}
              overlay={ROWS[0].overlay}
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden px-8" style={{ gridColumn: 2, gridRow: 1 }}>
            <TextBlock
              lines={ROWS[0].lines}
              width={ROWS[0].textBlockWidth}
              height={ROWS[0].textBlockHeight}
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden" style={{ gridColumn: 1, gridRow: 2 }}>
            <TextBlock
              lines={ROWS[1].lines}
              width={ROWS[1].textBlockWidth}
              height={ROWS[1].textBlockHeight}
            />
          </div>
          <div className="flex min-w-0 items-start justify-start overflow-hidden" style={{ gridColumn: 2, gridRow: 2 }}>
            <SessionCard
              src={ROWS[1].image}
              alt=""
              width={ROWS[1].width}
              height={ROWS[1].height}
              overlay={ROWS[1].overlay}
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden" style={{ gridColumn: 1, gridRow: 3 }}>
            <SessionCard
              src={ROWS[2].image}
              alt=""
              width={ROWS[2].width}
              height={ROWS[2].height}
              overlay={ROWS[2].overlay}
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden px-8" style={{ gridColumn: 2, gridRow: 3 }}>
            <TextBlock
              lines={ROWS[2].lines}
              width={ROWS[2].textBlockWidth}
              height={ROWS[2].textBlockHeight}
            />
          </div>
        </div>
    </section>
  );
}
