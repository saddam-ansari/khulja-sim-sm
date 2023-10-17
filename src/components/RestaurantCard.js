import { CDN_URL } from "../utils/constant";

//const { resName, cuisine } = props;
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData.info;

  return (
    <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold py-4 text-lg">{name}</h3>
      <h5>{cuisines && cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>₹{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> output RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-4 px-1 rounded-md">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
