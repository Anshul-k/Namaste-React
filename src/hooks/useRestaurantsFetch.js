import { useState, useEffect } from "react";
import { RES_LIST_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addData } from "../store/restaurantUpdateSlice";

const useRestaurantsFetch = () => {
  const dispatch = useDispatch();
  const [resList, setResList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_LIST_URL);

      if (!data.ok) {
        throw new Error("Failed to fetch restaurant data");
      }

      const json = await data.json();
      const filteredDataValue =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResList(filteredDataValue);

      dispatch(
        addData({
          csrfToken: json?.csrfToken,
          nextOffset: json?.data?.pageOffset?.nextOffset,
          widgetOffset: json?.data?.pageOffset?.widgetOffset,
        })
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return { resList, error };
};

export default useRestaurantsFetch;
