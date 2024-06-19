import BtnAdoptar from "./BtnAdoptar";

const BtnAdoptarContainer = (onAdd) => {
  let objectProps = {
    onAdd,
  };
  console.log(onAdd);
  return <BtnAdoptar {...objectProps} />;
};

export default BtnAdoptarContainer;
