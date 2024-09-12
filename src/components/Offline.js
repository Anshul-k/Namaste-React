const Offline = () => {
  return (
    <div className="flex justify-center items-center m-6 p-5 h-[40rem]">
      <h1 className="text-3xl text-gray-600 font-extrabold">
        Looks like you are <span className="text-orange-400">Offline</span>...
        Please check your{" "}
        <span className="text-orange-400">Internet Connection</span>
      </h1>
    </div>
  );
};

export default Offline;
