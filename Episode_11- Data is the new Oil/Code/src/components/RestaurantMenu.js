import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL, FOOD_ITEM_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useMenuFetch from "../hooks/useMenuFetch";

const Description = ({ foodItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
      setIsTruncated(true);
    }
  }, [foodItem]);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-gray-700 font-sans flex flex-wrap items-end w">
      <div
        ref={contentRef}
        style={{
          wordBreak: "break-all",
          width: "fit-content",
          maxHeight: isExpanded ? "none" : "3rem",
          overflow: "hidden",
        }}
        className={isExpanded ? "" : "truncated"}
      >
        {foodItem}
      </div>
      {isTruncated && !isExpanded && (
        <div
          className="border-0 bg-none cursor-pointer text-gray-700 font-bold leading-4"
          onClick={toggleContent}
        >
          more
        </div>
      )}
    </div>
  );
};

const MenuItemCard = ({
  open,
  children,
  title,
  numberOfItems,
  showItemCard,
}) => {
  return (
    <div className="flex flex-col w-full my-2" onClick={showItemCard}>
      <div className="flex justify-between cursor-pointer">
        <h3 className="text-2xl font-bold text-gray-500">
          {title} ({numberOfItems})
        </h3>
        <button className="no-underline border-0 w-16 h-8" type="button">
          {!open ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

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
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-1/2 mt-8 shadow-md rounded-lg p-3">
        <img
          className="w-40 h-32 m-4 rounded-lg"
          src={
            CDN_URL +
            (cloudinaryimageid.includes("^")
              ? cloudinaryimageid.replace(/\^/g, "/")
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
                <i class="fa fa-star" aria-hidden="true"></i>
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
              .replace("<b>", "")
              .replace("</b>", "")}
          </div>
        </div>
      </div>
      <div className="p-8 w-1/2">
        {categories?.map((category, index) => {
          return (
            <div key={index}>
              {category?.card?.card?.title &&
                category?.card?.card?.title != "Top Picks" && (
                  <>
                    {/* Controlled Component */}
                    <MenuItemCard
                      numberOfItems={category?.card?.card?.itemCards?.length}
                      title={category?.card?.card?.title}
                      open={index === showItemCard && true}
                      showItemCard={() => {
                        showItemCard === index
                          ? setShowItemCard(null)
                          : setShowItemCard(index);
                      }}
                    >
                      {(
                        category?.card?.card?.itemCards ||
                        category?.card?.card?.categories?.flatMap(
                          (category) => category.itemCards
                        )
                      )?.map((foodItem) => {
                        return (
                          <div key={foodItem?.card?.info?.id}>
                            <div className="mt-8 flex w-full justify-between">
                              <div className="w-9/12 flex flex-col">
                                <div>
                                  {foodItem?.card?.info?.isVeg ? (
                                    <img
                                      className="w-6"
                                      src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000"
                                      alt="veg-nonveg"
                                    />
                                  ) : (
                                    <img
                                      className="w-6"
                                      src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000"
                                      alt="veg-nonveg"
                                    />
                                  )}
                                </div>
                                <h2 className="font-sans text-2xl mb-1 text-gray-600">
                                  {foodItem?.card?.info?.name}
                                </h2>
                                <div className="font-bold mb-1 text-lg text-gray-600">
                                  Rs.
                                  {(foodItem?.card?.info?.defaultPrice ||
                                    foodItem?.card?.info?.price) / 100}
                                </div>
                                <div className="flex w-fit gap-1 bg-orange-400 rounded-md p-1 text-white items-center text-sm mb-1">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  ></i>
                                  {foodItem?.card?.info?.ratings
                                    ?.aggregatedRating?.rating || "4.0"}
                                </div>
                                <Description
                                  foodItem={foodItem?.card?.info?.description}
                                />
                              </div>
                              <div className="w-2/12 flex flex-col justify-center items-center">
                                <img
                                  className="w-32 h-32 rounded-2xl"
                                  src={
                                    FOOD_ITEM_URL +
                                    foodItem?.card?.info?.imageId
                                  }
                                  alt="menu-item"
                                />
                                <button className="bg-white border-2 w-28 h-10 rounded-lg relative overflow-hidden flex items-center justify-center shadow-md cursor-pointer bottom-5 font-medium mx-auto">
                                  Add
                                </button>
                              </div>
                            </div>
                            <hr className="mt-2 text-gray-900 opacity-75" />
                          </div>
                        );
                      })}
                    </MenuItemCard>
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
