interface CardProps {
  image: string;
  header: string;
  title: string;
  description: string;
}

export default function Card({ image, header, title, description }: CardProps) {
  return (
    <div
      className="group relative w-[340px] h-[580px] hover:w-[346px] hover:h-[585px] rounded-[25px] overflow-hidden transition-all duration-300 hover:shadow-[inset_0_4px_1px_0_rgba(255,255,255,0.15)] hover:backdrop-blur-[25px]"
      style={{
        background: `url(${image}) lightgray 50% / cover no-repeat`,
      }}
    >
      {/* Halo lumineux */}
      <svg
        className="absolute inset-0 pointer-events-none w-[167px] h-[222px]"
        xmlns="http://www.w3.org/2000/svg"
        width="340"
        height="580"
        viewBox="0 0 340 580"
        fill="none"
      >
        <g filter="url(#filter0_f_7035_222)">
          <ellipse cx="61" cy="290" rx="84" ry="111" fill="#E8A856" />
        </g>
        <g filter="url(#filter1_f_7035_222)">
          <ellipse cx="88" cy="252.5" rx="121" ry="53.5" fill="#8D5B3E" />
        </g>
        <g filter="url(#filter2_f_7035_222)">
          <ellipse cx="27.5" cy="322" rx="51.5" ry="50" fill="white" />
        </g>
        <g filter="url(#filter3_f_7035_222)">
          <ellipse cx="27.5" cy="322" rx="51.5" ry="50" fill="white" />
        </g>
        <defs>
          <filter
            id="filter0_f_7035_222"
            x="-223"
            y="-21"
            width="568"
            height="622"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_7035_222" />
          </filter>
          <filter
            id="filter1_f_7035_222"
            x="-233"
            y="-1"
            width="642"
            height="507"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_7035_222" />
          </filter>
          <filter
            id="filter2_f_7035_222"
            x="-224"
            y="72"
            width="503"
            height="500"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_7035_222" />
          </filter>
          <filter
            id="filter3_f_7035_222"
            x="-224"
            y="72"
            width="503"
            height="500"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_7035_222" />
          </filter>
        </defs>
      </svg>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 w-[347px] h-[1041px] mix-blend-soft-light pointer-events-none opacity-30"
        style={{
          background: `url(/bruit.png) lightgray 50% / cover no-repeat`,
        }}
      />

      {/* Header */}
      <span className="absolute top-[34px] left-[19px] z-10 flex w-[151.629px] h-[20.172px] flex-col justify-center text-[#F4F4F4] text-center font-sans text-[15.6px] font-light tracking-[1.56px] uppercase">
        {header}
      </span>

      {/* Title */}
      <h3 className="absolute top-[266px] left-0 right-0 z-10 text-[#F4F4F4] text-center font-display text-[40px] group-hover:text-[42px] font-bold tracking-[4px] group-hover:tracking-[4.2px] uppercase transition-all duration-300">
        {title}
      </h3>

      {/* Description */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10 flex w-[297px] h-[102.879px] flex-col justify-center">
        <p className="text-[#F4F4F4] text-center font-sans text-[13.6px] font-medium tracking-[1.36px] uppercase">
          {description}
        </p>
      </div>
    </div>
  );
}
