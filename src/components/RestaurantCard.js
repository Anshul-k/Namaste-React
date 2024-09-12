import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="flex flex-col w-64 p-4 m-2 shadow-lg rounded-md hover:bg-gray-50 hover:scale-105 ease-in-out duration-500"
    >
      <img
        className="rounded-lg object-fit w-full h-48"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo-image"
      />
      <div className="pt-3">
        <h2 className="font-bold text-xl text-gray-600 truncated2">{name}</h2>
        <h4
          className="truncated2 pt-1 text-gray-700"
          style={{ wordBreak: "break-all", width: "fit-content" }}
        >
          {cuisines?.join(",")}
        </h4>
        <h4 className="font-bold pt-2 text-gray-600">{sla.slaString}</h4>
        <div className="flex gap-5 items-center pt-2">
          <h4 className="flex gap-1 bg-orange-400 rounded-md p-1 text-white items-center">
            <i className="fa fa-star" aria-hidden="true"></i>
            {avgRating?.toFixed(1)}
          </h4>
          <p className="text-[6px]">
            <i className="fa fa-circle" aria-hidden="true"></i>
          </p>
          <h5 className="font-bold text-gray-600">{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
