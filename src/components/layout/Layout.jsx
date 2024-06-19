import Footer from "./footer/Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* para q el footer este al final de la pagina ↓ */}
      <div style={{minHeight: "calc(100vh - 190px)"}}>  
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
