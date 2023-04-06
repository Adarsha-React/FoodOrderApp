import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.897496&lng=77.630679&restaurantId=";
    const UrlEnd = "&submitAction=ENTER";
    const finalURL = URL + resId + UrlEnd;

    const data = await fetch(finalURL);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex py-10 m-5">
      <div>
        <img
          className="w-80"
          alt="restaurat"
          src={IMG_CDN + restaurant?.cloudinaryImageId}
        />
        <h1 className="font-bold text-lg">Restaurant Id: {restaurant?.id}</h1>
        <h2 className="font-bold text-lg">{restaurant?.name}</h2>

        <h2 className="font-bold"> {restaurant?.areaName}</h2>
        <h2 className="font-bold">{restaurant?.city}</h2>
        <h2 className="font-bold">{restaurant?.areaPostalCode}</h2>
        <h2 className="py-3 font-bold">Ratings: {restaurant?.avgRating}</h2>
      </div>
    </div>
  );
};
export default RestaurantMenu;
