import { useCallback, useContext, useEffect, useState } from "react";
import { searchSvg } from "../assets";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const { searchBox, setSearchBox } = props;
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");

  const [search, setSearch] = useState(undefined);
  const heandleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const toggleSearchBox = useCallback(() => setSearchBox(!searchBox), []);

  const handleCategory = (event) => {
    setcategory(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = async (event) => {
    if (window.innerWidth < 1024 && !search) {
      toggleSearchBox();
      return;
    }
    if (!search) {
      alert("Please enter something to search");
      return;
    }

    try {
      if (category === "all") {
        navigate(`/dash/search?text=${search}&name=${search}`);
      } else if (category === "Posts") {
        navigate(`/dash/search?text=${search}`);
      } else if (category === "people") {
        navigate(`/dash/search?name=${search}`);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
    setSearch("");
    toggleSearchBox();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const content = (
    <>
      <div
        className={`mx-4 flex max-h-10 items-center gap-2 rounded-l-md border-black/40 lg:border lg:pl-2 ${
          searchBox ? "max-lg:search z-[500]" : "relative min-h-full"
        }`}
      >
        {searchBox && (
          <div
            className="-z-1 fixed inset-0 bg-[#000000cb] lg:hidden"
            onClick={toggleSearchBox}
          />
        )}
        <div
          className={`lg:relative lg:flex lg:items-center ${
            searchBox
              ? `fixed max-lg:left-1/2 max-lg:top-1/2 max-lg:flex max-lg:h-10 max-lg:w-[30rem] max-lg:max-w-[70%] max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:items-center max-lg:bg-zinc-200 max-lg:px-4`
              : "hidden"
          }`}
        >
          <h3 className="h3 absolute bottom-full mb-4 w-full text-center font-semibold text-zinc-100">
            Search
          </h3>
          <input
            type="text"
            onChange={heandleInputChange}
            value={search}
            name="search"
            placeholder="Search user or post"
            className={`z-[10] w-[20rem] border-r-2 border-black/50 bg-transparent outline-none max-sm:w-full ${
              searchBox ? "" : "max-lg:hidden"
            }`}
            onKeyDown={handleKeyDown}
          />
          <select
            name="category"
            className="max-w-max border-l border-none bg-transparent outline-none"
            onChange={handleCategory}
          >
            <option value="all" defaultChecked>
              All
            </option>
            <option value="people">People</option>
            <option value="Posts">Posts</option>
          </select>
          <img
            src={searchSvg}
            width={50}
            height={50}
            onClick={handleSearch}
            className={`aspect-1/1 absolute left-full min-w-10 max-w-10 rounded-r-md border border-black/40 bg-blue-500 p-2 ${
              searchBox && "rounded-r-md"
            }`}
          />
        </div>
      </div>
    </>
  );

  return content;
};

export default Search;
