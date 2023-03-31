import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
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
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
