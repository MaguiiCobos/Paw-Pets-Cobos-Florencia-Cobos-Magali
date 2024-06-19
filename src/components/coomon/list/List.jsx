import VolunteerActivismSharpIcon from "@mui/icons-material/VolunteerActivismSharp";
import { IconButton } from "@mui/material";
import "./List.css"

const List = () => {
  return (
    <IconButton aria-label="cart">
      <VolunteerActivismSharpIcon className="listIcon" />
    </IconButton>
  );
};

export default List;
