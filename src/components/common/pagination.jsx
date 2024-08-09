import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
  // Membatasi tampilan angka jika total halaman lebih dari 6
  const maxPagesToShow = 6;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Menghasilkan array halaman untuk tampilan
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={`flex justify-center items-end space-x-2 ${className}`}>
      <button
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
