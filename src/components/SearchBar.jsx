import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border rounded-md px-4 py-2 w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-full"
        placeholder="Search..."
      />
      <button className="absolute right-2 top-2 text-gray-500">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
