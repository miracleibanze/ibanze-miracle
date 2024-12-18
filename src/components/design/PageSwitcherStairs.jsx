const PageSwitcherStairs = () => {
  return (
    <div
      className={`stairs pointer-events-none fixed inset-0 bottom-0 left-0 right-0 z-[9999] flex flex-row-reverse place-content-end items-end justify-between`}
    >
      {Array(5)
        .fill("")
        .map((item, index) => (
          <div
            className={`stair-${index} light-bg overflow-hiddden text-reverse relative flex w-[20vw] items-center overflow-hidden text-[4vw]`}
            key={index}
          />
        ))}
    </div>
  );
};

export default PageSwitcherStairs;
