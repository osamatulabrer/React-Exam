import { FaBell ,} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import {ShoppingCartModal} from './ShoppingCartModal'
import { useState } from "react";


export default function Header({themeChange}){
    
    
    const [openModal, setOpenModal] = useState(false);
    const handleClick = ()=>{
        setOpenModal(!openModal)
    }
    const handleChange = ()=>{
        themeChange()
    }
  
    return (
       
        <div className="max-w-full mx-auto  p-3 ">

        <div className="flex justify-between items-center py-8 ">
            <a className="text-[#00d991] text-2xl font-semibold capitalize" href="#">divinebook</a>
            <ul className="flex space-x-3">
                <li  className="w-[45px] h-[42px] border border-[#91efdd] bg-[#2ee0a5] bg-opacity-20 flex justify-center items-center rounded"><a href="#"><FaBell className="text-[#00d991]  text-2xl"/></a></li>
                <li onClick={handleChange} className="w-[45px] h-[42px] border border-[#91efdd] bg-[#2ee0a5] bg-opacity-20   flex justify-center items-center rounded"><a href="#"><MdLightMode className="text-[#00d991]   text-2xl"/></a></li>
                <li onClick={()=>(setOpenModal(!openModal))} className="w-[45px] h-[42px] border border-[#91efdd] bg-[#2ee0a5] bg-opacity-20   flex justify-center items-center rounded  "><a href="#"><AiOutlineShoppingCart className="text-[#00d991] text-2xl"/></a></li>

            </ul>
        </div>
        {openModal && <ShoppingCartModal  onClose={handleClick}/>}
           
        </div>
      
    )
}