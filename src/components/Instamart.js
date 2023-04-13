import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black m-2 p-2">
      <h2 className="font-bold text-lg">{title}</h2>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="font-bold bg-blue-500 shadow-sm rounded-md px-2 "
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="font-bold bg-blue-500 shadow-sm rounded-md px-2"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team");

  return (
    <div className="shadow-lg">
      <h2 className="font-bold text-3xl text-green-500 ">Instamart</h2>
      <Section
        title={"About"}
        description={"This section is about Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team"}
        description={"This section is Team of Instamart"}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Products"}
        description={
          "This section is for products which are available in Instamart"
        }
        isVisible={visibleSection === "products"}
        setIsVisible={() => setVisibleSection("products")}
      />
    </div>
  );
};

export default Instamart;
