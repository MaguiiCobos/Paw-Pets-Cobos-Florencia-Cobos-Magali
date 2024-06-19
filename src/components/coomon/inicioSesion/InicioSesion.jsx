import { Link } from "react-router-dom";
import "../inicioSesion/InicioSesion.css";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebaseConfig";
const auth = getAuth(app);

const InicioSesion = () => {
  return (
    <div className="divInicioSesion">
      <h3 className="bienvenido">Bienvenid@ a Paw Pets</h3>
      <div>
        <Link to="/">
          <button className="btnVolverInicio">Volver al Inicio</button>
        </Link>
        <button className="btnCerrarSesion" onClick={() => signOut(auth)}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default InicioSesion;
