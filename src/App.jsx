import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/inicio/Inicio";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import ConsejosContainer from "./components/pages/consejos/ConsejosContainer";
import Error from "./components/pages/error/Error";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Formulario from "./components/pages/formulario/Formulario";
//import LoginContainer from "./components/coomon/login/LoginContainer.jsx";
import ListaAdoptadosContainer from "./components/pages/listaAdoptados/ListaAdoptadosContainer";
import ListContextProvider from "./context/ListContext";
import LoginSingin from "./components/pages/loginSingin/LoginSingin";

function App() {

  return (
    <BrowserRouter>
      <ListContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/adopcion" element={<ItemListContainer />} />
            <Route
              path="/adopcion/category/:ubication"
              element={<ItemListContainer />}
            />
            <Route path="/consejos" element={<ConsejosContainer />} />
            <Route path="/list" element={<ListaAdoptadosContainer />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/login" element={<LoginSingin />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ListContextProvider>
    </BrowserRouter>
  );
}

export default App;
