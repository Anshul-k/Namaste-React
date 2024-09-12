import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useMenuFetch from "../hooks/useMenuFetch";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const { resid, cloudinaryimageid } = useParams();
  const resInfo = useMenuFetch(resid);
  const [showItemCard, setShowItemCard] = useState(0);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        const itemType = item?.card?.card?.["@type"];
        return (
          itemType ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          itemType ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );

  return resInfo === null ? (
    <ShimmerMenu />
  ) : (
    <div className="flex flex-col md:justify-center md:items-center">
      <div className="flex md:w-1/2 mt-8 shadow-md rounded-lg p-3">
        <img
          className="w-40 h-32 m-4 rounded-lg"
          src={
            CDN_URL +
            (cloudinaryimageid?.includes("^")
              ? cloudinaryimageid?.replace(/\^/g, "/")
              : cloudinaryimageid)
          }
          alt="Res-Profile"
        />
        <div className="w-full">
          <h1 className="pb-4 font-serif text-gray-700 text-4xl">
            {resInfo?.cards[0]?.card?.card?.text}
          </h1>
          <div className="flex gap-4 mb-3 items-center">
            <div className="text-lg">
              <div className="flex gap-1 bg-orange-400 rounded-md p-1 text-white items-center text-sm">
                <i className="fa fa-star" aria-hidden="true"></i>
                {resInfo?.cards[2]?.card?.card?.info?.avgRating.toFixed(1)}
              </div>
            </div>
            <div className="text-black font-medium">
              {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </div>
          </div>
          <div className="mb-1">
            {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </div>
          <hr className="text-gray-900 opacity-50" />
          <div className="mt-1">
            {resInfo?.cards[2]?.card?.card?.info?.areaName} --{" "}
            {resInfo?.cards[2]?.card?.card?.info?.expectationNotifiers[0]?.text
              ?.replace("<b>", "")
              ?.replace("</b>", "")}
          </div>
        </div>
      </div>
      <div className="p-8 md:w-1/2">
        {categories?.map((category, index) => {
          return (
            <div key={index}>
              {category?.card?.card?.title &&
                category?.card?.card?.title != "Top Picks" && (
                  <>
                    {/* Controlled Component */}
                    <RestaurantMenuItem
                      numberOfItems={
                        category?.card?.card?.itemCards?.length ||
                        category?.card?.card?.categories?.flatMap(
                          (category) => category.itemCards
                        )?.length
                      }
                      title={category?.card?.card?.title}
                      open={index === showItemCard && true}
                      showItemCard={() => {
                        showItemCard === index
                          ? setShowItemCard(null)
                          : setShowItemCard(index);
                      }}
                      foodItems={
                        category?.card?.card?.itemCards ||
                        category?.card?.card?.categories?.flatMap(
                          (category) => category.itemCards
                        )
                      }
                    />
                    <hr
                      className="bg-stone-200 h-4"
                      style={{
                        border: "2rem",
                      }}
                    />
                  </>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
