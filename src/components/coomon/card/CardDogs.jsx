import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import "../card/CardDogs.css";
import { Link } from "react-router-dom";

const CardDogs = ({
  id,
  nombre,
  edad,
  ubicacion,
  descripcion,
  refugio,
  img,
}) => {
  return (
    <div className="containerCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{refugio[0]}</Avatar>}
          title={refugio}
        />
        <CardMedia sx={{ height: 200 }} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre} - {edad}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ubicacion}
          </Typography>
        </CardContent>
        <CardActions className="btns">
          <Link to={`/itemDetail/${id}`} className="btnVerInfo">
            VER INFO
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardDogs;
