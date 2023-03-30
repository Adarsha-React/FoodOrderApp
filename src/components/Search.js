const Search = () => {
  return (
    <div className="p-5">
      <input
        type="text"
        className="w-96 h-11 rounded-lg bg-gray-200 py-4 px-4 font-bold"
        placeholder="Search"
        value=""
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded-md">
        Search
      </button>
    </div>
  );
};

export default Search;
