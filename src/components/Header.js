import appLogo from "../assets/images/appLogo.png";
import appLogo1 from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";

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
  return (
    <div className="flex justify-between shadow-md">
      <Title />
      <div className="flex justify-end">
        <ul className="flex font-semibold">
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2 text-base hover:text-orange-500">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <UserLogin />
      </div>
    </div>
  );
};

export default Header;
