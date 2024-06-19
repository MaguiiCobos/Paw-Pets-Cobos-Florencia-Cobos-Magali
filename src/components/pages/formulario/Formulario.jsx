import { useState } from "react";
import "../formulario/Formulario.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
//import Swal from "sweetalert2";

const Formulario = () => {


  const [orderId, setOrderId] = useState(null);

  const [info, setInfo] = useState({
    nombre: "",
    mail: "",
    telefono: "",
  });

  const handleChange = (event) => {
    let {name, value} = event.target  //desestructuramos
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => { //envio de formulario
    event.preventDefault();
    console.log(info);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu formulario se envió con éxito.",
      text: "Pronto el refugio se comunicará con vos.",
      showConfirmButton: true,
      customClass: {
        popup: 'popup'
      }
    });

    let adoptantesCollection = collection( db , "adoptantes" )
    addDoc(adoptantesCollection, info).then((res) => setOrderId(res.id));

    info.forEach((curso) => {
      let cursosCollection = collection(db, "cursos");
      let refDoc = doc(cursosCollection, curso.id);
      updateDoc(refDoc, { stock: curso.stock - curso.quantify }); //actualizacion patch
    });

  };

  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Formulario</p>
        <p className="message">
          Carga tus datos para que el refugio pueda ponerse en contacto con vos.
        </p>
        <div className="flex">
          <label>
            <span className="spanFormulario">Nombre completo</span>
            <input
              type="text"
              placeholder="ej: Juan Pérez"
              className="input"
              onChange={handleChange}
              name="nombre"
              //onBlur={} formit jump (ver afterclass)
            />
          </label>

          <label>
            <span className="spanFormulario">Mail</span>
            <input
              type="email"
              placeholder="ejemplomail@gmail.com"
              className="input"
              onChange={handleChange}
              name="mail"
            />
          </label>

          <label>
            <span className="spanFormulario">Numero de teléfono</span>
            <input
              type="tel"
              placeholder="ej: 2615555666"
              className="input"
              onChange={handleChange}
              name="telefono"
            />
          </label>
          <button className="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
