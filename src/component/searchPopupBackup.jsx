import { CiSearch } from "react-icons/ci";
import {  TextInput } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import initialBookData from "../assets/data/data";
import { getImage } from "../assets/utils/getImage";


export default function SearchPopup({onClose}){
    const [searchData,setSearchData] = useState('')
    const [filterData,setFilterData] = useState(initialBookData())

    const handleSearch = (e)=>{
        setSearchData(e.target.value)
        setFilterData(filterData.filter(item => {
            return item.name.toLowerCase().includes(searchData.toLocaleLowerCase())
        }))
    }
    console.log(searchData)

 
    return(
            <div className="fixed top-1/4 left-1/4 bg-[#171923] p-5 space-y-3 rounded-md w-5/12 h-96">
               
               <RxCross2 className="text-white text-xl cursor-pointer" onClick={()=>(onClose())}/>
                <div className="max-w-md mx-auto  ">
      
                    <TextInput  type="search" icon={CiSearch} onKeyUp={handleSearch}   placeholder="Type your favorite book name here ..." className=""/>
             </div>
             
               {filterData.length > 0 ? filterData.map(item =>{
                   
                return <div key={item.id} className="flex  space-y-3">
                <img src={getImage(`../assets/book_images/${item.image}`)} alt="img" />
                <div>
                    <h6 className="text-white text-lg font-semibold">{item.name}</h6>
                    <p className="text-white text-sm">{item.author}</p>
                    <span className="text-white text-sm">BDT: {item.price} TK</span>
                </div>
            </div>
               }) : <p className="text-slate-700 text-3xl font-bold text-center">no data found</p>}
             
               
        </div>
    )
}