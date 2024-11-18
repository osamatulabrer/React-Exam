import { CiSearch } from "react-icons/ci";
import { TextInput } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import initialBookData from "../data/data";
import { getImage } from "../utils/getImage";

export default function SearchPopup({ onClose }) {
  const [searchData, setSearchData] = useState("");
  const [filterData, setFilterData] = useState(initialBookData());

  // Update filterData whenever searchData changes
  useEffect(() => {
    setFilterData(
      initialBookData().filter((item) =>
        item.name.toLowerCase().includes(searchData.toLowerCase())
      )
    );
  }, [searchData]);

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="fixed top-1/4 left-1/4 bg-[#171923] p-5 space-y-3 rounded-md w-5/12 h-96">
      <RxCross2
        className="text-white text-xl cursor-pointer"
        onClick={() => onClose()}
      />
      <div className="max-w-md mx-auto">
        <TextInput
          type="search"
          icon={CiSearch}
          onKeyUp={handleSearch}
          placeholder="Type your favorite book name here ..."
          className=""
        />
      </div>
      {filterData.length > 0 ? (
        filterData.map((item) => (
          <div key={item.id} className="flex space-y-3">
            <img
              src={getImage(`../assets/book_images/${item.image}`)}
              alt="img"
            />
            <div>
              <h6 className="text-white text-lg font-semibold">{item.name}</h6>
              <p className="text-white text-sm">{item.author}</p>
              <span className="text-white text-sm">BDT: {item.price} TK</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-slate-700 text-3xl font-bold text-center">
          No data found
        </p>
      )}
    </div>
  );
}
