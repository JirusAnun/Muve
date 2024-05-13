import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

import { IoIosSearch } from "react-icons/io";
import { PiCaretLeftThin } from "react-icons/pi";
import { PiSlidersHorizontalThin } from "react-icons/pi";

import Coin from "../components/Coin";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { keyword, categories: categoriesParam } =
    Object.fromEntries(searchParams);

  const [selectedCategories, setSelectedCategories] = useState(
    categoriesParam ? categoriesParam.split(",") : []
  );
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      newItems.map(
        (item) =>
          item.name.includes(keyword) &&
          (selectedCategories.length === 0 ||
            item.category.some((cat) => selectedCategories.includes(cat)))
      )
    );
  }, [keyword, selectedCategories]);

  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
    setSearchParams({
      categories: selectedCategories.join(","),
      keyword: keyword,
    });
  };

  const itemCategoies = [
    "เสื้อผ้า",
    "กระเป๋า",
    "รองเท้า",
    "เครื่องสำอางค์",
    "เฟอร์นิเจอร์",
    "อุปกรณ์อิเล็กทรอนิกส์",
    "ผู้ชาย",
    "ผู้หญิง",
  ];

  const newItems = [
    {
      name: "โซฟา",
      price: "750",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["เฟอร์นิเจอร์"],
    },
    {
      name: "รองเท้า Nike",
      price: "500",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      category: ["รองเท้า", "ผู้ชาย"],
    },
    {
      name: "เสื้อยืด",
      price: "80",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      category: ["เสื้อผ้า"],
    },
    {
      name: "กล้องฟิลม์",
      price: "390",
      img: "https://images.unsplash.com/photo-1624192648336-ecd2d3456231?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpbSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["อุปกรณ์อิเล็กทรอนิกส์"],
    },
  ];

  useEffect(() => {
    let newFilteredItems = newItems.filter((item) =>
      item.name.includes(keyword)
    );

    if (selectedCategories.length > 0) {
      newFilteredItems = newFilteredItems.filter((item) =>
        item.category.some((cat) => selectedCategories.includes(cat))
      );
    }

    setFilteredItems(newFilteredItems);
  }, [keyword, selectedCategories]);

  return (
    <div className="flex flex-col items-center font-noto">
      <div className="w-[90%] h-auto">
        <div className="flex flex-row justify-between">
          <Header />
          <div className="flex">
            <Coin />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-row justify-center items-center w-[90%]">
        <button onClick={() => navigate("/")}>
          {" "}
          <PiCaretLeftThin className="w-[30px] h-[30px] text-black mr-5" />
        </button>
        <div className="w-[70%] mr-5">
          <Input
            label="ค้นหา"
            icon={<IoIosSearch />}
            value={searchParams.get("keyword")}
            onChange={(e) => {
              setSearchParams({ keyword: e.target.value });
            }}
            labelProps={{
              className: "text-gray-400 font-noto",
            }}
            inputProps={{
              className: "text-black font-noto",
            }}
          />
        </div>
        <PiSlidersHorizontalThin className="w-[30px] h-[30px] text-black" />
      </div>

      <div className="flex overflow-x-scroll space-x-2 w-[90%] mt-3 ">
        {itemCategoies.map((category, i) => (
          <button
            key={i}
            onClick={() => toggleCategory(category)}
            className={`text-white font-light text-xs font-noto py-3 px-7 rounded-2xl whitespace-nowrap ${
              selectedCategories.includes(category) ? "bg-primary" : "bg-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex w-[90%] mt-3">
        <p className="border-b-[1px] border-gray-800 font-light text-sm">
          {filteredItems.length} items found
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-[90%] mt-3">
        {filteredItems.map((item, i) => (
          <DetailCard
            key={i}
            itemName={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="flex flex-col w-[80%] justify-center items-center text-center mt-8">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-dog-outline-illustration_23-2149277839.jpg?t=st=1715615838~exp=1715619438~hmac=574290417d024c53063bf003fdcc0b57d535642e81c890625ffaf8bc87caa150&w=1800"
            alt="Not found"
            className="w-[80%] h-[80%]"
          />
          <h4 className=" font-bold text-lg">"{keyword}" Not found</h4>
          <p>
            No search results found. Please try again with a different keyword.
          </p>{" "}
        </div>
      )}

      <div className="h-[5vh] w-[100%]" />
    </div>
  );
}

export default Search;
