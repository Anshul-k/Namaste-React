import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Description } from "./RestaurantMenu";
import { FOOD_ITEM_URL } from "../utils/constants";
import { clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import cart from "../assets/empty-cart.svg";

const Cart = () => {
  const [total, setTotal] = useState();
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatedTotal = cartItems.reduce((sum, item) => {
      return (
        sum + (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
      );
    }, 0);
    setTotal(calculatedTotal);
  }, [cartItems]);

  const handleClear = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div className="flex w-full flex-col justify-center items-center my-auto h-[80vh]">
      <img className="w-80 h-80 mb-6" src={cart} alt="empty-cart" />
      <div className="font-bold text-gray-500 text-3xl mb-4">
        The cart is empty, please select an item first...
      </div>
      <Link className="link" to="/">
        <button className="w-fit p-2 px-4 font-bold text-white bg-orange-400 rounded-lg cursor-pointer transition-all ease-in-out duration-200 active:bg-orange-500 active:transform active:scale-95">
          Home
        </button>
      </Link>
    </div>
  ) : (
    <div className="w-full p-8">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="w-1/2 flex justify-between items-center mb-4">
          <div className="text-gray-600 font-bold text-2xl">Checkout</div>
          <button
            onClick={handleClear}
            className="text-base font-semibold text-orange-400 hover:text-orange-600"
          >
            Clear
          </button>
        </div>
        {cartItems.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="w-1/2 flex mt-3 mb-3">
              <div className="w-3/12 flex justify-center items-center">
                <img
                  className="w-36 h-36 rounded-2xl"
                  src={FOOD_ITEM_URL + item?.card?.info?.imageId}
                  alt="menu-item"
                />
              </div>
              <div className="w-7/12 flex flex-col">
                <h1 className="text-2xl mb-2">{item?.card?.info?.name}</h1>
                <div className="flex w-fit gap-1 bg-orange-400 rounded-md p-1 text-white items-center text-sm mb-2">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating || "4.0"}
                </div>
                <Description foodItem={item?.card?.info?.description} />
              </div>
              <div className="w-2/12 flex justify-end items-center">
                <div className="font-bold mb-1 text-lg text-gray-600">
                  ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-1/2 flex justify-between items-center p-10">
          <div className="text-gray-600 font-bold text-2xl">Total</div>
          <div className="text-2xl font-bold text-gray-600">₹{total}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
