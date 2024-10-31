import { signOut } from "firebase/auth/cordova";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addGptSearchFlag } from "../utils/gptSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptFlagStore = useSelector((store) => store.gptFlag.gptFlag);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptFlag = () => {
    dispatch(addGptSearchFlag());
  };
  return (
    <nav className="w-full h-[4rem] absolute flex justify-between items-center px-2 z-10 bg-gradient-to-b from-black">
      <h1 className="text-[2.5rem] w-full font-bold text-[#C62E2E] mx-[2rem] my-2 contrast-150 ">
        GPTFLIX
      </h1>
      {user && (
        <div className="flex w-1/3 py-2 justify-center items-center">
          <button
            onClick={handleGptFlag}
            className="bg-[#640D5F] text-white h-[35px] rounded px-2 w-[9rem]"
          >
            {gptFlagStore ? "Home" : "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="img" className="mx-4 w-9" />
          <button
            className="bg-black text-white p-2 text-sm rounded flex justify-center items-center"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
