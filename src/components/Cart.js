import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Description from "./Description";
import { FOOD_ITEM_URL } from "../utils/constants";
import {
  clearCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../store/cartSlice";
import { Link } from "react-router-dom";
import cart from "../assets/empty-cart.svg";

const Cart = () => {
  const [total, setTotal] = useState();
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatedTotal = cartItems.reduce((sum, item) => {
      return (
        sum +
        ((item?.card?.info?.price || item?.card?.info?.defaultPrice) *
          item.amount) /
          100
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
      <div className="font-bold text-gray-500 text-3xl">Your cart is empty</div>
      <div className="font-semibold text-gray-500 text-base mb-4">
        You can go to home page to view more restaurants
      </div>
      <Link className="link" to="/">
        <button className="w-fit p-2 px-4 font-bold text-white bg-orange-400 rounded-lg cursor-pointer transition-all ease-in-out duration-200 active:bg-orange-500 active:transform active:scale-95">
          See restaurants near you
        </button>
      </Link>
    </div>
  ) : (
    <div className="w-full p-8">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="md:w-1/2 w-full flex justify-between items-center gap-4 mb-4">
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
            <div
              data-testid="cartItem"
              key={item?.card?.info?.id}
              className="md:w-1/2 flex md:flex-row flex-col mt-3 mb-3 gap-3 w-full shadow-md p-3 md:p-0 md:shadow-none"
            >
              <div className="md:w-3/12 flex justify-center items-center">
                <img
                  className="w-36 h-36 rounded-2xl"
                  src={FOOD_ITEM_URL + item?.card?.info?.imageId}
                  alt="menu-item"
                />
              </div>
              <div className="md:w-6/12 w-full md:items-start items-center flex flex-col">
                <h1 className="text-2xl mb-2">{item?.card?.info?.name}</h1>
                <div className="flex w-fit gap-1 bg-orange-400 rounded-md p-1 text-white items-center text-sm mb-2">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating || "4.0"}
                </div>
                <Description foodItem={item?.card?.info?.description} />
              </div>
              <div className="md:w-3/12 flex md:flex-col md:justify-center md:items-end justify-between items-center">
                <div className="flex gap-8 md:gap-5 md:w-2/3 justify-between">
                  <div className="flex text-xl text-gray-600 border-2 rounded-md">
                    <button
                      onClick={() =>
                        dispatch(decrementItem(item?.card?.info?.id))
                      }
                      className={`px-3 py-1 font-extrabold ${
                        item.amount < 2
                          ? "cursor-not-allowed text-gray-300"
                          : "active:transform active:scale-95"
                      }`}
                      disabled={item.amount < 2}
                    >
                      -
                    </button>
                    <p className="px-3 py-1 font-medium text-orange-400 border-r-2 border-l-2">
                      {item.amount}
                    </p>
                    <button
                      onClick={() =>
                        dispatch(incrementItem(item?.card?.info?.id))
                      }
                      className="px-3 py-1 font-extrabold active:transform active:scale-95"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-lg text-orange-400"
                    onClick={() => dispatch(removeItem(item?.card?.info?.id))}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="font-bold md:mt-4 text-lg text-gray-600">
                  ₹
                  {((item?.card?.info?.price ||
                    item?.card?.info?.defaultPrice) *
                    item.amount) /
                    100}
                </div>
              </div>
            </div>
          );
        })}
        <div className="md:w-1/2 flex justify-between items-center md:p-10 p-2 w-full">
          <div className="text-gray-600 font-bold text-2xl">Total</div>
          <div className="text-2xl font-bold text-gray-600">₹{total}</div>
        </div>
        <div>
          <button className="px-2 py-2 bg-orange-400 text-white font-semibold md:text-xl text-base rounded-md shadow hover:bg-orange-600 focus:outline-none focus:ring-2 active:bg-orange-800 transition duration-300 ease-in-out">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
