import { getImage } from "../assets/utils/getImage";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { Table } from "flowbite-react";


export function ItemTable({ addItem, handleRemoveItem ,handleDecrement,handleIncrement,quantities}) {
  // const [quantities, setQuantities] = useState(
  //   addItem.reduce((acc, item) => {
  //     acc[item.id] = 1; // Initialize all quantities to 1
  //     return acc;
  //   }, {})
  // );

  // const handleIncrement = (id) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: prev[id] + 1,
  //   }));
  // };

  // const handleDecrement = (id) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: prev[id] > 1 ? prev[id] - 1 : prev[id],
  //   }));
  // };

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
          {addItem.map((item) => (
            <Table.Row key={item.id}>
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
                  <FaMinus
                    onClick={() => handleDecrement(item.id)}
                    className="text-white cursor-pointer"
                  />
                  <span className="text-white">{quantities[item.id]}</span>
                  <FaPlus
                    onClick={() => handleIncrement(item.id)}
                    className="text-white cursor-pointer"
                  />
                </div>
              </Table.Cell>
              <Table.Cell>${quantities[item.id] * item.price}</Table.Cell>
              <Table.Cell>
                <GoTrash
                  className="cursor-pointer"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
