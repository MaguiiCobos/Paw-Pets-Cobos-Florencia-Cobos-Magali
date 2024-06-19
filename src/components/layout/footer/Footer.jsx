import "../footer/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="divFooter">
      <div className="divRedes">
        <a className="redesSociales" href="">
          <InstagramIcon />
        </a>
        <a className="redesSociales" href="">
          <YouTubeIcon />
        </a>
      </div>
      <div>
        <h5>Hecho por Florencia y Magalí Cobos</h5>
      </div>
    </div>
  );
}

export default Footer;
