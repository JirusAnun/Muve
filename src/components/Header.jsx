function Header() {
  return (
    <header className="flex flex-row justify-start items-center flex-grow w-[65%] mt-1 font-noto">
      <img
        src="https://randomuser.me/api/portraits/men/17.jpg"
        alt=""
        className="w-[40px] h-[40px] object-fit rounded-full m-3 border-2"
      />
      <div className=" w-[65%]">
        <p className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
          สวัสดี คุณJiruschai Anuntabundit
        </p>
      </div>
    </header>
  );
}

export default Header;
