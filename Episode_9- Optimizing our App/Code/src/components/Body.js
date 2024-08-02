import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //* Whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  // To fetch Swiggy Data as per 09-07-2024
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    const filteredDataValue =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(filteredDataValue);
    setFilteredRestaurants(filteredDataValue);
  };

  if (!onlineStatus) {
    return (
      <h1 style={{ paddingTop: "8rem" }}>
        Looks like you are Offline....Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="BodyContainer">
      <div className="filter">
        <div className="Search-conatiner">
          <input
            type="text"
            name="Search"
            className="Search-Input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="Res-Container">
        {filteredRestaurants.map((restaurant) => {
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
