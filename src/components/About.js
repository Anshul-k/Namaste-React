import React from "react";
import User from "./User";
import BITE_BUDDY from "../assets/food.svg";

const About = () => {
  return (
    <div className="flex flex-grow md:flex-row flex-col w-full p-4 gap-4 md:gap-0">
      <div className="md:w-1/2 md:my-20 mx-4 flex flex-col flex-wrap justify-center items-center md:rounded-2xl md:shadow-gray-400 md:shadow-md p-3">
        <img className="w-96" src={BITE_BUDDY} alt="bite-buddy" />
        <div className="md:w-2/3 mt-4 md:mt-8 text-center">
          <h1 className="font-bold text-2xl text-orange-400">
            Savor the taste, delivered with love
          </h1>
          <p className="mt-2 font-medium text-gray-400">
            At BiteBuddy we bring your favorite flavors right to your doorstep,
            offering a delicious variety of dishes crafted to satisfy every
            craving.
          </p>
        </div>
      </div>
      <hr className="text-gray-500 md:hidden w-full" />
      <div className="font-bold text-2xl text-orange-600 md:hidden w-full text-center">
        About Me
      </div>
      <div className="md:w-1/2 md:my-20 mx-4 flex justify-center items-center rounded-2xl md:shadow-gray-400 md:shadow-md p-3">
        <User />
      </div>
    </div>
  );
};

export default About;
