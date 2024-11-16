import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import {ShoppingCartModal} from './ShoppingCartModal'
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";



export default function Header({themeChange,size,addItem,setAddItem,show,modalShow,modalClose,handleRemoveItem,}){
    
    
  
    const handleChange = ()=>{
        themeChange()
    }
 
    return (
       
        <div className="max-w-full mx-auto  p-3 ">

        <div className="flex justify-between items-center py-8 ">
            <a className="text-[#00d991] text-2xl font-semibold capitalize" href="#">divinebook</a>
            <ul className="flex space-x-3">
              
                <IoIosSearch className="w-[45px] h-[42px] border border-[#91efdd] bg-[#2ee0a5] bg-opacity-20   flex justify-center items-center rounded text-[#00d991]   text-base lg:hidden" />
                <li onClick={handleChange} className="w-[45px] h-[42px] border border-[#91efdd] bg-[#2ee0a5] bg-opacity-20   flex justify-center items-center rounded"><a href="#"><MdLightMode className="text-[#00d991]   text-2xl"/></a></li>
                <li onClick={()=>(modalShow())} className="w-[45px] h-[42px] border border-[#91efdd] relative bg-[#2ee0a5] bg-opacity-20   flex justify-center items-center rounded  ">
                    <a href="#"><AiOutlineShoppingCart className="text-[#00d991] text-2xl"/></a>
                    <span className="bg-white text-green-600 text-base rounded-full px-2 absolute top-[-20%] right-[-25%] font-semibold">{size}</span>
                </li>

            </ul>
        </div>
      
        {show &&  <ShoppingCartModal modalClose={modalClose} addItem={addItem} setAddItem={setAddItem} handleRemoveItem={handleRemoveItem} />}
           
        </div>
      
    )
}