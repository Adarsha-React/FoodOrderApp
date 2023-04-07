import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  //const [restaurant, setRestaurant] = useState({});

  const restaurant = useRestaurant(resId);

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
