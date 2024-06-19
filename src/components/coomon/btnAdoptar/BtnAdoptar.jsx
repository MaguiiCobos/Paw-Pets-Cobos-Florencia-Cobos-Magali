import "./BtnAdoptar.css"

const BtnAdoptar = (onAdd) => {
  return <button className="btnAdoptar" onClick={() => onAdd()}>QUIERO ADOPTAR</button>;
};

export default BtnAdoptar;
