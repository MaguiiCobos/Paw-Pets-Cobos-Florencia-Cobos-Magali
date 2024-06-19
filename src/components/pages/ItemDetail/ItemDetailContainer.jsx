import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import { dogs } from "../../../productsMock";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc /*, getDocs*/ } from "firebase/firestore";
import { ListContext } from "../../../context/ListContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const { addToList } = useContext(ListContext);

  useEffect(() => {
    let dogsCollection = collection(db, "dogs");
    let refDoc = doc(dogsCollection, id);

    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = () => {
    let dog = { ...item };
    addToList(dog);
    console.log("se agrego");
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
