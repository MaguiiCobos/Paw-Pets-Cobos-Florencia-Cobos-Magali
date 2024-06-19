import { Link } from "react-router-dom";
import CardDogs from "../../coomon/card/CardDogs";

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        <ul className="filtros">
          <ul className="filtroUbicacion">
            <li>Ubicación:</li>
            <Link to="/adopcion" className="ubicacion">Todos</Link>
            <Link to={`/adopcion/category/guaymallen`} className="ubicacion">Guaymallén</Link>
            <Link to={`/adopcion/category/godoycruz`}  className="ubicacion">Godoy Cruz</Link>
            <Link to={`/adopcion/category/ciudad`}  className="ubicacion">Ciudad</Link>
            <Link to={`/adopcion/category/lasheras`}  className="ubicacion">Las Heras</Link>
            <Link to={`/adopcion/category/maipu`}  className="ubicacion">Maipú</Link>
            <Link to={`/adopcion/category/lujandecuyo`}  className="ubicacion">Luján de Cuyo</Link>
          </ul>
        </ul>
      </div>
      <div className="container">
        {items.map(({ id, nombre, edad, ubicacion, descripcion, refugio, img }) => {
            return (
              <CardDogs
                key={id}
                nombre={nombre}
                edad={edad}
                ubicacion={ubicacion}
                descripcion={descripcion}
                refugio={refugio}
                img={img}
                id={id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default ItemList;
