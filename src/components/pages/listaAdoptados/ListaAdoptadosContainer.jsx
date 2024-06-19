import { useEffect, useState } from "react";
import ListaAdoptados from "./ListaAdoptados";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ListaAdoptadosContainer = () => {
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    const adoptantesCollection = collection(db, "adoptantes");
    //let x = adoptantesCollection;

    getDocs(adoptantesCollection).then((res) => {
      //let nuevoArreglo = res.docs.map((doc) => {
        // console.log(nombres)
      setNombres(
        res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );

      //});
      //setNombres(nuevoArreglo);
    });
  }, []);

  return <ListaAdoptados nombres={nombres} />;
};

export default ListaAdoptadosContainer;
