
interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({
  className = "",
  variant = "dark",
}: LogoProps) {
  const textColor =
    variant === "light" ? "text-[#F8FAF8]" : "text-[#183B29]";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${textColor} ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="6" width="8" height="8" rx="2" fill="#20B96B" />
        <rect x="10" y="0" width="8" height="8" rx="2" fill="#20B96B" opacity="0.7" />
        <rect x="10" y="12" width="8" height="8" rx="2" fill="currentColor" />
      </svg>

      <span className="font-display text-lg font-bold tracking-tight">
        RaveWebs
      </span>
    </span>
  );
}
