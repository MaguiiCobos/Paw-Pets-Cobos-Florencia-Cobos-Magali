import { Link } from "react-router-dom"
import "../error/Error.css"
const Error = () => {
  return (
    <body>

    <div className="c">
      <div className="_404">Oops</div>
      <hr />
      <div className="_2">NO PUDIMOS ENCONTRAR ESTA PAGINA</div>
      <Link to="/" className="btnInicio">VOLVER AL INICIO</Link>
    </div>
  </body>
  )
}
export default Error