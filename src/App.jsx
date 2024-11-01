import { useEffect } from "react";
import "./App.css";
import AllRoutes from "./components/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "./utils/userSlice";
import { user_avatar } from "./utils/constants";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      // this code works in all condition signin/signup
      // if removed the after sign in user info wont show
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: user_avatar,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
