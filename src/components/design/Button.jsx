import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  underline,
  white,
  zIndex,
  full,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-4 px-4 ${
    white ? "text-zinc-900" : ""
  } ${className || ""} ${full && "w-full"}`;

  const spanClasses = `relative py-1 ${underline && "navLink-Underline"} ${
    zIndex ? zIndex : "z-10"
  } ${white && "bg-white -my-3 py-3 -mx-2 px-3 rounded-tr-2xl"}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} download className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
