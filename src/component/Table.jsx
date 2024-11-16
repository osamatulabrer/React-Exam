import { getImage } from "../assets/utils/getImage";
import { FaPlus } from "react-icons/fa";
import { Table } from "flowbite-react";
import { FaMinus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { useState } from "react";


export function ItemTable({ addItem,handleRemoveItem, }) {
const[quantity,setQuantity] = useState(1)


const handleDecrement = () => {
  setQuantity((prev) => {
    if (prev > 1) {
      return prev - 1;
    }
    return prev; // ensure num doesn't go below 1
  });
};

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {addItem.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
                <img
                  className="w-[60px] h-[80px]"
                  src={getImage(`../../assets/book_images/${item.image}`)}
                  alt="Product"
                />
                <div>
                  <h5 className="text-lg font-medium text-white">{item.name}</h5>
                  <span className="text-md font-light text-white">{item.author}</span>
                </div>
              </Table.Cell>
              <Table.Cell>${item.price}</Table.Cell>
              <Table.Cell>
                <div className="flex bg-[#595959] gap-2 py-1 px-4 rounded-full items-center">
                  <FaMinus onClick={()=> (handleDecrement)} className="text-white cursor-pointer" />
                  <span className="text-white">{quantity}</span>
                  <FaPlus onClick={()=>(setQuantity(quantity + 1))} className="text-white cursor-pointer" />
                </div>
              </Table.Cell>
              <Table.Cell>${quantity * item.price}</Table.Cell>
              <Table.Cell>
                <GoTrash className="cursor-pointer" onClick={()=> (handleRemoveItem(item.id))}/>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
