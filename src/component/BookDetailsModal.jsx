

import { FaHeart } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { getImage } from "../assets/utils/getImage";


export function BookDetailModal({item,onClose}) {

  const [openModal, setOpenModal] = useState(true);
  const handleClick = ()=>{
    onClose();
   
  }

  return (
    <>
     
      <Modal className="w-[1000px]" show={openModal}  onClose={() => setOpenModal(!openModal)}>
       
        <div className="flex bg-[#1e293b] rounded-sm">
          <div className="m-6 space-y-4">
            <h2 className="text-4xl text-white">{item.name}</h2>
            <span className="text-lg text-white my-2">{item.author}</span>
            <p className="text-lg text-white">{item.description}</p>
            <div className="flex gap-3">
              <div className="text-base font-medium bg-[#0dd991] rounded flex justify-center items-center px-8"><span>${item.price}</span>| Add to cart </div>
              <div className="w-[52px] h-[48px] rounded border border-[#0dd991] flex justify-center items-center"><FaHeart className="text-base text-[#0dd991]"/></div>
              <button className="bg-white font-semibold uppercase shadow-sm rounded px-3" onClick={handleClick}>close</button>
            </div>
          </div>
          <div className="w-[450px]">
            <img className="h-full w-[full]"  src={getImage(`../../assets/book_images/${item.image}`)} alt="img" />
          </div>
        </div>
        
      </Modal>
    </>
  )
}
