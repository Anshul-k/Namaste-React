import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL, FOOD_ITEM_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";

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
    <div
      style={{
        color: "#02060c99",
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "end",
        width: "90%",
      }}
    >
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
          style={{
            border: "none",
            background: "none",
            color: "#535665",
            cursor: "pointer",
            fontWeight: "bold",
            lineHeight: "1rem",
          }}
          onClick={toggleContent}
        >
          more
        </div>
      )}
    </div>
  );
};

const MenuItemCard = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="menu-container">
      <div className="menu-container-heading">
        <h3 className="menu-container-title">{title}</h3>
        <button className="menu-chevron" type="button" onClick={handleOpen}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </button>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const RestaurantMenu = () => {
  const { resid, cloudinaryimageid } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenuData();
  }, []);

  // For Fetching res Info, as per 23/07/2024
  const fetchResMenuData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resid}`
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return resInfo === null ? (
    <ShimmerMenu />
  ) : (
    <div className="restaurant-menu">
      <div className="menu-header-container">
        <img
          style={{
            width: "10rem",
            height: "8rem",
            margin: "1rem",
            borderRadius: "0.6rem",
          }}
          src={
            CDN_URL +
            (cloudinaryimageid.includes("^")
              ? cloudinaryimageid.replace(/\^/g, "/")
              : cloudinaryimageid)
          }
          alt="Res-Profile"
        />
        <div className="menu-header-content">
          <h1
            style={{
              paddingBottom: "1rem",
              fontFamily: "Georgia",
              color: "#0f0f0f",
              fontSize: "2.2rem",
            }}
          >
            {resInfo?.cards[0]?.card?.card?.text}
          </h1>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem" }}>
            <div style={{ fontSize: "1.2rem" }}>
              {" "}
              <img
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt="ratings"
                style={{ width: "1rem", marginRight: "0.3rem" }}
              />
              {resInfo?.cards[2]?.card?.card?.info?.avgRating}
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 900 }}>.</div>
            <div>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</div>
          </div>
          <div>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</div>
          <hr style={{ color: "#BEC5C7", opacity: 0.3 }} />
          <div>
            {resInfo?.cards[2]?.card?.card?.info?.areaName} --{" "}
            {resInfo?.cards[2]?.card?.card?.info?.expectationNotifiers[0]?.text
              .replace("<b>", "")
              .replace("</b>", "")}
          </div>
        </div>
      </div>
      <div className="menu-item-container">
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (category, index) => {
            return (
              <div key={index}>
                {category?.card?.card?.title &&
                  category?.card?.card?.title != "Top Picks" && (
                    <>
                      <MenuItemCard
                        title={category?.card?.card?.title}
                        open={category?.card?.card?.title === "Recommended"}
                      >
                        {(
                          category?.card?.card?.itemCards ||
                          category?.card?.card?.categories?.flatMap(
                            (category) => category.itemCards
                          )
                        )?.map((foodItem) => {
                          return (
                            <div key={foodItem?.card?.info?.id}>
                              <div className="menu-item-content-container">
                                <div className="menu-item-content">
                                  <div>
                                    {foodItem?.card?.info?.isVeg ? (
                                      <img
                                        src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000"
                                        alt="veg-nonveg"
                                        style={{ width: "1.4rem" }}
                                      />
                                    ) : (
                                      <img
                                        src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000"
                                        alt="veg-nonveg"
                                        style={{ width: "1.4rem" }}
                                      />
                                    )}
                                  </div>
                                  <h2
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "1.5rem",
                                      marginBottom: "0.4rem",
                                      color: "#535665",
                                    }}
                                  >
                                    {foodItem?.card?.info?.name}
                                  </h2>
                                  <div
                                    style={{
                                      fontWeight: "bold",
                                      marginBottom: "0.4rem",
                                      fontSize: "1.1rem",
                                      color: "#535665",
                                    }}
                                  >
                                    Rs.
                                    {(foodItem?.card?.info?.defaultPrice ||
                                      foodItem?.card?.info?.price) / 100}
                                  </div>
                                  <div
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "1.1rem",
                                      color: "#535665",
                                      marginBottom: "0.4rem",
                                    }}
                                  >
                                    <img
                                      src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                                      alt="ratings"
                                      style={{
                                        width: "1rem",
                                        marginRight: "0.3rem",
                                      }}
                                    />
                                    {foodItem?.card?.info?.ratings
                                      ?.aggregatedRating?.rating || "4.0"}
                                  </div>
                                  <Description
                                    foodItem={foodItem?.card?.info?.description}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <img
                                    src={
                                      FOOD_ITEM_URL +
                                      foodItem?.card?.info?.imageId
                                    }
                                    alt="menu-item"
                                    style={{
                                      width: "8rem",
                                      height: "8rem",
                                      borderRadius: "1.2rem",
                                    }}
                                  />
                                  <button className="menu-item-button">
                                    Add
                                  </button>
                                </div>
                              </div>
                              <hr style={{ color: "#BEC5C7", opacity: 0.3 }} />
                            </div>
                          );
                        })}
                      </MenuItemCard>
                      <hr
                        style={{
                          background: "#E8E8E8",
                          border: "2rem",
                          height: "1rem",
                        }}
                      />
                    </>
                  )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
