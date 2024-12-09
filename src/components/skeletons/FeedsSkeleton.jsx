const FeedsSkeleton = () => {
  return (
    <div className="absolute inset-0 bg-gray-100 flex flex-col p-3 rounded-md">
      <div className="w-full h-[4rem] mb-4 rounded-md skeleton-loader"></div>
      <div className="w-full h-full bg-gray-100 p-4 rounded-md flex flex-col">
        <div className="w-1/2 h-[3rem] mb-4 rounded-md skeleton-loader"></div>
        <div className="w-full h-full bg-gray-100 mb-4 flex flex-col p-4 rounded-md skeleton-loader">
          <div className="w-1/2 h-[3rem] mb-4 rounded-md skeleton-loader"></div>
          <div className="w-full h-full rounded-md skeleton-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedsSkeleton;
