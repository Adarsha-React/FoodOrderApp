import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  return (
    <div className="w-screen m-5 h-64 shadow-md">
      {cartItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Cart;
