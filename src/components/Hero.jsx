import { useLocation } from "react-router-dom";
import WhatInYourMind from "./WhatInYourMind";
import Feeds from "./Feeds";
import { useContext } from "react";
import { AppContext } from "../features/utils/AppContext";
const Hero = () => {
  const { pathname } = useLocation();
  const { usePageTitle } = useContext(AppContext);
  usePageTitle("Home | IMConnect");
  return (
    <div className="relative h-full w-full rounded-md bg-zinc-100 p-3">
      {pathname !== "/dash/search" && <WhatInYourMind />}
      <Feeds />
    </div>
  );
};

export default Hero;
