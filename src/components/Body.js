import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../constants";
import Search from "./Search";

const Body = () => {
  return (
    <>
      <Search />
      <div className="flex flex-wrap">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
