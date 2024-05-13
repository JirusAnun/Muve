function Header() {
  return (
    <header className="flex flex-row justify-start items-center flex-grow w-[100%] mt-1 font-noto">
      <img
        src="https://randomuser.me/api/portraits/men/17.jpg"
        alt=""
        className="w-[40px] h-[40px] object-fit rounded-full m-3 border-2"
      />
      <p className="flex-grow font-bold">สวัสดี คุณJiruschai</p>
    </header>
  );
}

export default Header;