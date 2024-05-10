import Navbar from "../components/Navbar";
import CarouselAuto from "../components/Carousel";
import { BackgroundCard } from "../components/BackgroundCard";
import { Input } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@material-tailwind/react";

function Root() {
  const carouselImage = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
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
        <div class="flex overflow-x-auto space-x-2 w-[90%] mt-2 ">
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
          <Button variant="filled">filled</Button>
        </div>

        {/* Recieve Item section */}
        <div className="text-left w-full mb-2 mt-5 pl-[5%]">
          <h2 className="font-noto font-bold text-xl">สิ่งของที่ต้องได้รับ</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 w-[90%]">
          {new Array(2).fill("").map((_, i) => (
            <BackgroundCard key={i} />
          ))}
        </div>

        {/* New Item section */}

        <div className="text-left w-full mb-2 mt-5 pl-[5%]">
          <h2 className="font-noto font-bold text-xl">สินค้าใหม่</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 w-[90%]">
          {new Array(4).fill("").map((_, i) => (
            <BackgroundCard key={i} />
          ))}
        </div>
        <div className="h-[15vh] w-[100%]"/>
        <Navbar />
      </div>
    </>
  );
}

export default Root;
