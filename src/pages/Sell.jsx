import Navbar from "../components/Navbar";
import NotDevelopYet from "../components/NotDevelopYet";

function Sell() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-noto font-bold text-2xl mt-5 mb-3">Sell</h1>
        <NotDevelopYet />
      </div>
      <Navbar />
    </>
  );
}

export default Sell;
