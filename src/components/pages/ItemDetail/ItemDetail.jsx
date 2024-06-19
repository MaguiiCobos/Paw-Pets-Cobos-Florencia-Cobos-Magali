import { Link } from "react-router-dom";
import "./ItemDetail.css";
//import BtnAdoptar from "../../coomon/btnAdoptar/BtnAdoptar";
import BtnAdoptarContainer from "../../coomon/btnAdoptar/BtnAdoptarContainer";

const ItemDetail = ({ item, onAdd }) => {

  return (
    <div className="info">
      <div className="verInfo">
        <img className="imgPerro" src={item.img} alt="" />

        <div className="containerInfo">
          <h4>
            {item.nombre} - {item.edad}
          </h4>
          <p className="parrafoInfo">{item.descripcion}</p>
          <p className="parrafoInfo">{item.ubicacion}</p>
          <p className="parrafoInfo"> Refugio: {item.refugio}</p>
          <Link to="/formulario" className="btnAdoptar" >
            <BtnAdoptarContainer onAdd={onAdd}/>
          </Link>
        </div>
      </div>
      <div className="containerRequisitos">
        <div>
        <h5 className="requisitos">REQUISITOS</h5>
        <p className="requisito">Edad: los adoptantes deberan ser mayores de 18 años.</p>
        <p className="requisito">Vivienda: Deberás proporcionar información sobre tu vivienda, como si vives en una casa o apartamento, y si tienes un patio.</p>
        <p className="requisito">Seguimiento: el adoptante debe dar consentimiento para realizar un seguimiento.</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
