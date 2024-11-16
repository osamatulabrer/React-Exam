import { FaFire } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdUpcoming } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { TextInput } from "flowbite-react";
import SearchPopup from "../searchPopup";
import FavoriteModal from "../favoriteModal";
import { IoIosMenu } from "react-icons/io";

function LeftSideBer({
  onRelease,
  onUpcoming,
  onTranding,
 
  isOpenModal,
 
  onClose,
  

}) {
  const [openModal, setOpenModal] = useState(false);



  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="col-span-2 pt-8 mr-8 ml-2">
    <IoIosMenu className="text-white text-2xl text-center lg:hidden"/>
    <div className="space-y-7 hidden lg:block ">
      <div className="max-w-md hidden lg:block">
        <TextInput
          onClick={() => setOpenModal(true)}
          type="search"
          icon={CiSearch}
          placeholder="quick search..."
        />
      </div>

      <div
        onClick={() => onTranding()}
        className="hover:bg-[#00d991] rounded-md flex items-center  py-3.5 mb-7.5 px-3 "
      >
        <FaFire className="inline-block text-base dark:text-white hover:text-[#171923] mr-1.5" />
        <span className=" text-base dark:text-white hover:text-[#171923]">
          tranding
        </span>
      </div>
      <div
        onClick={() => onRelease()}
        className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 "
      >
        <CiSearch className="inline-block hover:text-[#171923] text-base dark:text-white  opacity-1/2 mr-1.5" />
        <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">
          new release
        </span>
      </div>
      <div
        onClick={() => onUpcoming()}
        className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 "
      >
        <MdUpcoming className=" hover:text-[#171923] inline-block text-base dark:text-white opacity-1/2 mr-1.5" />
        <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">
          coming soon
        </span>
      </div>
      <div
    
        className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3"
      >
        <MdFavoriteBorder className="inline-block hover:text-[#171923] text-base dark:text-white opacity-1/2 mr-1.5" />
        <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">
          favorite
        </span>
      </div>

      {openModal && <SearchPopup onClose={closeModal} />}
      {isOpenModal && (
        <FavoriteModal
         
          
          onClose={onClose}
        
        />
      )}
    </div>
    </div>
      
  );
}

export default LeftSideBer;
