import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Browse = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      <Navbar />
      <h1>Welcome {user?.displayName}</h1>
    </>
  );
};

export default Browse;
