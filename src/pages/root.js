import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
       <Footer /> 
    </div>
  );
}