
import { getImage } from "../assets/utils/getImage";
import { FaPlus } from "react-icons/fa";
import { Table } from "flowbite-react";
import { FaMinus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export function ItemTable({newObj}) {
  
  console.log(newObj)
  return (
    <div className="overflow-x-auto ">
      <Table >
        <Table.Head>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>quality</Table.HeadCell>
          <Table.HeadCell>total</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        
          <Table.Row >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
              <img className="w-[60px] h-[80px]" src={getImage("../../assets/book_images/1.jpg")} alt="img" />
              <div>

              <h5 className="text-xl font-medium text-white">{newObj.name}</h5>
              <span className="text-base font-light text-white">Lorem, ipsum.</span>
              </div>
            </Table.Cell>
            <Table.Cell>$30</Table.Cell>
            <Table.Cell >
                <div className="flex bg-[#595959] gap-2 py-1 px-4 rounded-full items-center">

                    <FaPlus className="text-white" />
                    <span className="text-white">1</span>
                    <FaMinus className="text-white" />
                </div>
            </Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              
              <GoTrash />
             
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    </div>
  );
}
