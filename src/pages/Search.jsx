import { useSearchParams, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";

import { IoIosSearch } from "react-icons/io";
import { PiCaretLeftThin } from "react-icons/pi";
import { PiSlidersHorizontalThin } from "react-icons/pi";

import Coin from "../components/Coin";
import Header from "../components/Header";
import DetailCard from "../components/DetailCard";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  //find query use "searchParams.get("keyword")"

  const navigate = useNavigate();

  const itemCategoies = [
    "เสื้อผ้า",
    "เครื่องสำอาง",
    "ของใช้",
    "เฟอร์นิเจอร์",
    "อาหาร",
    "ผู้ชาย",
    "ผู้หญิง",
  ];

  const newItems = [
    {
      name: "โซฟา",
      price: "$ 750",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "รองเท้า Nike",
      price: "$ 500",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "เสื้อยืด",
      price: "$ 80",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "กล้องฟิลม์",
      price: "$ 390",
      img: "https://images.unsplash.com/photo-1624192648336-ecd2d3456231?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpbSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

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
        <button onClick={() => navigate(-1)}>
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
            className="bg-gray-900 hover:bg-primary text-white font-light text-xs font-noto py-3 px-7 rounded-2xl whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex w-[90%] mt-3">
        <p className=" border-b-[1px] border-gray-800 font-light text-sm">
          12 items found
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-[90%] mt-3">
        {newItems.map((item, i) => (
          <DetailCard itemName={item.name} price={item.price} img={item.img} />
        ))}
      </div>

      <div className="h-[15vh] w-[100%]" />
    </div>
  );
}

export default Search;
