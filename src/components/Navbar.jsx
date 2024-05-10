import { GoHome } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

function Navbar() {
  return (
    <>
      <div class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600 rounded-t-3xl">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            class="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <GoHome className=" w-[50%] h-[50%] group-hover:text-primary text-gray-400" />
            <p className=" font-noto mt-1 text-xs font-medium group-hover:text-primary text-gray-400">
              Home
            </p>
          </button>

          <button
            data-tooltip-target="tooltip-bookmark"
            type="button"
            class="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <BiCategoryAlt className=" w-[50%] h-[50%] group-hover:text-primary text-gray-400" />
            <p className=" font-noto mt-1 text-xs font-medium group-hover:text-primary text-gray-400">
              Category
            </p>
          </button>

          <button
            data-tooltip-target="tooltip-post"
            type="button"
            class="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <MdOutlineSell className=" w-[50%] h-[50%] group-hover:text-primary text-gray-400" />
            <p className=" font-noto mt-1 text-xs font-medium group-hover:text-primary text-gray-400">
              Sell
            </p>
          </button>
          <button
            data-tooltip-target="tooltip-search"
            type="button"
            class="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <IoChatbubbleOutline className=" w-[50%] h-[50%] group-hover:text-primary text-gray-400" />
            <p className=" font-noto mt-1 text-xs font-medium group-hover:text-primary text-gray-400">
              Chat
            </p>
          </button>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            class="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <GoPerson className=" w-[50%] h-[50%] group-hover:text-primary text-gray-400" />
            <p className=" font-noto mt-1 text-xs font-medium group-hover:text-primary text-gray-400">
              Profile
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
