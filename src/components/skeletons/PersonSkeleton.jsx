const PersonSkeleton = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 max-h-full flex flex-col p-3 rounded-md bg-zinc-100 skeleton-loader">
        <div className="w-full min-h-[20rem] max-h-[20rem] mb-4 rounded-md skeleton-loader bg-zinc-200" />
        <div className="w-1/2 min-h-12 max-h-12 mb-4 rounded-md skeleton-loader bg-zinc-200" />
        <div className="w-full min-h-12 max-h-12 mb-4 rounded-md skeleton-loader bg-zinc-200" />
        <div className="w-full flex gap-x-3 min-h-full max-h-full rounded-md bg-zinc-100">
          <div className="w-1/3 min-h-full max-h-full mb-4 rounded-md skeleton-loader bg-zinc-200" />
          <div className="w-2/3 min-h-full max-h-full flex flex-col rounded-md">
            <div className="w-1/3 min-h-12 max-h-12 mb-4 rounded-md skeleton-loader bg-zinc-200" />
            <div className="w-1/2 min-h-12 max-h-12 mb-4 rounded-md skeleton-loader bg-zinc-200" />
            <div className="w-full min-h-full max-h-full mb-4 rounded-md skeleton-loader bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonSkeleton;
