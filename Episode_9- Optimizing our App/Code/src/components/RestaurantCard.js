import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData;

  return (
    <div className="Res-Card">
      <div className="Res-Image-Container">
        <img
          className="Res-Image"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo-image"
        />
      </div>
      <div className="Res-Card-Content">
        <div className="Res-Name-Container">
          <h2 className="Res-Name">{name}</h2>
          <div className="Res-Details">
            <h4 className="Res-Rating">{avgRating}Stars</h4>
            <h5 className="Res-Cost">{costForTwo}</h5>
          </div>
          <h4
            className="Res-Cuisine truncated2"
            style={{ wordBreak: "break-all", width: "fit-content" }}
          >
            {cuisines.join(",")}
          </h4>
          <h4 className="Res-delivery-time">{sla.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
