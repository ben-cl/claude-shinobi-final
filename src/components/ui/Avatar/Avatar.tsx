interface AvatarProps {
  name: string | undefined | null;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function Avatar({ name, size = "md", className = "" }: AvatarProps) {
  const getInitial = (name: string | undefined | null): string => {
    if (!name) return "?";
    const trimmedName = name.trim();
    if (trimmedName.length === 0) return "?";
    return trimmedName.charAt(0).toUpperCase();
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  };

  const baseClasses =
    "bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold";

  const avatarClass = [baseClasses, sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={avatarClass} role="img" aria-label={`Avatar for ${name}`}>
      {getInitial(name)}
    </div>
  );
}

export default Avatar;
