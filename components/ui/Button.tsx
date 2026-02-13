interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

export default function ButtonJOIN({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-[190px] h-[60px] px-[27px] justify-center items-center gap-[10px] rounded-[30px] border-2 border-[var(--Primaire-Blanc,#F4F4F4)] bg-transparent transition-colors hover:bg-[var(--Primaire-Blanc,#F4F4F4)] ${className}`}
    >
      <span className="whitespace-nowrap text-[var(--Primaire-Blanc,#F4F4F4)] text-center font-display text-[20px] font-normal tracking-[2px] uppercase transition-colors group-hover:!text-black">
        {children}
      </span>
    </button>
  );
}
