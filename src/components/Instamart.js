import { useState } from "react";

const Section = ({ title, description, isVisible, onShow }) => {
  console.log(onShow, isVisible);
  return (
    <div className="shadow-md m-2 p-2 border border-2">
      <h1 className="text-lg font-bold">{title}</h1>
      {isVisible ? (
        <h1 className="text-lg">{description}</h1>
      ) : (
        <button
          className="bg-blue-500 rounded-md px-1 font-bold"
          onClick={onShow}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState("about");
  return (
    <div>
      <Section
        title={"About"}
        description={
          "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city"
        }
        isVisible={isVisible === "about"}
        onShow={() => setIsVisible("about")}
      />
      <Section
        title={"Help"}
        description={
          "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city"
        }
        isVisible={isVisible === "help"}
        onShow={() => setIsVisible("help")}
      />
    </div>
  );
};

export default Instamart;
