export const CDN_URL = "https://media-assets.swiggy.com/swiggy/";

export const GIT_URL = "https://api.github.com/users/Anshul-k";

export const GIT_URL_REPOS = "https://api.github.com/users/Anshul-k/repos";

export const FOOD_ITEM_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const RES_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=";

export const RES_LIST_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// export const RES_LIST_URL =
//   "https://namaste-react-backend.onrender.com/api/restaurants?lat=12.9352403&lng=77.624532";

export const UPDATE_RES_LIST_URL =
  "https://namaste-react-backend.onrender.com/api/restaurants/update";

export const debounce = (func, delay) => {
  let debounceTimer;
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
