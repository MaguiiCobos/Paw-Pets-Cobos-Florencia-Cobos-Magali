import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <section>
      <header>
        <div className="containerHeader">
          <img
            className="fotoHeader"
            src="../../public/fondoHeader.jpeg"
            alt=""
          />
          <h2 className="eslogan">Adoptá, ¡Un amigo fiel te espera!</h2>
          <div className="divOnda">
            <svg
              className="onda"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                className="ondaPath"
                d="M-0.84,110.05 C136.84,3.48 363.71,222.55 501.41,105.11 L500.00,150.00 L0.00,150.00 Z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <main>
        <h3 className="introduccion">
          En Argentina, millones de mascotas anhelan un hogar: 6 millones de
          peludos buscan un lugar donde sentir amor y compañía. Juntos podemos
          cambiar sus vidas y la nuestra, porque adoptar es una experiencia
          llena de alegría, lealtad y cariño mutuo.
        </h3>
        <div>
          <h2 className="titulo">¿Como adoptar con Paw Pets?</h2>
          <div className="pasosParaAdoptar">
            <img className="imgPasos" src="../../../public/paso1.jpeg" alt="" />
            <p>Inicia sesión o registrate si aún no tienes una cuenta.</p>
          </div>
          <div className="pasosParaAdoptar">
            <p>Ve al apartado de `Adoptar` en busca a tu amiguito peludo y presiona el botón `Quiero adoptar`.</p>
            <img className="imgPasos" src="../../../public/paso2.jpeg" alt="" />
          </div>
          <div className="pasosParaAdoptar">
            <img className="imgPasos" src="../../../public/paso3.jpeg" alt="" />
            <p>LLena el formulario con tus datos para que el refugio pueda comunicarse.</p>
          </div>
          <div className="pasosParaAdoptar">
            <p>El refugio se comunicará con vos para que puedas encontrarte con tu amiguito.</p>
            <img className="imgPasos" src="../../../public/paso4.jpeg" alt="" />
          </div>
        </div>
        <Link to="/adopcion" className="btnAdoptar">QUIERO ADOPTAR</Link>
      </main>
    </section>
  );
};

export default Inicio;
