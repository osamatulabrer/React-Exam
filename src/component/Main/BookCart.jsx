import {getImage} from '../../assets/utils/getImage'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BookDetailModal } from '../BookDetailsModal';
import { useState } from "react";



export default function BookCart({item,onAdditem}){
    const [openModal, setOpenModal] = useState(false);
    const closeModal = ()=>{
        setOpenModal(!openModal)
    }
  
    const handleClick = ()=>{
        onAdditem(item)
    }
   

    return(
        <div className="col-span-4 py-4 px-3 border border-[#8c8c8c] rounded">
            <div onClick={()=> setOpenModal(!openModal)}>
                <img src={getImage(`../../assets/book_images/${item.image}`)} alt="img" />
            </div>
            <div>
                <div className="my-5">

                <h4 className="text-lg dark:text-white font-medium">{item.name}</h4>
                <span className="text-md text-[#8c8c8c]">{item.author}</span>
                <ul className="flex space-x-2.5 pt-2">
                    <li><FaStar className="text-[#00d991] " /></li>
                    <li><FaStar className="text-[#00d991] " /></li>
                    <li><FaStar className="text-[#00d991] " /></li>
                    <li><FaStar className="text-[#00d991] " /></li>
                    <li><FaStar className="text-[#00d991] " /></li>
                    
                
                </ul>
                </div>
                    {/* add to cart */}
                <div className="flex justify-between">
                    <div onClick={handleClick} className="text-base font-medium bg-[#0dd991] rounded flex justify-center items-center px-3 cursor-pointer"><span>${item.price}</span> | Add to cart </div>
                    <div className="w-[52px] h-[48px] rounded border border-[#0dd991] flex justify-center items-center cursor-pointer"><FaRegHeart className="text-2xl "/></div>
                </div>
            </div>
            {openModal && <BookDetailModal   item={item} onClose={closeModal}/>}
            
            
        </div>
    )
}