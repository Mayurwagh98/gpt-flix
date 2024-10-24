import { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [signIn, setSignin] = useState(true);

  const handleIsSignIn = () => {
    setSignin(!signIn);
  };
  return (
    <div>
      <Navbar />
      <div className="absolute">
        <div className="absolute h-full w-full opacity-40 bg-black"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="image"
        />
      </div>

      <form className="bg-black w-1/3 p-16 flex flex-col absolute mx-auto right-0 left-0 top-1/4 bg-opacity-80 rounded">
        <h1 className="text-white text-4xl my-2">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[3rem] my-4 p-2 rounded bg-[#0f0f0f] text-white border-[#606060] border-[1px] outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="h-[3rem] my-4 p-2 rounded bg-[#0f0f0f] text-white border-[#606060] border-[1px] outline-none"
        />
        <button className="w-full h-10 text-white bg-[#e50a13] rounded my-2">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        {signIn ? (
          <p className="text-[#828584] my-2">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={handleIsSignIn}
            >
              Sign up now
            </span>
          </p>
        ) : (
          <p className="text-[#828584] my-2">
            Already have an account?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={handleIsSignIn}
            >
              Sign In
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
