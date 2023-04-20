import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  //const [restaurant, setRestaurant] = useState({});

  const [restaurant, restaurantInfo] = useRestaurant(resId);

  const dispatch = useDispatch();

  const handleAddItem = (itemInfo) => {
    dispatch(addItem(itemInfo));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="">
        <h2 className="m-5 font-bold">{restaurantInfo?.name}</h2>
        <img
          alt="resImage"
          className="w-80 h-56 pl-2 m-2"
          src={IMG_CDN + restaurantInfo?.cloudinaryImageId}
        />
        <h2 className="ml-5 text-sm ">
          {restaurantInfo?.cuisines?.join(", ")}
        </h2>
        <h2 className="ml-5 font-bold">{restaurantInfo?.areaName}</h2>
        <h2 className="ml-5 font-bold">{restaurantInfo?.city}</h2>
      </div>
      <div className="p-10 m-5">
        <h1 className="font-bold text-xl p-2 shadow-sm bg-gray-100">
          Item List
        </h1>
        {restaurant.map((item) => (
          <div key={item?.card?.info?.id} className="max-w-full">
            <ul className="flex justify-between p-3 m-5 shadow-md">
              <div>
                <h2 className="font-bold py-1">{item?.card?.info?.name}</h2>
                <h2 className="text-sm">
                  Cost: {item?.card?.info?.price / 100}
                </h2>
                <h2 className="text-sm">
                  Ratings: ⭐
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </h2>
                <div>
                  <button
                    className="bg-green-400 rounded-md px-2 my-2 font-bold text-sm"
                    onClick={() => handleAddItem(item?.card?.info)}
                  >
                    Add
                  </button>
                </div>
              </div>
              <img
                className="w-40 h-32 pl-5"
                alt="itemImage"
                src={IMG_CDN + item?.card?.info?.imageId}
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
