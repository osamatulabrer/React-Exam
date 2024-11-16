import { getImage } from "../../assets/utils/getImage";
import { FaStar } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { BookDetailModal } from "../BookDetailsModal";


export default function BookCart({ item,BookDetailModalClose,BookDetailModalOpen ,isOpenModal,handleAddItem}) {
 


  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 py-4 px-3 rounded border border-[#8c8c8c]">
      <div onClick={() =>BookDetailModalOpen()} >
        <img 
          src={getImage(`../../assets/book_images/${item.image}`)}
          alt="img"
        />
      </div>
      <div>
        <div className="my-5">
          <h4 className="text-lg dark:text-white font-medium">{item.name}</h4>
          <span className="text-md text-[#8c8c8c]">{item.author}</span>
          <ul className="flex space-x-2.5 pt-2">
            <li>
              <FaStar className="text-[#00d991] " />
            </li>
            <li>
              <FaStar className="text-[#00d991] " />
            </li>
            <li>
              <FaStar className="text-[#00d991] " />
            </li>
            <li>
              <FaStar className="text-[#00d991] " />
            </li>
            <li>
              <FaStar className="text-[#00d991] " />
            </li>
          </ul>
        </div>
        {/* add to cart */}
        <div className="flex justify-between">
          <div onClick={() => (handleAddItem(item))}
           
            className="text-sm font-medium bg-[#0dd991] rounded flex justify-center items-center px-3 cursor-pointer"
          >
            <span>${item.price}</span> | Add to cart
          </div>
          <div
           
            className="w-[52px] h-[48px] rounded border border-[#0dd991] flex justify-center items-center cursor-pointer"
          >
            <IoIosHeart className="text-2xl dark:text-white" />
          </div>
        </div>
      </div>
      {isOpenModal && <BookDetailModal item={item} BookDetailModalClose={BookDetailModalClose} />}
    </div>
  );
}
