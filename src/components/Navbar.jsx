import { GoHome } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600 rounded-t-3xl">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <Link to="/Home">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group w-[70px] h-[70px]"
          >
            <GoHome
              className={` w-[20px] h-[20px] group-hover:text-primary ${
                window.location.pathname === "/Home"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            />
            <p
              className={`font-noto mt-1 text-xs font-medium group-hover:text-primary ${
                window.location.pathname === "/Home"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            >
              Home
            </p>
          </button>
        </Link>

        <Link to="/category">
          <button
            data-tooltip-target="tooltip-bookmark"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group w-[70px] h-[70px]"
          >
            <BiCategoryAlt
              className={` w-[20px] h-[20px] group-hover:text-primary ${
                window.location.pathname === "/category"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            />
            <p
              className={` font-noto mt-1 text-xs font-medium group-hover:text-primary ${
                window.location.pathname === "/category"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            >
              Category
            </p>
          </button>
        </Link>

        <Link to="/sell">
          <button
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group w-[70px] h-[70px]"
          >
            <MdOutlineSell
              className={` w-[20px] h-[20px] group-hover:text-primary ${
                window.location.pathname === "/sell"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            />
            <p
              className={` font-noto mt-1 text-xs font-medium group-hover:text-primary ${
                window.location.pathname === "/sell"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            >
              Sell
            </p>
          </button>
        </Link>

        <Link to="/chat">
          <button
            data-tooltip-target="tooltip-search"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group w-[70px] h-[70px]"
          >
            <IoChatbubbleOutline
              className={` w-[20px] h-[20px] group-hover:text-primary ${
                window.location.pathname === "/chat"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            />
            <p
              className={` font-noto mt-1 text-xs font-medium group-hover:text-primary ${
                window.location.pathname === "/chat"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            >
              Chat
            </p>
          </button>
        </Link>

        <Link to="/profile">
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 m-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group w-[70px] h-[70px]"
          >
            <GoPerson
              className={` w-[20px] h-[20px] group-hover:text-primary ${
                window.location.pathname === "/profile"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            />
            <p
              className={` font-noto mt-1 text-xs font-medium group-hover:text-primary ${
                window.location.pathname === "/profile"
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            >
              Profile
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
