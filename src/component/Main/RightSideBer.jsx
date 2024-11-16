import { PiGreaterThan } from "react-icons/pi";




function RightSideBer({onSortByName,onSortByRating,onSortByPrice}) {
     
   
    return (
        <div className="col-span-2">
             <div className=" pt-10 pl-8">
                    <h5 className="text-xl font-semibold dark:text-white mb-2">filter on page</h5>
                    <ul>
                        <li onClick={()=>(onSortByName())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By name</span></li>
                        <li onClick={()=>(onSortByRating())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By ratting</span></li>
                        <li onClick={()=>(onSortByPrice())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By price</span></li>
                    </ul>


                    
                </div>
        </div>
    );
}

export default RightSideBer;