const Shimmer = () => {
  return (
    <>
      <div className="flex justify-center py-14 shadow-md ">
        <div className="w-80 h-11 rounded-md shadow-sm bg-gray-100"></div>
        <div className="w-36 h-11 mx-5 rounded-md shadow-sm bg-gray-100"></div>
      </div>

      <div className="flex flex-wrap py-32 ml-48 shadow-sm">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-60 h-60 p-2 m-2 shadow-lg bg-gray-100"
            ></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
