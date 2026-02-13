import Image from "next/image";
import ButtonJOIN from "@/components/ui/Button";

type CardOverlay = {
  title: string;
  titleLine2?: string;
  subtitle: string;
  subtitleBlock?: { width: number; height: number };
  buttonLabel: string;
  bottomRight: string;
};

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
    image: "/CARD_SESSION.jpg",
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
    image: "/ON_DEMANDE.jpg",
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
    image: "/REPLAY2.jpg",
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

function SessionCard({
  src,
  alt,
  width,
  height,
  overlay,
  imageLiftOnHover = false,
  overlayZoomOnHover = false,
  hoverReplaceImageSrc,
  fillContainer = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  overlay?: CardOverlay;
  imageLiftOnHover?: boolean;
  overlayZoomOnHover?: boolean;
  hoverReplaceImageSrc?: string;
  fillContainer?: boolean;
}) {
  const imageClass = imageLiftOnHover
    ? "object-cover w-full h-full scale-105 transition-transform duration-500 ease-out group-hover:translate-y-4"
    : "object-cover w-full h-full";

  const hasGroup = imageLiftOnHover || overlayZoomOnHover || Boolean(hoverReplaceImageSrc);

  const rootClass = fillContainer
    ? `relative overflow-hidden flex-shrink-0 w-full h-full min-w-0 ${hasGroup ? "group" : ""}`
    : `relative overflow-hidden flex-shrink-0 ${hasGroup ? "group" : ""}`;

  const rootStyle = fillContainer ? undefined : { width: `${width}px`, height: `${height}px` };

  return (
    <div className={rootClass} style={rootStyle}>
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageClass}
          sizes={`${width}px`}
        />
        {hoverReplaceImageSrc && (
          <Image
            src={hoverReplaceImageSrc}
            alt=""
            width={width}
            height={height}
            className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            sizes={`${width}px`}
            aria-hidden
          />
        )}
      </div>
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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
          <div
            className={`text-center font-display text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-normal tracking-[4px] uppercase ${overlayZoomOnHover ? "transition-transform duration-300 ease-out group-hover:scale-105" : ""}`}
            style={{ color: "var(--Primaire-Blanc, #F4F4F4)" }}
          >
            <p>{overlay.title}</p>
            {overlay.titleLine2 && <p>{overlay.titleLine2}</p>}
          </div>
          <div
            className={`flex flex-col justify-center text-center font-sans font-medium leading-normal tracking-[1.56px] uppercase mt-2 ${overlay.subtitleBlock ? "" : "text-white/90 text-base sm:text-lg"} ${overlayZoomOnHover ? "transition-transform duration-300 ease-out group-hover:scale-[1.02] session-subtitle-glitch" : ""}`}
            style={
              overlay.subtitleBlock
                ? {
                    maxWidth: "100%",
                    color: "var(--Primaire-Blanc, #F4F4F4)",
                    fontSize: "clamp(13px, 2.5vw, 15.6px)",
                  }
                : undefined
            }
          >
            <p>{overlay.subtitle}</p>
          </div>
          <div className="mt-4 sm:mt-6 pointer-events-auto">
            <ButtonJOIN>{overlay.buttonLabel}</ButtonJOIN>
          </div>
          <div
            className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col justify-center text-right font-sans font-medium leading-normal tracking-[1.56px] uppercase pointer-events-none max-w-[180px] sm:max-w-[232px]"
            style={{
              color: "var(--Primaire-Blanc, #F4F4F4)",
              fontSize: "clamp(12px, 2.5vw, 15.6px)",
            }}
          >
            {overlay.bottomRight}
          </div>
        </div>
      )}
    </div>
  );
}

function TextBlock({
  lines,
}: {
  lines: string[];
  width: number;
  height: number;
}) {
  return (
    <div
      className="flex flex-shrink-0 flex-col justify-center text-center font-sans text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-normal tracking-[3px] sm:tracking-[4.8px] uppercase w-full max-w-full lg:max-w-[706px] min-h-[200px] sm:min-h-[280px] lg:min-h-0 py-10 sm:py-12 lg:py-0 px-4 lg:px-8"
      style={{ color: "var(--Noir-main, #121212)" }}
    >
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

export default function Session() {
  return (
    <section className="flex w-full min-w-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] flex-col items-center bg-white overflow-x-hidden">
      <div className="w-full pt-16 sm:pt-20 lg:pt-[122px] pb-12 sm:pb-16 lg:pb-[122px] flex flex-col items-center">
        <p className="text-center text-black font-sans text-[20px] sm:text-[22px] lg:text-[26px] font-normal tracking-[2.6px] uppercase">
          SYNCED SCHEDULE
        </p>
      </div>
      <div
        className="w-full min-w-0 flex flex-col gap-0 lg:grid lg:grid-cols-[minmax(0,678px)_1fr] lg:grid-rows-[525px_525px_523px] overflow-hidden"
      >
          <div className="relative w-full aspect-[678/525] lg:aspect-auto lg:h-full flex min-w-0 items-center justify-center overflow-hidden lg:col-start-1 lg:row-start-1">
            <SessionCard
              src={ROWS[0].image}
              alt=""
              width={ROWS[0].width}
              height={ROWS[0].height}
              overlay={ROWS[0].overlay}
              imageLiftOnHover
              overlayZoomOnHover
              fillContainer
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden px-4 lg:px-8 lg:col-start-2 lg:row-start-1">
            <TextBlock
              lines={ROWS[0].lines}
              width={ROWS[0].textBlockWidth}
              height={ROWS[0].textBlockHeight}
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden px-4 lg:px-8 lg:col-start-1 lg:row-start-2">
            <TextBlock
              lines={ROWS[1].lines}
              width={ROWS[1].textBlockWidth}
              height={ROWS[1].textBlockHeight}
            />
          </div>
          <div className="relative w-full aspect-[678/525] lg:aspect-auto lg:h-full flex min-w-0 items-center justify-center overflow-hidden lg:col-start-2 lg:row-start-2">
            <SessionCard
              src={ROWS[1].image}
              alt=""
              width={ROWS[1].width}
              height={ROWS[1].height}
              overlay={ROWS[1].overlay}
              imageLiftOnHover
              overlayZoomOnHover
              fillContainer
            />
          </div>
          <div className="relative w-full aspect-[678/523] lg:aspect-auto lg:h-full flex min-w-0 items-center justify-center overflow-hidden lg:col-start-1 lg:row-start-3">
            <SessionCard
              src={ROWS[2].image}
              alt=""
              width={ROWS[2].width}
              height={ROWS[2].height}
              overlay={ROWS[2].overlay}
              overlayZoomOnHover
              imageLiftOnHover
              fillContainer
            />
          </div>
          <div className="flex min-w-0 items-center justify-center overflow-hidden px-4 lg:px-8 lg:col-start-2 lg:row-start-3">
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
