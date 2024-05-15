import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { BsCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function DetailCard(params) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        className="mt-10 w-[44vw] h-[30vh] shadow-xl"
        onClick={() => {
          navigate(`/product/${params.id}`);
        }}
      >
        <CardHeader color="gray" className="relative h-[20vh] shadow-md">
          <img
            src={params.img}
            alt="card-image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <h4 className=" font-bold text-black text-lg">{params.itemName}</h4>
          <div className="flex flex-row justify-center items-center">
            <BsCoin className="text-black mr-2" />
            <p>{params.price}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default DetailCard;
