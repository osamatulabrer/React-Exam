import { PiGreaterThan } from "react-icons/pi";




function RightSideBer({onFilterByName,onFilterByRatting,onFilterByPrice}) {
     
   
    return (
        <div className="col-span-2">
             <div className=" pt-10 pl-8">
                    <h5 className="text-xl font-semibold dark:text-white mb-2">filter on page</h5>
                    <ul>
                        <li onClick={()=>(onFilterByName())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By name</span></li>
                        <li onClick={()=>(onFilterByRatting())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By ratting</span></li>
                        <li onClick={()=>(onFilterByPrice())} className="text-lg dark:text-white cursor-pointer"><PiGreaterThan className="inline-block" /> <span>By price</span></li>
                    </ul>


                    
                </div>
        </div>
    );
}

export default RightSideBer;