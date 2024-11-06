

import { FaHeart } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { getImage } from "../assets/utils/getImage";


export function ProductDetailModal({isOpenModal}) {
  // const [closeModal, setCloseModal] = useState(true);
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
     
      <Modal className="w-[1000px]" show={openModal}  onClose={() => setOpenModal(!openModal)}>
        {/* <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer> */}
        <div className="flex bg-[#1e293b] rounded-sm">
          <div className="m-6 space-y-4">
            <h2 className="text-4xl text-white">Prenlter Prestion Pssquik</h2>
            <span className="text-lg text-white my-2">Comedy/Drama</span>
            <p className="text-lg text-white">When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the  journey, readers are reminded of the importance of reaching out and finding support in others.</p>
            <div className="flex gap-3">
              <div className="text-base font-medium bg-[#0dd991] rounded flex justify-center items-center px-8">$140 | Add to cart </div>
              <div className="w-[52px] h-[48px] rounded border border-[#0dd991] flex justify-center items-center"><FaHeart className="text-base text-[#0dd991]"/></div>
              <button className="bg-white font-semibold uppercase shadow-sm rounded px-3" onClick={() => setOpenModal(!openModal)}>close</button>
            </div>
          </div>
          <div className="w-[450px]">
            <img className="h-full w-[full]"  src={getImage("../../assets/book_images/1.jpg")} alt="img" />
          </div>
        </div>
        
      </Modal>
    </>
  )
}
