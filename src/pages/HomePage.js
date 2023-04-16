import { Container } from "react-bootstrap";
import ImagenVintage01 from "../assets/images/vintage01.jpg";
import Imag6 from "../assets/images/imag6.jpeg";
import Imag7 from "../assets/images/imag7.jpeg";
import ImagenVintage4 from "../assets/images/vintage4.jpg";
import ImagenVintage5 from "../assets/images/vintage5.jpg";
import ImagenVintage6 from "../assets/images/vintage6.jpg";
import ImagenVintage7 from "../assets/images/vintage7.jpg";
import ImagenVintage8 from "../assets/images/vintage8.jpg";
import ImagenVintage9 from "../assets/images/vintage9.jpg";
import ImagenVintage10 from "../assets/images/vintage10.jpg";
import Imag8 from "../assets/images/imag8.webp";
import Imag5 from "../assets/images/imag5.jpeg";
import Carrusel from "../components/carrusel/Carrusel";



export default function HomePage(){

    return (
        
        <Container>
        <Carrusel/>
            <br/>
            <br/>
            <h1 className="text-center">Piezas a la última moda</h1>
            <br/>
            <br/>
            <br/>
            
            <img class="col-sm-4 alert alert-warning" src={Imag6} width="350" height="400"></img>
            <img class="col-sm-4 alert alert-danger" src={Imag7} width="350" height="400"></img>
            <img class="col-sm-4 alert alert-warning" src={ImagenVintage4} width="285" height="400"></img>
            <img class="col-sm-4 alert alert-danger" src={ImagenVintage01} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-warning" src={ImagenVintage5} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-danger" src={ImagenVintage6} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-warning" src={ImagenVintage7} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-danger" src={ImagenVintage8} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-warning" src={ImagenVintage9} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-danger" src={ImagenVintage10} width="215" height="400"></img>
            <img class="col-sm-4 alert alert-warning" src={Imag8} width="205" height="400"></img>
            <img class="col-sm-4 alert alert-danger" src={Imag5} width="205" height="400"></img>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
        
        
    );
};