import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Browse from "../pages/Browse";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default AllRoutes;
