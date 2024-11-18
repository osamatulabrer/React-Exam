import { RxCross2 } from "react-icons/rx";
import { ItemTable } from "../../component/Table";
import { Modal } from "flowbite-react";
import { useState } from "react";

export function ShoppingCartModal({ addItem, modalClose, handleRemoveItem }) {
  const [openModal, setOpenModal] = useState(true);

  // Initialize quantities dynamically based on items
  const [quantities, setQuantities] = useState(
    addItem.reduce((acc, item) => {
      acc[item.id] = 1; // Default quantity is 1 for each item
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : prev[id],
    }));
  };

  // Calculate total dynamically
  const calculateTotal = () =>
    addItem.reduce((total, item) => total + item.price * quantities[item.id], 0);

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg">
      <div className="bg-[#171923] rounded-md p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-3xl">Your Cart</h2>
          <RxCross2
            className="text-white text-2xl cursor-pointer"
            onClick={() => modalClose()}
          />
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Items Table */}
          <div className="lg:col-span-2">
            <ItemTable
              addItem={addItem}
              handleRemoveItem={handleRemoveItem}
              handleDecrement={handleDecrement}
              quantities={quantities}
              handleIncrement={handleIncrement}
            />
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-800 bg-opacity-70 rounded-md shadow-md p-4">
              <h4 className="text-white text-lg font-medium mb-4 text-center">
                Order Summary
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between text-white">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Shipping</span>
                  <span>free</span>
                </div>
                <div className="border-t border-gray-700 mt-3 pt-3 flex justify-between text-white font-bold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-[#0dd991] text-white font-semibold rounded hover:bg-[#0bc380] transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
