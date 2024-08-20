const ShimmerCard = () => {
  return (
    <div className="flex flex-col w-64 p-4 m-2 shadow-lg rounded-md">
      <div className="shimmerBG rounded-lg w-full h-48"></div>
      <div className="pt-3">
        <div className="shimmerBG h-6 mb-3 rounded-md"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  const numOfCards = 10;

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex m-12 flex-wrap justify-center items-center">
        {Array.from({ length: numOfCards }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
