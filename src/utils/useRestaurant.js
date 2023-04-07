import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
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
  return restaurant;
};

export default useRestaurant;
