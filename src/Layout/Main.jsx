import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
const Main = () => {
  return (
    <div className="text-3xl">
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
