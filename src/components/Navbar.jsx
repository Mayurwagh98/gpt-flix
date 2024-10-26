import { signOut } from "firebase/auth/cordova";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="w-full h-12 absolute flex justify-between items-center px-2 z-10">
      <h1 className="text-[3rem] w-full font-bold text-[#C62E2E] mx-32 my-2 contrast-150 ">
        GPTFLIX
      </h1>
      {user && (
        <div className="flex w-1/5 py-2">
          <img
            src={user?.photoURL}
            alt="img"
            className="mx-4 w-9"
          />
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
