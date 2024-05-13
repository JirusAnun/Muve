import { Card, CardHeader, CardBody } from "@material-tailwind/react";

function DetailCard(params) {
  return (
    <>
      <Card className="mt-10 w-[44vw] h-[30vh] shadow-xl">
        <CardHeader color="gray" className="relative h-[20vh] shadow-md">
          <img
            src={params.img}
            alt="card-image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <h4>{params.itemName}</h4>
          <p>{params.price}</p>
        </CardBody>
      </Card>
    </>
  );
}

export default DetailCard;
