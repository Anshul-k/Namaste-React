import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <img className="w-[35rem]" src={errorImg} alt="error" />
      <div className=" flex flex-col w-full justify-center items-center mt-5">
        <h1 className=" text-orange-400 font-extrabold text-4xl">Ooops !!!</h1>
        <h2 className="text-gray-700 text-3xl font-semibold">
          There was an error
        </h2>
        <h3 className="font-medium text-xl text-gray-500">
          <span className="text-orange-400 mr-2">{error.status}:</span>
          {error.statusText}
        </h3>
        <Link className="link" to="/">
          <button className="w-fit p-2 px-4 mt-3 font-bold text-white bg-orange-400 rounded-lg cursor-pointer transition-all ease-in-out duration-200 active:bg-orange-500 active:transform active:scale-95">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
