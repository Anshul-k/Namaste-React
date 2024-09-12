import React from "react";
import chefImg from "../assets/chef.png";
import superChef from "../assets/superChef.webp";
import onlineOrder from "../assets/onlineOrder.webp";
import organisedFoodhutPlace from "../assets/organisedFoodhutPlace.webp";
import cleanKitchen from "../assets/cleanKitchen.webp";
import Service from "../assets/247Service.webp";
import preReservation from "../assets/preReservation.webp";
import getItOnGooglePlay from "../assets/getItOnGooglePlay.svg";
import getItOnAppStore from "../assets/getItOnAppStore.svg";

const Hero = () => {
  return (
    <div className="flex w-full lg:flex-row flex-col justify-center p-4">
      <img src={chefImg} className="lg:max-h-[40.5rem]" alt="chef-image" />
      <div className="flex flex-col justify-center p-4 md:pl-8 lg:w-1/2">
        <h2 className="font-bold text-orange-400 text-base md:text-2xl">
          BiteBuddy
        </h2>
        <h4 className="font-semibold text-xl md:text-6xl text-gray-600">
          Your Trusted <span className="text-orange-400">Partner </span>
          for Food Delivery
        </h4>
        <p className="font-medium text-xl mt-2 text-gray-500">
          A place where you can enjoy meals, drinks, and light refreshments like
          pastries and snacks.
        </p>
        <div className="w-full justify-center flex md:flex-row flex-col md:gap-8 gap-3 mt-2">
          <div className="flex flex-col gap-1 text-orange-400 font-semibold">
            <p className="flex gap-2">
              <img src={onlineOrder} alt="Online Order" className="w-5 h-5" />
              Online Order
            </p>
            <p className="flex gap-2">
              <img
                src={preReservation}
                alt="Pre-Reservation"
                className="w-5 h-5"
              />
              Pre-Reservation
            </p>
            <p className="flex gap-2">
              <img src={superChef} alt="Super Chef" className="w-5 h-5" />
              Super Chef
            </p>
          </div>
          <div className="flex flex-col gap-1 text-orange-400 font-semibold">
            <p className="flex gap-2">
              <img src={Service} alt="24/7 Service" className="w-5 h-5" />
              24/7 Service
            </p>
            <p className="flex gap-2">
              <img
                src={organisedFoodhutPlace}
                alt="Organized Foodhut Place"
                className="w-5 h-5"
              />
              Organized Foodhut Place
            </p>
            <p className="flex gap-2">
              <img src={cleanKitchen} alt="Clean Kitchen" className="w-5 h-5" />
              Clean Kitchen
            </p>
          </div>
        </div>
        <div className="flex flex-col md:mt-6 mt-3">
          <h2 className="font-semibold text-gray-500">
            Placing an Order is Now more convenient with Our Mobile App. Just
            download a leading delivery app, set up your account, and see why
            most companies are turning to mobile apps for food delivery
          </h2>
          <div className="flex w-full justify-center mt-2 gap-4">
            <button>
              <img
                src={getItOnGooglePlay}
                alt="get it on google play"
                className="rounded-md shadow-md"
              />
            </button>
            <button>
              <img
                src={getItOnAppStore}
                alt="get it on Apple store"
                className="rounded-md shadow-md"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
