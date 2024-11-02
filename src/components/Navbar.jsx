import { signOut } from "firebase/auth/cordova";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addGptSearchFlag } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/langSlice";

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

  const handleLangChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <nav className="w-full h-[4rem] absolute items-center px-2 z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <h1 className="text-[2.5rem] w-full font-bold text-[#C62E2E] mx-auto md:mx-[2rem] my-2 contrast-150">
        GPTFLIX
      </h1>
      {user && (
        <div className="flex py-2 justify-center items-center md:w-1/2">
          {gptFlagStore && (
            <select
              className="bg-gray-700 py-2 px-2 rounded text-white mx-2 outline-none cursor-pointer"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptFlag}
            className="bg-[#640D5F] text-white h-[35px] rounded px-2 w-[9rem]"
          >
            {gptFlagStore ? "Home" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="img"
            className="hidden mx-4 w-9 md:block"
          />
          <button
            className="bg-black text-white p-2 text-sm rounded flex justify-center items-center mx-2 md:mx-0"
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
