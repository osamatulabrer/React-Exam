import { FaFire } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdUpcoming } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { TextInput } from "flowbite-react";
import SearchPopup from "./searchPopup";
import { RxCross2 } from "react-icons/rx";

function LeftSideModal({
  onRelease,
  onUpcoming,
  onTranding,
  onClose
 


}) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="absolute top-[140px] left-0 bg-[#171923] rounded-md p-3 transition duration-600">
    <RxCross2
        className="text-white text-xl cursor-pointer ml-auto my-3 hover:rotate-180"
        onClick={() => onClose()}
      />
      <div className='space-y-7  pt-10 px-2'>
        <div className="max-w-md ">
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
          <FaFire className="inline-block text-base text-white hover:text-[#171923] mr-1.5" />
          <span className=" text-base text-white hover:text-[#171923]">
            tranding
          </span>
        </div>
        <div
          onClick={() => onRelease()}
          className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 "
        >
          <CiSearch className="inline-block hover:text-[#171923] text-base text-white  opacity-1/2 mr-1.5" />
          <span className=" text-base hover:text-[#171923] text-white opacity-1/2">
            new release
          </span>
        </div>
        <div
          onClick={() => onUpcoming()}
          className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 "
        >
          <MdUpcoming className=" hover:text-[#171923] inline-block text-base text-white opacity-1/2 mr-1.5" />
          <span className=" text-base hover:text-[#171923] text-white opacity-1/2">
            coming soon
          </span>
        </div>
        <div
       
          className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3"
        >
          <MdFavoriteBorder className="inline-block hover:text-[#171923] text-base text-white opacity-1/2 mr-1.5" />
          <span className=" text-base hover:text-[#171923] text-white opacity-1/2">
            favorite
          </span>
        </div>

        {openModal && <SearchPopup onClose={closeModal} />}
       
      </div>
    </div>
  );
}

export default LeftSideModal;
