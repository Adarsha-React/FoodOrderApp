import appLogo from "../assets/images/appLogo.png";

import UserLogin from "./UserLogin";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="w-24" alt="logo" src={appLogo} />
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
          <li className="p-2 m-2 text-base hover:text-orange-500">Home</li>
          <li className="p-2 m-2 text-base hover:text-orange-500">About</li>
          <li className="p-2 m-2 text-base hover:text-orange-500">Cart</li>
        </ul>
        <UserLogin />
      </div>
    </div>
  );
};

export default Header;
