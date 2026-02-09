interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

export default function ButtonJOIN({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-[190px] h-[60px] px-[27px] justify-center items-center gap-2.5 rounded-[30px] border-2 border-[#F4F4F4] bg-transparent transition-colors hover:bg-[#F4F4F4] ${className}`}
    >
      <span className="text-white text-center font-display text-[20px] font-normal tracking-[2px] uppercase transition-colors group-hover:text-black">
        {children}
      </span>
    </button>
  );
}
