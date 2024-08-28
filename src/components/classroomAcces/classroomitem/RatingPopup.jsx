import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingPopup = ({ onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(""); // State untuk menyimpan review

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    onSubmit(rating, review); // Mengirim rating dan review ke fungsi onSubmit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center">Beri Rating</h2>
        <p className="text-gray-500 mb-4 text-center">
          Apakah kamu yakin untuk menyelesaikan preteest ini?
        </p>
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={faStar}
              className={`text-2xl cursor-pointer ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>
        {/* Input untuk masukan review */}
        <input
          type="text"
          placeholder="Masukan review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-4 w-full text-center"
        />
        <div className="flex justify-between w-full mt-2">
          {" "}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2 w-1/2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 w-1/2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPopup;
