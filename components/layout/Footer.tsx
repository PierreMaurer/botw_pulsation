import Link from "next/link";

const NAV_COL_1 = [
  { label: "SESSIONS", href: "#" },
  { label: "ON-DEMAND", href: "#" },
  { label: "COACHES", href: "#" },
  { label: "PRICING", href: "#" },
];

const NAV_COL_2 = [
  { label: "GET STARTED", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "CONTACT", href: "#" },
  { label: "TERMS OF SERVICE", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-[42px] pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center pt-0">
            <div
              className="flex flex-shrink-0 flex-col justify-center text-center font-display text-[102.6px] font-normal leading-normal tracking-[10.26px] uppercase"
              style={{
                width: "366px",
                height: "83px",
                color: "var(--Noir-main, #121212)",
              }}
            >
              SYNC
            </div>
            <div
              className="mt-6 flex h-[30px] w-full flex-col justify-center self-stretch text-center font-sans text-[20px] font-semibold leading-normal tracking-[2px] uppercase"
              style={{ color: "var(--Primaire-Noir, #1A1A1B)" }}
            >
              READY TO JOIN THE MOVEMENT?
            </div>
            <button
              type="button"
              className="mt-4 flex w-[190px] h-[60px] px-[27px] justify-center items-center gap-[10px] rounded-[30px] border-2 border-[var(--Primaire-Noir,#1A1A1B)] bg-transparent font-display text-[20px] font-normal tracking-[2px] uppercase text-[var(--Primaire-Noir,#1A1A1B)] transition-colors hover:bg-black hover:text-white"
            >
              JOIN SYNC
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col flex-1 items-end">
            <div className="flex w-full max-w-[500px] flex-1 md:justify-end">
              <nav className="w-1/4 flex flex-col gap-4">
                {NAV_COL_1.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex h-[30px] flex-shrink-0 flex-col justify-center self-stretch text-center font-sans text-[16px] font-normal leading-normal tracking-[1.6px] uppercase text-black hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <nav className="w-3/4 flex flex-col gap-4">
                {NAV_COL_2.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex h-[30px] flex-shrink-0 flex-col justify-center self-stretch text-center font-sans text-[16px] font-normal leading-normal tracking-[1.6px] uppercase text-black hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex w-full justify-end pt-8 pb-4">
              <div
                className="flex h-[30px] w-[443px] flex-shrink-0 flex-col justify-center text-center font-sans text-[11px] font-light leading-normal tracking-[1.1px] uppercase text-black"
              >
                © 2026 SYNC STUDIO. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
