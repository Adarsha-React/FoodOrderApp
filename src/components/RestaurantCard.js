import { IMG_CDN } from "../../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-64 shadow-lg p-2 m-2">
      <img alt="burger" src={IMG_CDN + cloudinaryImageId} />
      <h3 className="text-md font-bold">{name}</h3>
      <small>{cuisines.join(", ")}</small>
      <h2 className="pt-2">{avgRating} stars</h2>
    </div>
  );
};

export default RestaurantCard;
