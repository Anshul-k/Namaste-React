import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantsFetch from "../hooks/useRestaurantsFetch";
import { debounce } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const listOfRestaurants = useRestaurantsFetch();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleSearch = debounce((searchText) => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, 400);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  return !onlineStatus ? (
    <h1 style={{ paddingTop: "8rem" }}>
      Looks like you are Offline....Please check your internet connection.
    </h1>
  ) : listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-8 m-4 p-4 justify-center items-center">
      <div className="flex w-full items-center justify-center">
        <div className="border-2 border-gray-500 p-1 rounded-3xl w-full md:w-1/2 h-12 flex">
          <input
            type="text"
            name="Search"
            className="mx-4 w-full outline-none"
            placeholder="Search here for Restaurants...."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          <button className="text-2xl px-6 pb-2 text-gray-500 cursor-pointer hover:text-orange-300">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="ml-4 border-2 border-gray-600 p-2 rounded-3xl">
          <input
            className="outline-none"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {filteredRestaurants?.map((restaurant) => {
          return (
            restaurant?.info?.cloudinaryImageId && (
              <Link
                className="link"
                key={restaurant?.info?.id}
                to={`/restaurants/${restaurant.info.id}/${
                  restaurant?.info?.cloudinaryImageId?.includes("/")
                    ? restaurant?.info?.cloudinaryImageId.replace(/\//g, "^")
                    : restaurant?.info?.cloudinaryImageId
                }`}
              >
                <RestaurantCard resData={restaurant.info} />
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Body;
