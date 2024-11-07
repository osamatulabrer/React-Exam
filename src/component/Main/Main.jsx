import LeftSideBer from "./LeftSideBer";
import RightSideBer from "./RightSideBer";

import BookCart from "./BookCart";
import initialBookData from "../../assets/data/data";
import { useState } from "react";





export default function Main(){
    const [bookDataFilter,setBookDataFilter] = useState(initialBookData())
    
//  book data filter function
    const sortItemsByName = ()=>{
       setBookDataFilter( bookDataFilter.toSorted((a,b)=> a.name.localeCompare(b.name)))
        
    }
    const sortItemsByRatting = ()=>{
       setBookDataFilter( bookDataFilter.toSorted((a,b)=> b.rating - a.rating))
        
    }
    const sortItemsByPrice = ()=>{
       setBookDataFilter( bookDataFilter.toSorted((a,b)=> {
        return  a.price - b.price }))
        
    }
    // conditinal rendering

    const releaseItem = ()=>{
        
        let releaseBook = bookDataFilter.filter(item =>{
            return item.status === "new_releases"
        })
        setBookDataFilter(releaseBook)
    }
    const upcommingItem = ()=>{
        
        let upcommingBook = bookDataFilter.filter(item =>{
            return item.status === "coming_soon"
        })
        setBookDataFilter(upcommingBook)
    }


    return(
        <div className="border-y  border-[#d9d9d9]">

        <div className="max-w-full mx-auto">

            <div className="grid grid-cols-12">
                
                 <LeftSideBer onRelease={releaseItem} onUpcomming={upcommingItem}/>
                
                <div className="col-span-8 border-x border-[#d9d9d9]">
                    <div className="grid grid-cols-12 gap-6 mt-10 mb-5 mx-6">
                        {bookDataFilter.map(item =>(
                            <BookCart key={item.id} item={item} ></BookCart>
                        ))}
                        
                    
                   
                    </div>
                </div>
               <RightSideBer  onFilterByName={sortItemsByName} onFilterByRatting={sortItemsByRatting} onFilterByPrice={sortItemsByPrice}/>
            </div>
        </div>
        </div>
        )
}