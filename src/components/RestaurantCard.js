import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData", resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime } = {},
  } = resData || {};

  return (
    <div className="res-card">
      {resData && (
        <>
          <img
            className="res-img"
            alt="restaurant-image"
            src={CDN_URL + cloudinaryImageId}
          />
          <div className="res-info">
            <h3>{name}</h3>
            <h4> {avgRating} Stars</h4> <h4> {deliveryTime} minutes</h4>
            <p>{cuisines && cuisines.join(", ")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
