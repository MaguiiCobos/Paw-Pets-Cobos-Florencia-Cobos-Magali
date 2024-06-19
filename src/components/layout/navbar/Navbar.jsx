import "../navbar/Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import List from "../../coomon/list/List";

function Navbar() {
  return (
    <div className="containerMenu">
      <Link to="/" className="logo">
        <img src="../public/logo.png" alt="" />
        <h1>Paw Pets!</h1>
      </Link>
      <nav>
        <Link to="/" className="linkMenu">
          Inicio
        </Link>
        <Link to="/adopcion" className="linkMenu">
          Adopción
        </Link>
        <Link to="/consejos" className="linkMenu">
          Consejos
        </Link>
      </nav>
      
      <div className="divUserList">
        <Link to="/login">
          <AccountCircleIcon fontSize="medium"  className="user" />
        </Link>
        <Link to={"/list"}>
          <List />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
