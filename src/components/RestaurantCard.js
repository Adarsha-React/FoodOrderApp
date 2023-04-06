import { IMG_CDN } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
}) => {
  return (
    <div className="w-64  p-3 m-5 cursor-pointer  border border-gray-100 hover:shadow-lg rounded-2xl">
      <img alt="burger" src={IMG_CDN + cloudinaryImageId} />
      <h3 className="text-md font-bold">{name}</h3>
      <small>{cuisines.join(", ")}</small>
      <div className=" flex pt-2">
        <span className=" flex bg-green-400 px-1 py-[3px] text-white shadow-lime-700 text-[11px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 pt-[1px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span className="px-1 text-white font-semibold">{avgRating} </span>
        </span>
        <span className="px-1 pt-[3px] text-xs font-mono">
          <span className="px-1"> - </span> {deliveryTime} MINS
        </span>
        <span className="px-1 pt-[3px] text-xs font-mono">
          <span className="px-1"> - </span> {costForTwo / 100} FOR TWO
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
