import { useState, useEffect } from "react";
import { RES_LIST_URL } from "../utils/constants";

const useRestaurantsFetch = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    const filteredDataValue =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(filteredDataValue);
  };

  return resList;
};

export default useRestaurantsFetch;
