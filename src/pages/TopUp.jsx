import { BsCoin } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { PiCaretLeftThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function TopUp() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center font-noto">
      <div className="flex justify-center items-center">
        <div className="absolute left-0 ml-5">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <PiCaretLeftThin className="w-[30px] h-[30px] text-black mr-5" />
          </button>
        </div>
        <h1 className="font-noto font-bold text-2xl mt-5 mb-3">Top Up</h1>
      </div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 w-[90%] h-auto rounded-xl text-white">
        {" "}
        <div className="flex justify-end mr-5 mt-3">
          <h4 className=" text-xl font-extrabold">Muwe</h4>
        </div>
        <div className="flex flex-col justify-start ml-5 mt-5">
          <h4 className=" text-xl font-semibold">Jiruschai Anuntabundit</h4>
          <h4 className=" text-sm font-light">{currentDate}</h4>
          <h4 className=" text-2xl font-semibold w-[100%] mt-5">
            <div className="flex items-center w-[100%] mb-5">
              <BsCoin className="text-yellow-600 mr-2" />
              1,000
            </div>
          </h4>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center border-[1px] w-[90%] border-black rounded-xl mt-5">
        <h3 className=" text-lg font-medium mt-3">เติมเงิน</h3>
        <div className="w-[100%] flex justify-start mt-3">
          <div className="flex flex-row gap-x-5 ml-5">
            <Button>100</Button>
            <Button>500</Button>
            <Button>1,000</Button>
          </div>
        </div>
        <div className="w-[90%] mt-5 mb-5 flex flex-row">
          <div className="w-[70%] mr-3">
            <Input label="ใส่จำนวนเงิน" className="h-10" />
          </div>
          <div className="w-[20%]">
            <Button className=" h-10 w-20 flex justify-center items-center">
              <FaCheck className=" text-white" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center border-[1px] w-[90%] border-black rounded-xl mt-5">
        <h3 className=" text-lg font-medium mt-3">ถอนเงิน</h3>
        <div className="w-[100%] flex justify-start mt-3">
          <div className="flex flex-row gap-x-5 ml-5">
            <Button>100</Button>
            <Button>500</Button>
            <Button>1,000</Button>
          </div>
        </div>
        <div className="w-[90%] mt-5 mb-5 flex flex-row">
          <div className="w-[70%] mr-3">
            <Input label="ใส่จำนวนเงิน" className="h-10" />
          </div>
          <div className="w-[20%]">
            <Button className=" h-10 w-20 flex justify-center items-center">
              <FaCheck className=" text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopUp;
