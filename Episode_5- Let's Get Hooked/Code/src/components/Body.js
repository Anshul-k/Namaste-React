import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  // const arr = useState(restaurantList);
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  return (
    <div className="BodyContainer">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredlist = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestaurants(filteredlist);
          console.log(arr);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="Res-Container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
