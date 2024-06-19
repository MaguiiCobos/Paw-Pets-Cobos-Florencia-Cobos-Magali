import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Consejos.css";

const Consejos = () => {
  return (
    <div className="divConsejos">
      <div className="divAcordeon">
        <Accordion className="acordeon">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="tituloAcordeon"
          >
            Alimentación Balanceada
          </AccordionSummary>
          <AccordionDetails className="textAcordeon">
            Proporciona a tu perro una dieta equilibrada y adecuada para su
            edad, tamaño y nivel de actividad. Consulta con un veterinario para
            determinar las mejores opciones alimenticias. ADVERTENCIA: No se
            recomienda suministrar a las mascotas alimentos como el chocolate,
            cebolla, ajo, palta, pasas de uvas, etc.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acordeon">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="tituloAcordeon"
          >
            Alimentos que NO hay que darles
          </AccordionSummary>
          <AccordionDetails className="textAcordeon">
            No se recomienda suministrar a las mascotas alimentos como el
            chocolate, cebolla, ajo, palta, pasas de uvas, huesos de pollo
            cocido, etc.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acordeon">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="tituloAcordeon"
          >
            Ejercitación regular
          </AccordionSummary>
          <AccordionDetails className="textAcordeon">
            Asegúrate de que tu perro tenga suficiente ejercicio diario para
            mantenerse saludable y en forma. El tipo y la cantidad de ejercicio
            varían según la raza y la edad del perro.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acordeon">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="tituloAcordeon"
          >
            Atencion Veterinaria
          </AccordionSummary>
          <AccordionDetails className="textAcordeon">
            Programa visitas regulares al veterinario para chequeos de salud,
            vacunaciones, desparasitaciones y cualquier atención médica
            necesaria. También es importante mantener al día las vacunas según
            las recomendaciones veterinarias.
          </AccordionDetails>
        </Accordion>

        <Accordion className="acordeon">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="tituloAcordeon"
          >
            Higiene adecuada
          </AccordionSummary>
          <AccordionDetails className="textAcordeon">
            Cuida la higiene de tu perro, incluyendo baños regulares con
            productos adecuados para su pelaje, cuidado dental, corte de uñas y
            limpieza de orejas. Esto ayuda a prevenir problemas de salud y
            mantenerlo cómodo.
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <img
          src="https://img.freepik.com/foto-gratis/hermosa-joven-besando-su-labrador-negro-parque_23-2148045828.jpg?t=st=1718824958~exp=1718828558~hmac=e26b113d2a5ef77d50c4ce2269b209da1ba890aa8a13c31ddd20e819317751c8&w=360"
          alt=""
          className="imgConsejos"
        />
      </div>
    </div>
  );
};

export default Consejos;
