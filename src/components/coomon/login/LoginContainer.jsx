import "../login/Login.css";
// import { signOut } from "firebase/auth";

import { useState } from "react";
import app from "../../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

const LoginContainer = () => {

  let flag = false;

  const [registrando, setRegistrando] = useState(false); //si es true se registra y si es false inicia sesion

  const functAutenticacion = async (e) => {
    //para q la pagina no se recargue al tocar el btn de iniciar sesion/registrarse
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      flag = true;
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        flag = true;
        console.log(flag)
      } catch (error) {
        alert("El correo o la contraseña son incorrectos");
      }
    }
  };

  return (
    <div className="main">
      <div className="login">
        <form className="formUser" onSubmit={functAutenticacion}>
          <label htmlFor="chk" aria-hidden="true">
            {registrando ? "Registrarse" : "Inicia sesion"}
          </label>
          <input
            type="email"
            className="inputL"
            name="email"
            placeholder="Email"
            required=""
            id="email"
          />
          <input
            type="password"
            className="inputL"
            name="pswd"
            placeholder="Contraseña"
            required=""
            id="password"
          />
          <button className="botonI">
            {registrando ? "Registrarse" : "Inicia sesion"}
          </button>
        </form>
        <div className="sinCuenta">
          <h5 className="h5Login">
            {registrando
              ? "Si ya tenés cuenta: "
              : "Si aún no tenés una cuenta:"}
            <button
              className="botonR"
              onClick={() => setRegistrando(!registrando)}
            >
              {registrando ? "Iniciar sesión" : "Registrarme"}
            </button>
          </h5>
        </div>
        {/* <div>
          <button onClick={() => signOut(auth)}>Cerrar sesión</button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginContainer;
