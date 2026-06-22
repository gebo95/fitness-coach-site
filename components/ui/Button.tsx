import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold px-6 py-3 transition duration-300";

  const styles = {
    primary: "bg-[#00e676] text-black hover:scale-105",
    secondary:
      "border border-white/20 text-white hover:border-[#00e676] hover:text-[#00e676]",
    ghost: "text-white/70 hover:text-white underline underline-offset-4 px-0",
  };

  const combined = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
