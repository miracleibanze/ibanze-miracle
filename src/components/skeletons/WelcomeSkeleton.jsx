const WelcomeSkeleton = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-zinc-200 p-4 rounded-md overflow-hidden">
      <div className="w-full h-[4rem] bg-gray-100 mb-4 rounded-md skeleton-loader"></div>

      <div className="w-full h-full flex gap-4 rounded-md">
        <div className="w-[15rem] h-full bg-gray-100 p-4 sm:flex flex-col justify-between rounded-md skeleton-loader hidden">
          <div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
          </div>
          <div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
          </div>
          <div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
            <div className="w-full h-6 mb-4 rounded-md skeleton-loader"></div>
          </div>
        </div>

        <div className="w-full h-full bg-gray-100 flex flex-col p-3 rounded-md" />

        <div className="w-[15rem] h-full hidden xl:flex bg-gray-100 rounded-md skeleton-loader"></div>
      </div>
    </div>
  );
};

export default WelcomeSkeleton;
