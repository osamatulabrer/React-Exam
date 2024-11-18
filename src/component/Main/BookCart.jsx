import { getImage } from "../../assets/utils/getImage";
import { FaStar } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BookDetailModal } from "../../assets/modal/BookDetailsModal";

export default function BookCart({
  item,
  BookDetailModalClose,
  BookDetailModalOpen,
  isOpenModal,
  handleAddItem,
}) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 py-4 px-3  border border-gray-300 dark:border-gray-600  ">
      {/* Book Image Section */}
      <div
        className="cursor-pointer mb-4  overflow-hidden"
        onClick={() => BookDetailModalOpen()}
      >
        <img
          src={getImage(`../../assets/book_images/${item.image}`)}
          alt={`${item.name} cover`}
          className="w-full h-64 object-cover  hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Book Details Section */}
      <div>
        <div className="mb-5">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white truncate">
            {item.name}
          </h4>
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            {item.author}
          </span>
          {/* Rating Section */}
          <ul className="flex space-x-1 pt-2">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <FaStar className="text-[#00d991]" />
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Cart and Wishlist Section */}
        <div className="flex justify-between items-center flex-wrap space-y-2">
          <div
            onClick={() => handleAddItem(item)}
            className="text-sm font-medium bg-[#0dd991] text-white rounded flex justify-center items-center px-4 py-4 cursor-pointer hover:bg-[#0bc380] transition"
          >
            <span>${item.price}</span> | Add to Cart
          </div>
          <div
            className="w-12 h-12 rounded-md border border-[#0dd991] flex justify-center items-center cursor-pointer hover:bg-[#0dd991] hover:text-white transition"
          >
            <IoIosHeart className="text-xl" />
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {isOpenModal && (
        <BookDetailModal
          item={item}
          BookDetailModalClose={BookDetailModalClose}
          handleAddItem={handleAddItem}
        />
      )}
    </div>
  );
}
