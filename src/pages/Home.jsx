import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import CarouselAuto from "../components/Carousel";
import Coin from "../components/Coin";
import Header from "../components/Header";
import BackgroundCard from "../components/BackgroundCard";
import DetailCard from "../components/DetailCard";
import Loading from "../components/Loading";

import { Input } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

function Home() {
  const navigate = useNavigate();
  const carouselImage = [image1, image2, image3];
  const [searchParams, setSearchParams] = useSearchParams();

  const { keyword = "", categories: categoriesParam } =
    Object.fromEntries(searchParams);

  const [searchItems, setSearchItems] = useState(keyword || "");

  const [selectedCategories, setSelectedCategories] = useState(
    categoriesParam ? categoriesParam.split(",") : []
  );

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      newItems.filter((item) => {
        const { name, category = [] } = item;
        return (
          name.includes(keyword) &&
          (selectedCategories.length === 0 ||
            category.some((cat) => selectedCategories.includes(cat)))
        );
      })
    );
  }, [keyword, selectedCategories]);

  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) => {
      const newCategories = prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category];

      setSearchParams({
        categories: newCategories.join(","),
        keyword: keyword,
      });

      return newCategories;
    });
  };

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
    "กระเป๋า",
    "รองเท้า",
    "เครื่องสำอางค์",
    "เฟอร์นิเจอร์",
    "อุปกรณ์อิเล็กทรอนิกส์",
    "ผู้ชาย",
    "ผู้หญิง",
  ];

  const receiveItems = [
    {
      name: "กระเป๋า",
      time: "วันนี้ 16:00",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: ["กระเป๋า"],
    },
    {
      name: "เสื้อ",
      time: "พรุ่งนี้ 7:00",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      category: ["เสื้อผ้า"],
    },
    {
      name: "กระโปรง",
      time: "พรุ่งนี้ 17:00",
      img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D",
      category: ["เสื้อผ้า"],
    },
    {
      name: "ลิปสติก",
      time: "17 พ.ค 16:00",
      img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D",
      category: ["เครื่องสำอางค์"],
    },
  ];

  const newItems = [
    {
      id: "1",
      name: "โซฟา",
      price: "750",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["เฟอร์นิเจอร์"],
      description:
        "โซฟาสีดำสไตล์ทันสมัยที่เหมาะสำหรับทุกบ้าน ทั้งในหรือนอกบ้าน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม โซฟาของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกบ้าน",
    },
    {
      id: "2",
      name: "รองเท้า Nike",
      price: "500",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      category: ["รองเท้า", "ผู้ชาย"],
      description:
        "รองเท้า Nike สีขาวสไตล์ทันสมัยที่เหมาะสำหรับทุกการใช้งาน ทั้งการเดินทาง, การเล่นกีฬา, หรือการใช้ในทุกวัน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม รองเท้าของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกโอกาส",
    },
    {
      id: "3",
      name: "เสื้อยืด",
      price: "80",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      category: ["เสื้อผ้า"],
      description:
        "เสื้อยืดสีดำสไตล์ทันสมัยที่เหมาะสำหรับทุกการใช้งาน ทั้งการไปทำงาน, การเดินทาง, หรือการใช้ในทุกวัน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม เสื้อยืดของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกโอกาส",
    },
    {
      id: "4",
      name: "กล้องฟิลม์",
      price: "390",
      img: "https://images.unsplash.com/photo-1624192648336-ecd2d3456231?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpbSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["อุปกรณ์อิเล็กทรอนิกส์"],
      description:
        "กล้องฟิลม์สีดำสไตล์ทันสมัยที่เหมาะสำหรับทุกการใช้งาน ทั้งการถ่ายภาพ, การถ่ายวีดีโอ, หรือการใช้ในทุกวัน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม กล้องฟิลม์ของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกโอกาส",
    },
  ];

  // if (loading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }

  useEffect(() => {
    setFilteredItems(
      newItems.filter((item) => {
        const { name, category = [] } = item;
        return (
          name.includes(keyword) &&
          (selectedCategories.length === 0 ||
            category.some((cat) => selectedCategories.includes(cat)))
        );
      })
    );
  }, [keyword, selectedCategories]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const categoriesQuery = selectedCategories.join(",");
      navigate(`/search?keyword=${searchItems}&categories=${categoriesQuery}`);
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
        <div style={{ position: "sticky", top: 0 }}>
          <Input
            label="ค้นหา"
            icon={<IoIosSearch />}
            value={searchItems}
            onChange={(e) => {
              setSearchParams({
                keyword: e.target.value,
                categories: selectedCategories.join(","),
              });
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
      </div>

      <div className="flex overflow-x-scroll space-x-2 w-[90%] mt-3 ">
        {itemCategoies.map((category, i) => (
          <button
            key={i}
            onClick={() => toggleCategory(category)}
            className={`text-black border-[1px] border-black font-medium text-xs font-noto py-3 px-7 rounded-2xl whitespace-nowrap ${
              selectedCategories.includes(category)
                ? "bg-primary border-primary text-white"
                : " bg-transparent"
            }`}
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
        {receiveItems
          .filter((item) => {
            const { name, category = [] } = item;
            return (
              name.includes(searchItems) &&
              (selectedCategories.length === 0 ||
                category.some((cat) => selectedCategories.includes(cat)))
            );
          })
          .map((item, i) => (
            <div key={i} style={{ width: "auto", height: "auto" }}>
              <BackgroundCard
                name={item.name}
                time={item.time}
                img={item.img}
              />
            </div>
          ))}
      </div>

      {/* New Item section */}

      <div className="text-left w-full mb-2 mt-5 pl-[5%]">
        <h2 className="font-noto font-bold text-xl">สินค้าใหม่</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 w-[90%]">
        {filteredItems.map((item, i) => (
          <DetailCard
            id={item.id}
            itemName={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
      <div className="h-[15vh] w-[100%]" />
      <Navbar />
    </div>
  );
}

export default Home;
