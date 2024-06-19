import LoginContainer from "../../coomon/login/LoginContainer";
import InicioSesion from "../../coomon/inicioSesion/InicioSesion.jsx";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../firebaseConfig.js";
const auth = getAuth(app);

const LoginSingin = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return user ? <InicioSesion /> : <LoginContainer />;
};

export default LoginSingin;
