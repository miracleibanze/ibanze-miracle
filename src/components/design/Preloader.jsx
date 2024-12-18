import { blackSpinnerSvg, spinnerSvg } from "../../assets";

const Preloader = () => {
  return (
    <div className="flex-1 absolute inset-0 flex flex-col gap-2 items-center justify-center ">
      <div
        className="bg-contain hidden dark:flex show-content bg-center h-8 aspect-square rounded-full animate-spin"
        style={{ backgroundImage: `url(${spinnerSvg})` }}
      />
      <div
        className="bg-contain dark:hidden bg-center hide-content h-8 aspect-square rounded-full animate-spin"
        style={{ backgroundImage: `url(${blackSpinnerSvg})` }}
      />
    </div>
  );
};

export default Preloader;
