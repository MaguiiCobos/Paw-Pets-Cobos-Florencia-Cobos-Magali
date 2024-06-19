import "./Adoptantes.css";

const Adoptantes = ({ id, nombre }) => {
  console.log(nombre);
  return (
    <div className="divAdoptantes">
      <div className="divNombresAdoptantes">
        <h5 className="nombresAdoptantes">{nombre}</h5>
      </div>
    </div>
  );
};

export default Adoptantes;
