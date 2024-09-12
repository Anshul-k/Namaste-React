import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UPDATE_RES_LIST_URL } from "../utils/constants";

const useUpdatedRestaurantsFetch = () => {
  const payload = useSelector((store) => store.restaurantUpdate.payload);
  const [updatedList, setUpdatedList] = useState([]);

  useEffect(() => {
    updateResData();
  }, []);

  const updateResData = async () => {
    const requestData = {
      lat: 12.9352403,
      lng: 77.624532,
      ...payload,
    };

    try {
      const response = await fetch(UPDATE_RES_LIST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();

      setUpdatedList(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error while fetching the Updated List:", error);
    }
  };

  return updatedList;
};

export default useUpdatedRestaurantsFetch;
