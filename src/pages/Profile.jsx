import Navbar from "../components/Navbar";
import { GoPerson } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscHistory } from "react-icons/vsc";
import { BsCalendarDate } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { HiLanguage } from "react-icons/hi2";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-noto font-bold text-2xl mt-5 mb-3">Profile</h1>

        <div className="w-[90%] h-auto flex border-2 font-noto text-lg rounded-xl mt-3">
          <img
            src="https://randomuser.me/api/portraits/men/17.jpg"
            alt=""
            className="w-[80px] h-[80px] object-fit rounded-xl m-3 border-2"
          />

          <div className=" ml-2 mt-1 flex flex-col justify-center pr-5">
            <h3 className="font-bold text-base">Jiruschai Anuntabundit</h3>
            <p className=" font-light text-xs">Hamjiruschai@gmail.com</p>
          </div>
        </div>

        <div className="w-[90%] h-auto flex flex-col border-2 font-noto text-lg rounded-xl mt-5 pb-3">
          <div>
            <h3 className=" font-bold text-base ml-5 mt-5 mb-2">General</h3>
          </div>
          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <GoPerson className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm ">Personal Details</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <HiOutlineShoppingBag className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">My Order</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <VscHistory className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">Order History</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <BsCalendarDate className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">Available Date</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>
        </div>

        <div className="w-[90%] h-auto flex flex-col border-2 font-noto text-lg rounded-xl mt-5 pb-3">
          <div>
            <h3 className=" font-bold text-base ml-5 mt-5 mb-2">Setting</h3>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <IoSettingsOutline className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">Setting</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <HiLanguage className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">Language</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <MdOutlinePrivacyTip className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">Privacy & Policy</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>

          <div className="flex flex-row items-center ml-5 p-3 w-full">
            <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center">
              <BsTelephone className=" w-[20px] h-[20px]" />
            </div>
            <p className="mt-1 ml-5 flex-grow text-sm">Contact Us</p>
            <div className="flex w-[15vw] justify-center items-center mt-1 mr-3">
              <GrFormNext className="w-[20px] h-[20px] text-gray-800" />
            </div>
          </div>
        </div>

        <button className=" w-[90%] border-[1px] border-red-600 text-red-600 rounded-xl mt-5 font-noto font-semibold py-1">Log Out</button>
      </div>
      <div className="h-[15vh] w-[100%]" />
      <Navbar />
    </>
  );
}

export default Profile;
