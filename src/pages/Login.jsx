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
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"
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
          <p
            className="text-[#828584] my-2 cursor-pointer"
            onClick={handleIsSignIn}
          >
            New to Netflix? <span className="text-white">Sign up now</span>
          </p>
        ) : (
          <p
            className="text-[#828584] my-2 cursor-pointer"
            onClick={handleIsSignIn}
          >
            Already have an account? <span className="text-white">Sign In</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
