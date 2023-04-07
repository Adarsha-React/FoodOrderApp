import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9719321&lng=77.512749&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h2 className="font-bold text-lg">
        🔴 Offline, please check your internet!!
      </h2>
    );
  }

  //Conditional rendering
  //if restaurants empty -> load shimmer UI else load normal body with data

  if (!allRestaurants) return null;

  //if (filteredRestaurants?.length === 0) return <h3>No restaurant found</h3>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center shadow-sm">
        <div className="p-5">
          <input
            type="text"
            className="w-96 h-11 rounded-lg bg-gray-200 py-4 px-4 font-bold"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded-md"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between shadow-sm w-5/6 ml-28">
          <div className="p-5 mx-5  font-bold text-3xl">
            {filteredRestaurants?.length} restaurants
          </div>
          <div className="flex justify-end text-sm pt-7">
            <div className="p-5">Rating</div>
            <div className="p-5">Delivery Time</div>
            <div className="p-5">Cost: Low to High</div>
            <div className="p-5">Cost: High to Low</div>
          </div>
        </div>
        <div className="flex flex-wrap p-5 w-4/5 ml-48">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
