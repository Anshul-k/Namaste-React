import { useState, useEffect } from "react";

const useUserDataFetch = (url) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setUserData(json);
  };

  return userData;
};

export default useUserDataFetch;
