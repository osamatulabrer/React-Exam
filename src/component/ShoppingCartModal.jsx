
import { RxCross2 } from "react-icons/rx";
import { ItemTable } from "./Table";
import {  Modal } from "flowbite-react";
import { useState } from "react";

export function ShoppingCartModal({onClose}) {
  
  const [openModal, setOpenModal] = useState(true);
  const handleClick = ()=>{
    onClose()
  }

  return (
    <>
     
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="bg-[#171923] w-[900px] rounded-md p-5">
          <RxCross2 className="text-white text-right text-2xl cursor-pointer" onClick={handleClick}/>
          <h2 className='text-center text-white text-3xl mb-3'>Your Carts</h2>
          
        <div className='flex gap-3'>
          
           <ItemTable  ></ItemTable>
          
           <div>

           <div className="bg-[#8c8c8c] bg-opacity-26 w-[250px] capitalize" >
              <div className=" text-center border-b border-[#bfbfbf] py-2"><h4>Order summary</h4></div>
              <div className="py-2 px-3">
                <div className='flex justify-between'>
                  <span>subTotal</span>
                  <span>$600</span>
                </div>
                <div className='flex justify-between'>
                  <span>shopping</span>
                  <span>free</span>
                </div>
              
              </div>
              <div className='flex justify-between bg-[#8c8c8c] bg-opacity-30 border-t py-2 border-[#bfbfbf] px-3'>
                  <span>total</span>
                  <span>$300</span>
                </div>
           </div>
           <div className="capitalize bg-[#0dd991] py-1.5 text-center mt-2 ">checkout</div>
           </div>
       
        </div>
        </div>
      </Modal>
    </>
  );
}
