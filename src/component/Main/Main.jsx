import LeftSideBer from "./LeftSideBer";
import RightSideBer from "./RightSideBer";

import ProductCart from "./ProductCart";
import initialBookData from "../../assets/data/data";




export default function Main(){
    return(
        <div className="border-y  border-[#d9d9d9]">

        <div className="max-w-full mx-auto">

            <div className="grid grid-cols-12">
                
                 <LeftSideBer/>
                
                <div className="col-span-8 border-x border-[#d9d9d9]">
                    <div className="grid grid-cols-12 gap-6 mt-10 mb-5 mx-6">
                        {initialBookData().map(item =>(
                            <ProductCart key={item.id} item={item}></ProductCart>
                        ))}
                        
                        {/* <ProductCart/>
                        <ProductCart/>
                        <ProductCart/>
                        <ProductCart/>
                        <ProductCart/> */}
                   
                    </div>
                </div>
               <RightSideBer/>
            </div>
        </div>
        </div>
        )
}