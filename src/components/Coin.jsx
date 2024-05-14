import { BsCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Coin() {
  const navigate = useNavigate();
  return (
    <div
      className="flex-shrink-0 justify-end w-full mt-5"
      onClick={() => navigate("/topup")}
    >
      <div className="bg-black inline-flex items-center p-2 rounded-xl w-full max-w-full h-[4vh]">
        <BsCoin className="text-yellow-600" />
        <p className="font-noto font-medium pt-[2px] text-white ml-2">1,000</p>
      </div>
    </div>
  );
}

export default Coin;
