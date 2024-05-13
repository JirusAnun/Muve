import { Spinner } from "@material-tailwind/react";

function Loading() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center items-center text-center">
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>
  );
}

export default Loading;
