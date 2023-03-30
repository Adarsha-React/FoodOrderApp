import { useState } from "react";

const UserLogin = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isloggedIn ? (
        <button
          className="pl-11 pr-4 m-2 text-md font-bold"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="pl-11 pr-4 m-2 text-md font-bold"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </>
  );
};

export default UserLogin;
