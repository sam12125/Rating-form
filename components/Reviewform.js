"use client";

import { useState } from "react";
import { FaStar, FaThumbsUp, FaThumbsDown, FaTimes } from "react-icons/fa";

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(null);

  const handleRating = (setRating, rating) => {
    setRating(rating);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <button className="absolute top-4 left-4 text-gray-500 hover:text-gray-700">
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Leave a review</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Safety</h3>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={24} // Increase the size of the stars
                className={`cursor-pointer ${
                  index < safetyRating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRating(setSafetyRating, index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Communication</h3>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={24} // Increase the size of the stars
                className={`cursor-pointer ${
                  index < communicationRating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => handleRating(setCommunicationRating, index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Would you recommend Trausti?
          </h3>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded flex items-center space-x-2 ${
                recommend === true ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRecommend(true)}
            >
              <FaThumbsUp /> <span>Yes</span>
            </button>
            <button
              className={`px-4 py-2 rounded flex items-center space-x-2 ${
                recommend === false ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRecommend(false)}
            >
              <FaThumbsDown /> <span>No</span>
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Praise</h3>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="What you liked about Trausti"
          ></textarea>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
