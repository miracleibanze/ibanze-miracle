const Button2 = ({ children, full, onClick, background, className }) => {
  return (
    <div
      className={`${
        className && className
      } tagline mb-4 rounded-md px-4 py-2 font-semibold ${
        full ? "w-full" : "w-max"
      } ${background ? background + " text-color" : "bg-primary"} `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button2;
