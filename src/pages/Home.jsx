import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import CarouselAuto from "../components/Carousel";
import Coin from "../components/Coin";
import Header from "../components/Header";
import BackgroundCard from "../components/BackgroundCard";
import Loading from "../components/Loading";

import { Input } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

function Home() {
  const navigate = useNavigate();
  const carouselImage = [image1, image2, image3];
  const [searchItems, setSearchItems] = useState("");

  // const [loading, setLoading] = useState(true);

  // // TODO: Add useEffect to set loading to false after 0ms
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 10);

  //   return () => clearTimeout(timer);
  // }, []);

  const itemCategoies = [
    "เสื้อผ้า",
    "เครื่องสำอาง",
    "ของใช้",
    "เฟอร์นิเจอร์",
    "อาหาร",
    "ผู้ชาย",
    "ผู้หญิง",
  ];

  const receiveItems = [
    {
      name: "กระเป๋า",
      time: "วันนี้ 16:00",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "เสื้อ",
      time: "พรุ่งนี้ 7:00",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "กระโปรง",
      time: "พรุ่งนี้ 17:00",
      img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "ลิปสติก",
      time: "17 พ.ค 16:00",
      img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const newItems = [
    {
      name: "โซฟา",
      time: "$ 750",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "รองเท้า Nike",
      time: "$ 500",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "เสื้อยืด",
      time: "$ 80",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "กล้องฟิลม์",
      time: "$ 390",
      img: "https://images.unsplash.com/photo-1624192648336-ecd2d3456231?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpbSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  // if (loading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?keyword=${searchItems}`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[90%] h-auto">
        <div className="flex flex-row justify-between">
          <Header />
          <div className="flex">
            <Coin />
          </div>
        </div>
      </div>

      <CarouselAuto img={carouselImage} />

      {/* Search */}
      <div className="w-[90%] mt-5">
        <Input
          label="ค้นหา"
          icon={<IoIosSearch />}
          value={searchItems}
          onChange={(e) => {
            setSearchItems(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          labelProps={{
            className: "text-gray-400 font-noto",
          }}
          inputProps={{
            className: "text-black font-noto text-lg",
          }}
        />
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

      {/* Recieve Item section */}
      <div className="text-left w-full mb-2 mt-5 pl-[5%]">
        <h2 className="font-noto font-bold text-xl">สิ่งของที่ต้องได้รับ</h2>
      </div>
      <div className="overflow-x-scroll flex gap-3 w-[90%]">
        {receiveItems.map((item, i) => (
          <div key={i} style={{ width: "auto", height: "auto" }}>
            <BackgroundCard name={item.name} time={item.time} img={item.img} />
          </div>
        ))}
      </div>

      {/* New Item section */}

      <div className="text-left w-full mb-2 mt-5 pl-[5%]">
        <h2 className="font-noto font-bold text-xl">สินค้าใหม่</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 w-[90%]">
        {newItems.map((item, i) => (
          <BackgroundCard name={item.name} time={item.time} img={item.img} />
        ))}
      </div>
      <div className="h-[15vh] w-[100%]" />
      <Navbar />
    </div>
  );
}

export default Home;
