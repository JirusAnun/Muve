import Navbar from "../components/Navbar";
import CarouselAuto from "../components/Carousel";
import { BackgroundCard } from "../components/BackgroundCard";
import { Input } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";

function Home() {
  const carouselImage = [
    "src/assets/95100659_2948213515262602_5117867185779245056_n.jpg",
    "src/assets/440441680_907998344669741_4758802302467900004_n.jpg",
  ];

  const itemCategoies = [
    "เสื้อผ้า",
    "เครื่องสำอาง",
    "ของใช้",
    "เฟอร์นิเจอร์",
    "อาหาร",
    "ผู้ชาย",
    "ผู้หญิง",
  ];

  const items = [
    {
      "name" : "กระเป๋า",
      "time" : "วันนี้ 16:00",
      "img" : "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "name" : "เสื้อ",
      "time" : "พรุ่งนี้ 7:00",
      "img" : "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "name" : "กระโปรง",
      "time" : "พรุ่งนี้ 17:00",
      "img" : "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "name" : "เสื้อกาวน์",
      "time" : "16:00 17 พ.ค",
      "img" : "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  

  return (
    <>
      <div className="flex flex-col items-center">
        <CarouselAuto img={carouselImage} />

        {/* Search */}
        <div className="w-[90%] mt-5">
          <Input
            label="ค้นหา"
            icon={<IoIosSearch />}
            labelProps={{
              className: "text-gray-400 font-noto",
            }}
            inputProps={{
              className: "text-black font-noto",
            }}
          />
        </div>
        <div class="flex overflow-x-scroll space-x-2 w-[90%] mt-3 ">
          {itemCategoies.map((category, i) => (
            <button class=" bg-gray-900 hover:bg-primary text-white font-light text-xs font-noto py-3 px-7 rounded-2xl whitespace-nowrap">
              {category}
            </button>
          ))}
        </div>

        {/* Recieve Item section */}
        <div className="text-left w-full mb-2 mt-5 pl-[5%]">
          <h2 className="font-noto font-bold text-xl">สิ่งของที่ต้องได้รับ</h2>
        </div>
        <div className="overflow-x-scroll flex gap-3 w-[90%]">
          {items.map((item, i) => (
            <div key={i} style={{ width: "auto", height: "auto" }}>
              <BackgroundCard name={item.name} time={item.time} img={item.img}/>
            </div>
          ))}
        </div>  

        {/* New Item section */}

        <div className="text-left w-full mb-2 mt-5 pl-[5%]">
          <h2 className="font-noto font-bold text-xl">สินค้าใหม่</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 w-[90%]">
          {items.map((item, i) => (
            <BackgroundCard name={item.name} time={item.time} img={item.img}/>
          ))}
        </div>
        <div className="h-[15vh] w-[100%]" />
        <Navbar />
      </div>
    </>
  );
}

export default Home;
