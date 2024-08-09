// src/common/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-end space-x-2">
      <button
        className="px-4 py-2  rounded-md"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          className={`px-4 py-2  rounded-md ${
            currentPage === page + 1
              ? "bg-orange-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className="px-4 py-2  rounded-md"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
