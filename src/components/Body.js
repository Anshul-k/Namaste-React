import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantsFetch from "../hooks/useRestaurantsFetch";
import { debounce } from "../utils/constants";
import useUpdatedRestaurantsFetch from "../hooks/useUpdatedRestaurantsFetch";
import Hero from "./Hero";
import Offline from "./Offline";
import AllowCORS from "./AllowCORS";

const Body = () => {
  const [UpdatedListOfRestaurants, setUpdatedListOfRestaurants] = useState();
  const UpdatedList = useUpdatedRestaurantsFetch();
  // const listOfRestaurants = useRestaurantsFetch();
  const { resList: listOfRestaurants, error } = useRestaurantsFetch();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();

  const handleSearch = debounce((searchText) => {
    setFilteredRestaurants(
      UpdatedListOfRestaurants.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, 400);

  useEffect(() => {
    setFilteredRestaurants([
      ...(listOfRestaurants || []),
      ...(UpdatedList || []),
    ]);
    setUpdatedListOfRestaurants([
      ...(listOfRestaurants || []),
      ...(UpdatedList || []),
    ]);
  }, [listOfRestaurants, UpdatedList]);

  if (error) {
    return <AllowCORS />;
  }

  if (!onlineStatus) {
    return <Offline />;
  }

  return listOfRestaurants?.length === 0 ? (
    <>
      <Hero />
      <Shimmer />
    </>
  ) : (
    <div className="flex flex-col gap-8 m-4 p-4 justify-center items-center">
      <Hero />
      <div className="flex w-full items-center justify-center">
        <div className="border-2 border-gray-500 p-1 rounded-3xl w-full md:w-1/2 h-12 flex">
          <input
            data-testid="searchBar"
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
