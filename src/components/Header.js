import appLogo from "../assets/images/appLogo.png";
import appLogo1 from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="w-28" alt="logo" src={appLogo1} />
      </a>
    </>
  );
};

const Header = () => {
  const isOnline = useOnline();

  const user = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md">
      <Title />
      <div className="flex justify-end">
        <ul className="flex font-semibold">
          <li className="pr-20 pt-4">
            {!isOnline ? (
              <h5 className="w-2">🔴</h5>
            ) : (
              <div className="flex">
                <h1 className="font-bold pr-3">{user.name}</h1>
                <h5 className="w-0">🟢</h5>
              </div>
            )}
          </li>
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
        <UserLogin />
      </div>
    </div>
  );
};

export default Header;
