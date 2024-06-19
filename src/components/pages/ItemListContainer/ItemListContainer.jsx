import "../ItemListContainer/ItemListContainer.css";

//import { dogs } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";

import {
  /*addDoc,*/ 
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { ubication } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const dogsCollection = collection(db, "dogs");
    let x = dogsCollection;
    console.log(x);
    if (ubication) {
      x = query(dogsCollection, where("categoriaUbicacion", "==", ubication));
      console.log(where("categoriaUbicacion", "==", ubication));
    }
    getDocs(x).then((res) => {
      let nuevoArreglo = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(nuevoArreglo);
    });
  }, [ubication]);

  // const addDocsDogs = () =>{   //para rellenar la db con el arreglo de ProdutsMock
  //   let dogsCollection = collection( db , "dogs" )
  //   dogs.forEach(dog => addDoc(dogsCollection, dog))
  // }

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div className="containerLoad">
          <div className="spinner"></div>{" "}
          <p className="pCargando">Cargando...</p>{" "}
        </div>
      )}

      {/* <button onClick={addDocsDogs}>agregar</button> */}
    </>
  );
};

export default ItemListContainer;
