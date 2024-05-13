import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

export function BackgroundCard({ name, time, img }) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[30vh] w-[44vw] items-end overflow-hidden mt-2"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{ backgroundImage: `url(${img})` }}
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/15" />
      </CardHeader>
      <CardBody className="relative py-3 px-5 md:px-12">
        <h3 className="mb-1 text-white font-semibold text-xl font-noto">
          {name}
        </h3>
        <p className="mb-2 text-white font-light text-xs font-noto">{time}</p>
      </CardBody>
    </Card>
  );
}
