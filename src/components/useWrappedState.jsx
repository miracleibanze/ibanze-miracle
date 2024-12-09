import { useState, useEffect } from "react";

export const useWrappedState = () => {
  const [wrapped, setWrapped] = useState(true);
  const [searchBox, setSearchBox] = useState(false);

  useEffect(() => {
    const handleResize = () => setWrapped(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { wrapped, setWrapped, searchBox, setSearchBox };
};

export default useWrappedState;
