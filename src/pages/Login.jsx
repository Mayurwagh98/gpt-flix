import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"
          alt="image"
        />
      </div>

      <form className="bg-black w-1/3 p-16 flex flex-col absolute mx-auto right-0 left-0 top-1/3 bg-opacity-80 rounded">
        <h1 className="text-white text-4xl my-2">Sign In</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[3rem] my-4 p-2 rounded bg-[#0f0f0f] text-white border-[1px] white"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="h-[3rem] my-4 p-2 rounded bg-[#0f0f0f] text-white border-[1px] white"
        />
        <button className="w-full h-10 text-white bg-[#e50a13] rounded my-2">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
