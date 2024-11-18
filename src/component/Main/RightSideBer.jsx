import { PiGreaterThan } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import RightSideModal from "../../assets/modal/RightSideModal";
import { useState } from "react";


function RightSideBer({onSortByName,onSortByRating,onSortByPrice}) {
     
    const [showRightSide, setShowRightSide] = useState(false);
    return (
        <div className="col-span-2">
               <IoIosMenu onClick={() =>(setShowRightSide(true))} className="dark:text-white da text-2xl mx-auto my-3 lg:hidden"/>
             <div className=" pt-10 pl-8 hidden lg:block ">
                    <h5 className="text-xl font-semibold dark:text-white mb-2">filter on page</h5>
                    <ul>
                        <li onClick={()=>(onSortByName())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By name</span></li>
                        <li onClick={()=>(onSortByRating())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By ratting</span></li>
                        <li onClick={()=>(onSortByPrice())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By price</span></li>
                    </ul>


                    
                </div>
               
                {showRightSide &&  <RightSideModal onClose={() => (setShowRightSide(false))} onSortByName={onSortByName} onSortByPrice={onSortByPrice} onSortByRating={onSortByRating}/>}
        </div>
    );
}

export default RightSideBer;