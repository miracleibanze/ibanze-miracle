const ListSkeleton = ({ message }) => {
  return (
    <div className="absolute inset-0 bg-zinc-100 p-3 rounded-md skeleton-loader">
      <div
        className={`w-full ${message ? 'h-16' : 'h-9'} rounded-md mb-4 skeleton-loader`}
      />
      <div
        className={`w-full ${message ? 'h-16' : 'h-9'} rounded-md mb-4 skeleton-loader`}
      />
      <div
        className={`w-full ${message ? 'h-16' : 'h-9'} rounded-md mb-4 skeleton-loader`}
      />
      <div
        className={`w-full ${message ? 'h-16' : 'h-9'} rounded-md mb-4 skeleton-loader`}
      />
      <div
        className={`w-full ${message ? 'h-16' : 'h-9'} rounded-md mb-4 skeleton-loader`}
      />
    </div>
  );
};

export default ListSkeleton;
