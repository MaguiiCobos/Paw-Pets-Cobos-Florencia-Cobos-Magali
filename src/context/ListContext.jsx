import { createContext, useState } from "react";

export const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addToList = (dog) => {
    setList([...list, dog]);
  };

  let data = { list, addToList };

  return <ListContext.Provider value={data}>{children}</ListContext.Provider>;
};

export default ListContextProvider;
