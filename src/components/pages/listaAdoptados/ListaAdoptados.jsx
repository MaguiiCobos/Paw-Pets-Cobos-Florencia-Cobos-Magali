import Adoptantes from "../../coomon/adoptantes/Adoptantes";
// import List from "../../coomon/list/List";

const ListaAdoptados = ({ nombres }) => {
  return (
    <div>
      <div className="productos">
        {nombres.map(({ id, nombre }) => {
          return <Adoptantes nombre={nombre} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ListaAdoptados;
