import {getImage} from '../../assets/utils/getImage'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ProductDetailModal } from '../ProductDetailsModal';
import { useState } from "react";


export default function ProductCart({item}){
    const [openModal, setOpenModal] = useState(false);
    // const [closeModal, setCloseModal] = useState(true);

   

    return(
        <div className="col-span-4 py-4 px-3.5 border border-[#8c8c8c] rounded">
            <div onClick={()=> setOpenModal(!openModal)}>
                <img src={getImage(`../../assets/book_images/${item.image}`)} alt="img" />
            </div>
            <div>
                <div className="my-5">

                <h4 className="text-lg text-white font-medium">{item.name}</h4>
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
                    <div className="text-base font-medium bg-[#0dd991] rounded flex justify-center items-center px-1"><span>${item.price}</span> | Add to cart </div>
                    <div className="w-[52px] h-[48px] rounded border border-[#0dd991] flex justify-center items-center"><FaHeart className="text-base text-[#0dd991]"/></div>
                </div>
            </div>
            
            {openModal && <ProductDetailModal isOpenModal={openModal} />}
        </div>
    )
}