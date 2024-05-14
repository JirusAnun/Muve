import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Global, css } from "@emotion/react";

function Login() {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            overflow-y: scroll;
          }
        `}
      />
      <div
        className="flex flex-col justify-center items-center text-center font-noto h-[100dvh] overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1589363358751-ab05797e5629?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/10 z-10" />
        <div className="flex flex-col justify-end items-center text-center w-[90%] mb-[-80%] text-white z-50">
          <h1 className="text-3xl font-bold">
            Move over old stuff, find new treasures!
          </h1>
          <h2 className="text-base font-medium mt-1">
            One-stop second-hand trading market for preloved items at Mahidol
            University.
          </h2>
          <Link to="/" className=" flex items-center w-[100%] justify-center">
            <button className=" rounded-md px-4 py-2 flex items-center border-[1px] mt-3 w-[90%] justify-center">
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
