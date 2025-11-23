interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "black"
    | "white";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-xl font-bold cursor-pointer transition-all duration-150 outline-none active:translate-y-[4px] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:translate-y-0";

  const variantClasses = {
    primary: "bg-primary text-white shadow-[0_6px_0_0_rgb(140,80,200,0.8)] active:shadow-none hover:brightness-110",
    secondary:
      "bg-secondary text-white dark:text-black shadow-[0_6px_0_0_rgb(50,50,50,0.8)] active:shadow-none hover:brightness-110",
    success: "bg-success text-white shadow-[0_6px_0_0_rgb(34,197,94,0.6)] active:shadow-none hover:brightness-110",
    warning: "bg-warning text-white shadow-[0_6px_0_0_rgb(251,146,60,0.6)] active:shadow-none hover:brightness-110",
    danger: "bg-danger text-white shadow-[0_6px_0_0_rgb(239,68,68,0.6)] active:shadow-none hover:brightness-110",
    black: "bg-black text-white shadow-[0_6px_0_0_rgb(0,0,0,0.4)] active:shadow-none hover:brightness-110",
    white: "bg-white text-black shadow-[0_6px_0_0_rgb(0,0,0,0.2)] active:shadow-none hover:brightness-90",
  };

  const buttonClass = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
