import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute z-10 -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none md:block lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute z-10 -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none md:block lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
