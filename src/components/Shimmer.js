const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(12)
        .fill("")
        .map((e) => (
          <div className="w-60 h-60 p-2 m-2 shadow-lg bg-gray-100"></div>
        ))}
    </div>
  );
};

export default Shimmer;
