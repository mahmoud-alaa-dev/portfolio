import { cn, scrollToSection } from "@/lib/utils";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  size?: "xs" | "sm" | "default" | "lg";
  bg?: "default" | "purple" | "blue" | "cyan";
  children: React.ReactNode;
};

const baseClasses =
  "  cursor-pointer border-0 text-text-primary transition-transform duration-100 ease-in-out rounded-[3px] active:scale-90";

const sizeClasses = {
  xs: "p-1 text-xs",
  sm: "p-2 text-sm",
  default: "px-4 py-2 text-base",
  lg: "px-8 py-4 text-lg",
};

const backgrounds = {
  default: "bg-linear-[135deg] from-accent-purple to-accent-blue",
  purple: "bg-accent-purple",
  blue: "bg-accent-blue",
  cyan: "bg-accent-cyan",
};

const Button = ({
  className = "",
  size = "default",
  bg = "default",
  children,
  ...props
}: ButtonProps) => {
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    backgrounds[bg],
    className,
  );

  return (
    <button
      className={classes}
      {...props}
      onClick={() => scrollToSection("contact")}
    >
      {children}
    </button>
  );
};

export default Button;
