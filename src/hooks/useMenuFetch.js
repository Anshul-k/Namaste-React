import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useMenuFetch = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenuData();
  }, []);

  const fetchResMenuData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useMenuFetch;
