const RestaurantCard = () => {
  const restaurant = {
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ey8w7kl59yiravzhdea7",
    name: "Burger King",
    cuisines: "Burgers,American",
    ratings: "4.2",
  };

  return (
    <div className="w-64 shadow-lg p-2 m-2">
      <img alt="burger" src={restaurant.image} />
      <h3 className="text-xl font-bold">{restaurant.name}</h3>
      <small>{restaurant.cuisines}</small>
      <h2 className="pt-2">{restaurant.ratings} stars</h2>
    </div>
  );
};

export default RestaurantCard;
