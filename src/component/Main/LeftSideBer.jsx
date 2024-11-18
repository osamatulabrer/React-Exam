import { FaFire } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdUpcoming } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { TextInput } from "flowbite-react";
import SearchPopup from "../../assets/modal/searchPopup";
import { IoIosMenu } from "react-icons/io";
import LeftSideModal from "../../assets/modal/leftSideModal";

function LeftSideBer({ onRelease, onUpcoming, onTranding }) {
  const [openModal, setOpenModal] = useState(false);
  const [showSideBer, setShowSideBer] = useState(false);

  return (
    <div className="col-span-2 ">
      <IoIosMenu
        className="dark:text-white text-2xl mx-auto my-3 lg:hidden"
        onClick={() => setShowSideBer(true)}
      />
      <div className="space-y-7 hidden lg:block pt-10 px-2">
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
        <div className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3">
          <MdFavoriteBorder className="inline-block hover:text-[#171923] text-base dark:text-white opacity-1/2 mr-1.5" />
          <span className=" text-base hover:text-[#171923] dark:text-white opacity-1/2">
            favorite
          </span>
        </div>

        {openModal && <SearchPopup onClose={() => setOpenModal(false)} />}
      </div>
      {showSideBer && <LeftSideModal onClose={() => setShowSideBer(false)} onRelease={onRelease} onTranding={onTranding} onUpcoming={onUpcoming}/>}
    </div>
  );
}

export default LeftSideBer;
