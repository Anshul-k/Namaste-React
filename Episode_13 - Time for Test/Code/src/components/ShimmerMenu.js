const ShimmerMenuItem = () => {
  return (
    <div className="mt-2 flex p-2">
      <div className="w-11/12">
        <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md"></div>
        <div className="shimmerBG h-6 mb-3 rounded-md"></div>
      </div>
      <div className="shimmerBG rounded-3xl min-w-40 m-3"></div>
    </div>
  );
};

const ShimmerMenu = () => {
  return (
    <div className="flex flex-wrap w-full gap-4 p-8 justify-center">
      <div className="w-3/6 flex flex-col gap-8">
        <div className="flex flex-row h-full min-h-56 w-full rounded-2xl shadow-lg">
          <div className="shimmerBG rounded-3xl min-w-40 m-8"></div>
          <div className="w-full mt-8 ml-4 mb-2 mr-4">
            <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
            <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
            <div className="shimmerBG h-6 mb-3 rounded-md w-2/5"></div>
            <div className="shimmerBG h-6 mb-3 rounded-md"></div>
            <div className="shimmerBG h-6 mb-3 rounded-md"></div>
          </div>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ShimmerMenuItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
