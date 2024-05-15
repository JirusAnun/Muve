import { useNavigate, useParams } from "react-router-dom";
import { PiCaretLeftThin } from "react-icons/pi";
import Coin from "../components/Coin";
import { Button } from "@material-tailwind/react";
import { BsCoin } from "react-icons/bs";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      id: "1",
      name: "โซฟา",
      price: "750",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
      category: ["เฟอร์นิเจอร์"],
      location: ["ประตู 4", "ประตู 3"],
      description:
        "โซฟาสีดำสไตล์ทันสมัยที่เหมาะสำหรับทุกบ้าน ทั้งในหรือนอกบ้าน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม โซฟาของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกบ้าน",
    },
    {
      id: "2",
      name: "รองเท้า Nike",
      price: "500",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      category: ["รองเท้า", "ผู้ชาย"],
      location: ["หน้ามหาวิทยาลัย", "ตั้งสิน"],
      description:
        "รองเท้า Nike สีขาวสไตล์ทันสมัยที่เหมาะสำหรับทุกการใช้งาน ทั้งการเดินทาง, การเล่นกีฬา, หรือการใช้ในทุกวัน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม รองเท้าของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกโอกาส",
    },
    {
      id: "3",
      name: "เสื้อยืด",
      price: "80",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      category: ["เสื้อผ้า"],
      location: ["ในมหาวิทยาลัย", "MLC"],
      description:
        "เสื้อยืดสีดำสไตล์ทันสมัยที่เหมาะสำหรับทุกการใช้งาน ทั้งการไปทำงาน, การเดินทาง, หรือการใช้ในทุกวัน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม เสื้อยืดของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกโอกาส",
    },
    {
      id: "4",
      name: "กล้องฟิลม์",
      price: "390",
      img: "https://images.unsplash.com/photo-1624192648336-ecd2d3456231?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpbSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      location: ["ซอยสหพร"],
      category: ["อุปกรณ์อิเล็กทรอนิกส์"],
      description:
        "กล้องฟิลม์สีดำสไตล์ทันสมัยที่เหมาะสำหรับทุกการใช้งาน ทั้งการถ่ายภาพ, การถ่ายวีดีโอ, หรือการใช้ในทุกวัน ด้วยคุณภาพที่ทนทานและดีไซน์ที่สวยงาม กล้องฟิลม์ของเราจะทำให้คุณดูสง่างามและมีสไตล์ในทุกโอกาส",
    },
  ];

  const data = items.find((item) => item.id === id);

  return (
    <div className="flex flex-col items-center font-noto">
      <div className="w-[90%] h-auto">
        <div className="flex flex-row justify-between">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <PiCaretLeftThin className="w-[30px] h-[30px] text-black mr-5 mt-5" />
          </button>
          <div className="flex">
            <Coin />
          </div>
        </div>
      </div>

      <img
        src={data.img}
        alt="product"
        className="w-[45vh] h-[45vh] mt-5 object-cover rounded-3xl"
      />
      <div className="flex flex-row items-center w-[85%] h-[5vh] mt-5">
        <h2 className=" text-2xl font-bold w-[70%]">{data.name}</h2>
        <Button className="w-[30%] text-sm p-[5px]">ผู้ขาย</Button>
      </div>
      <h2 className=" text-xl font-medium w-[85%]">
        <div className="flex flex-row items-center">
          <BsCoin className="text-black mr-2" />
          {data.price}
        </div>
      </h2>
      <p className=" text-sm mt-3 w-[85%]">{data.description}</p>
      <Button className=" w-[85%] text-lg p-[10px] mt-5">ซื้อ</Button>
    </div>
  );
}

export default Product;
