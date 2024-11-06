import { FaFire } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdUpcoming } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";



function LeftSideBer() {
    return (
        <div className="space-y-7 col-span-2 pt-8">
            <div className="border border-[#5ee7ba] rounded-md flex items-center  py-3.5 mb-7.5 px-3 mr-10">
                    <CiSearch className="inline-block text-base text-[#fff] opacity-1/2 mr-1.5"/>
                    <span className=" text-base text-[#fff] opacity-1/2">Quick search...</span>
                  </div>
                  <div className="hover:bg-[#00d991] rounded-md flex items-center  py-3.5 mb-7.5 px-3 mr-10">
                    <FaFire className="inline-block text-base text-white hover:text-[#171923] mr-1.5"/>
                    <span className=" text-base text-white hover:text-[#171923]">tranding</span>
                  </div>
                  <div className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 mr-10">
                    <CiSearch className="inline-block hover:text-[#171923] text-base text-[#fff] opacity-1/2 mr-1.5"/>
                    <span className=" text-base hover:text-[#171923] text-[#fff] opacity-1/2">new release</span>
                  </div>
                  <div className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 mr-10">
                    <MdUpcoming className=" hover:text-[#171923]inline-block text-base text-[#fff] opacity-1/2 mr-1.5"/>
                    <span className=" text-base hover:text-[#171923] text-[#fff] opacity-1/2">coming soon</span>
                  </div>
                  <div className="hover:bg-[#00d991]  rounded-md flex items-center  py-3.5 mb-7.5 px-3 mr-10">
                    <MdFavoriteBorder className="inline-block hover:text-[#171923] text-base text-[#fff] opacity-1/2 mr-1.5"/>
                    <span className=" text-base hover:text-[#171923] text-[#fff] opacity-1/2">favorite</span>
                  </div>
        </div>
    );
}

export default LeftSideBer;