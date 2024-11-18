import { PiGreaterThan } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";




function RightSideModal({onSortByName,onSortByRating,onSortByPrice,onClose}) {
     
   
    return (
        <div className="absolute top-[140px] right-0 bg-[#171923] rounded-md p-3 h-full shadow-md">
                <RxCross2
                className="text-white text-xl cursor-pointer ml-auto hover:rotate-180"
                onClick={() => onClose()}
                />
             <div className="p-6">
                    <h5 className="text-xl font-semibold text-white mb-2">filter on page</h5>
                    <ul>
                        <li onClick={()=>(onSortByName())} className="text-lg text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By name</span></li>
                        <li onClick={()=>(onSortByRating())} className="text-lg text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By ratting</span></li>
                        <li onClick={()=>(onSortByPrice())} className="text-lg text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By price</span></li>
                    </ul>


                    
                </div>
               
        </div>
    );
}

export default RightSideModal;