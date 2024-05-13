import Navbar from "../components/Navbar";

import { useState } from "react";
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";

function Sell() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

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

  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const toggleLocation = (location) => {
    setSelectedLocation((prevLocation) =>
      prevLocation.includes(location)
        ? prevLocation.filter((loc) => loc !== location)
        : [...prevLocation, location]
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center font-noto">
        <h1 className="font-noto font-bold text-2xl mt-5 mb-3">Sell</h1>
        <Card color="transparent" shadow={false}>
          <form className="mt-3 mb-2 w-[90vw]">
            <div className="mb-1 flex flex-col">
              <h4 className=" text-base">ชื่อสินค้า</h4>
              <Input
                placeholder="ใส่ชื่อสินค้าของคุณ"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[5vh]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <h4 className=" text-base mt-2">รูปถ่ายสินค้า</h4>
              <Input
                type="file"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[5vh]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <h4 className=" text-base mt-2">รายละเอียด</h4>
              <Input
                as="textarea"
                placeholder="ใส่รายละเอียดสินค้าของคุณ"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[5vh]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <h4 className=" text-base mt-2">categories</h4>
              <div className="flex overflow-x-scroll space-x-2  mt-3 ">
                {itemCategoies.map((category, i) => (
                  <button
                    key={i}
                    onClick={(event) => {
                      event.preventDefault();
                      toggleCategory(category);
                    }}
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

              <h4 className=" text-base mt-2">วันที่สะดวก</h4>
              <Input
                type="date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[5vh]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <h4 className=" text-base mt-2">เวลาที่สะดวก</h4>
              <Input
                type="time"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[5vh]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <h4 className=" text-base mt-2">สถานที่</h4>
              <div className="flex overflow-x-scroll space-x-2 w-[100%] mt-1 ">
                {itemLocation.map((location, i) => (
                  <button
                    key={i}
                    onClick={(event) => {
                      event.preventDefault();
                      toggleLocation(location);
                    }}
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

              <h4 className=" text-base mt-2">จำนวนของ</h4>
              <Input
                type="number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[5vh]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Button
                color="black"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                className="mt-5"
              >
                ขาย
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <div className="h-[15vh] w-[100%]" />
      <Navbar />
    </>
  );
}

export default Sell;
