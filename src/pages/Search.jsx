import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { PiCaretLeftThin } from "react-icons/pi";
import { PiSlidersHorizontalThin } from "react-icons/pi";

import Coin from "../components/Coin";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";

import {
  Input,
  Drawer,
  Button,
  Typography,
  IconButton,
  Slider,
} from "@material-tailwind/react";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { keyword, categories: categoriesParam } =
    Object.fromEntries(searchParams);

  const [selectedCategories, setSelectedCategories] = useState(
    categoriesParam ? categoriesParam.split(",") : []
  );

  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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

  const toggleLocation = (location) => {
    setSelectedLocation((prevLocation) =>
      prevLocation.includes(location)
        ? prevLocation.filter((loc) => loc !== location)
        : [...prevLocation, location]
    );
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

  const itemLocation = [
    "ประตู 4",
    "ประตู 3",
    "หน้ามหาวิทยาลัย",
    "ตั้งสิน",
    "ในมหาวิทยาลัย",
    "MLC",
    "ซอยสหพร",
  ];

  const newItems = [
    {
      name: "โซฟา",
      price: "750",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["เฟอร์นิเจอร์"],
      location: ["ประตู 4", "ประตู 3"],
    },
    {
      name: "รองเท้า Nike",
      price: "500",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      category: ["รองเท้า", "ผู้ชาย"],
      location: ["หน้ามหาวิทยาลัย", "ตั้งสิน"],
    },
    {
      name: "เสื้อยืด",
      price: "80",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      category: ["เสื้อผ้า"],
      location: ["ในมหาวิทยาลัย", "MLC"],
    },
    {
      name: "กล้องฟิลม์",
      price: "390",
      img: "https://images.unsplash.com/photo-1624192648336-ecd2d3456231?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpbSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["อุปกรณ์อิเล็กทรอนิกส์"],
      location: ["ซอยสหพร"],
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

    if (selectedLocation.length > 0) {
      newFilteredItems = newFilteredItems.filter((item) =>
        item.location.some((loc) => selectedLocation.includes(loc))
      );
    }

    setFilteredItems(newFilteredItems);
  }, [keyword, selectedCategories, selectedLocation]);

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
        <button
          onClick={() => {
            navigate("/");
          }}
        >
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
        <PiSlidersHorizontalThin
          onClick={openDrawer}
          className="w-[30px] h-[30px] text-black"
        />
      </div>

      <Drawer
        open={open}
        placement="bottom"
        onClose={closeDrawer}
        className="p-4 rounded-t-3xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex-grow text-center">
            <h4 className=" font-bold text-lg pl-7">Filter</h4>
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* TODO:add content here */}

        <div className="w-full h-3">
          <h4 className="font-semibold text-base text-center">Categories</h4>
          <div className="flex overflow-x-scroll space-x-2 w-[100%] mt-3 ">
            {itemCategoies.map((category, i) => (
              <button
                key={i}
                onClick={() => toggleCategory(category)}
                className={`text-black font-medium text-xs font-noto py-3 px-7 border-[1px] border-black rounded-2xl whitespace-nowrap ${
                  selectedCategories.includes(category)
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <h4 className="font-semibold text-base text-center mt-3">Location</h4>
          <div className="flex overflow-x-scroll space-x-2 w-[100%] mt-1 ">
            {itemLocation.map((location, i) => (
              <button
                key={i}
                onClick={() => toggleLocation(location)}
                className={`text-black font-medium text-xs font-noto py-3 px-7 border-[1px] border-black rounded-2xl whitespace-nowrap ${
                  selectedLocation.includes(location)
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent"
                }`}
              >
                {location}
              </button>
            ))}
          </div>

          <h4 className="font-semibold text-base text-center mt-3">Price</h4>
          <div className="flex justify-center">
            <div className="w-[90%]">
              <Slider defaultValue={50} />
            </div>
          </div>
        </div>
      </Drawer>

      <div className="flex overflow-x-scroll space-x-2 w-[90%] mt-3 ">
        {itemCategoies.map((category, i) => (
          <button
            key={i}
            onClick={() => toggleCategory(category)}
            className={`text-black font-light text-xs font-noto py-3 px-7 border-[1px] border-black rounded-2xl whitespace-nowrap ${
              selectedCategories.includes(category)
                ? "bg-primary border-primary text-white"
                : " bg-transparent"
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
