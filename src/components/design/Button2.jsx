const Button2 = ({ children, full, onClick, background, className }) => {
  return (
    <div
      className={`${
        className && className
      } tagline px-4 py-2 rounded-md text-black font-semibold mb-4 ${
        full ? "w-full" : "w-max"
      } ${background ? background + " text-color" : "bg-primary"} `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button2;
