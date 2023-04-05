import { IMG_CDN } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-64  p-2 m-2 cursor-pointer  border border-gray-100 hover:shadow-lg">
      <img alt="burger" src={IMG_CDN + cloudinaryImageId} />
      <h3 className="text-md font-bold">{name}</h3>
      <small>{cuisines.join(", ")}</small>
      <h2 className="pt-2">
        <span className="bg-green-500 rounded p-1 text-white shadow-lime-500 text-[11px]">
          <span className=""> ⭐ </span>
          {avgRating}
        </span>
      </h2>
    </div>
  );
};

export default RestaurantCard;
