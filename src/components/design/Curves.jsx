import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute bottom-0 left-full lg:w-[15rem] w-[10rem] -translate-x-8 pointer-events-none sm:block">
      <img src={curve2} width={162} height={76} alt="curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="absolute top-4 hidden left-0 -translate-x-1/2 lg:w-[14rem] w-[10rem] -mt-1 mr-10 pointer-events-none sm:block">
      <img src={curve1} width={522} height={189} alt="Curve 1" />
    </div>
  );
};
