import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function CategoryCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      shadow={false}
      className="relative grid h-[15vh] w-[90vw] items-end overflow-hidden mt-3"
      onClick={() => {
        navigate(`/search?keyword=&categories=${props.title}`);
      }}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{ backgroundImage: `url(${props.img})` }}
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-3 px-5 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-2 font-medium leading-[1.5] font-noto"
        >
          {props.title}
        </Typography>
      </CardBody>
    </Card>
  );
}
