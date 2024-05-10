import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function BackgroundCard() {
    return (
      <Card
        shadow={false}
        className="relative grid h-[30vh] w-[44vw] items-end overflow-hidden mt-2"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-3 px-5 md:px-12">
          <Typography
            variant="h4"
            color="white"
            className="mb-2 font-medium leading-[1.5] font-noto"
          >
            กระเป๋า
          </Typography>
          <Typography variant="h6" className="mb-2 text-gray-400 font-noto">
            วันนี้ 16:00
          </Typography>
        </CardBody>
      </Card>
    );
  }