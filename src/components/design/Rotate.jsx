import { useEffect } from "react";

const Rotate = ({ index, children }) => {
  return (
    <div
      className={`absolute sm:h-[4rem] h-[3.4rem] origin-left flex place-content-end  w-1/2 rotate-${index}`}
    >
      {children}
    </div>
  );
};

export default Rotate;
