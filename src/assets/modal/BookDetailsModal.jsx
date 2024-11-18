import { FaHeart } from "react-icons/fa";
import { Modal } from "flowbite-react";

export function BookDetailModal({ item, BookDetailModalClose, handleAddItem }) {
  // Return null if no item is provided (modal won't render)
  if (!item) {
    return null;
  }

  return (
    <Modal show={!!item} onClose={BookDetailModalClose}>
      <div className="grid sm:grid-cols-3 bg-[#1e293b] rounded-sm gap-6 p-6">
        {/* Image Section */}
        <div className="img sm:order-2 flex justify-center items-center">
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.name} Cover`}
              className="w-full h-auto object-cover max-h-[300px] rounded"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 text-white flex justify-center items-center rounded">
              No Image Available
            </div>
          )}
        </div>

        {/* Book Details Section */}
        <div className="sm:col-span-2 sm:order-1">
          <h2 className="text-2xl sm:text-4xl text-white font-bold truncate">{item.name}</h2>
          <span className="text-base sm:text-lg text-gray-400 my-2 block">
            {item.author || "Unknown Author"}
          </span>
          <p className="text-lg text-gray-300 line-clamp-3">
            {item.description || "No description available."}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4 flex-wrap">
            {/* Add to Cart */}
            <button
              onClick={() => handleAddItem(item)}
              className="text-base font-medium bg-[#0dd991] text-white rounded px-6 py-2 hover:bg-[#0bc380] transition"
            >
              ${item.price || "0.00"} | Add to cart
            </button>

            {/* Favorite Button */}
            <button
              className="w-[52px] h-[48px] rounded border border-[#0dd991] flex justify-center items-center text-[#0dd991] hover:bg-[#0dd991] hover:text-white transition"
              title="Add to favorites"
            >
              <FaHeart className="text-lg" />
            </button>

            {/* Close Button */}
            <button
              className="bg-gray-200 text-gray-800 font-semibold uppercase shadow-sm rounded px-4 py-2 hover:bg-gray-300 transition"
              onClick={BookDetailModalClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
