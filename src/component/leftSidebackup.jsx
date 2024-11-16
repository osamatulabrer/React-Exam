import { FaFire } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdUpcoming } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { TextInput } from "flowbite-react";
import SearchPopup from "../searchPopup";
import FavoriteModal from '../favoriteModal'







function LeftSideBer({onRelease,onUpcoming,onTranding,text}) {

  const [openModal,setOpenModal] = useState(false)
  const [isOpenModal,setisOpenModal] = useState(false)
 
console.log(text)

 

  const closeModal = ()=>{
    setOpenModal(false)
  }
  const isCloseModal = ()=>{
    setisOpenModal(false)
  }

    return (
      <div className="space-y-7 col-span-2 pt-8 mr-8 ml-2">
                  <div className="max-w-md">
                  
                    <TextInput onClick={()=>(setOpenModal(true))}  type="search" icon={CiSearch} placeholder="quick search..."/>
                  </div>
                  
                  
           
                  <div onClick={()=>(onTranding())} className="hover:bg-[#00d991] rounded-md flex items-center  py-3.5 mb-7.5 px-3 ">
                    <FaFire className="inline-block text-base dark:text-white hover:text-[#171923] mr-1.5"/>
                    <span className=" text-base dark:text-white hover:text-[#171923]">tranding</span>
                  </div>
                  <div onClick={()=>(onRelease())} className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 ">
                    <CiSearch className="inline-block hover:text-[#171923] text-base dark:text-white  opacity-1/2 mr-1.5"/>
                    <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">new release</span>
                  </div>
                  <div onClick={()=>(onUpcoming())} className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 ">
                    <MdUpcoming className=" hover:text-[#171923] inline-block text-base dark:text-white opacity-1/2 mr-1.5"/>
                    <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">coming soon</span>
                  </div>
                  <div onClick={()=>(setisOpenModal(true))} className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3">
                    <MdFavoriteBorder className="inline-block hover:text-[#171923] text-base dark:text-white opacity-1/2 mr-1.5"/>
                    <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">favorite</span>
                  </div>
                 
                  
                  {openModal && <SearchPopup onClose={closeModal} />}
                  {isOpenModal && <FavoriteModal onClose={isCloseModal} text={text}/>}

                  

                
                  
                  
                  
        </div>
    );
}

export default LeftSideBer;