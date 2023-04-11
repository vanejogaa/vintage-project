import { Container } from "react-bootstrap";
import ImagenVintage01 from "../assets/images/vintage01.jpg";
import ImagenVintage2 from "../assets/images/vintage2.jpg";
import ImagenVintage3 from "../assets/images/vintage3.jpg";
import ImagenVintage4 from "../assets/images/vintage4.jpg";
import ImagenVintage5 from "../assets/images/vintage5.jpg";
import ImagenVintage6 from "../assets/images/vintage6.jpg";
import ImagenVintage7 from "../assets/images/vintage7.jpg";
import ImagenVintage8 from "../assets/images/vintage8.jpg";
import ImagenVintage9 from "../assets/images/vintage9.jpg";
import ImagenVintage10 from "../assets/images/vintage10.jpg";


export default function HomePage(){

    return (
        
        <Container>
        
            <h1>Piezas a la última moda</h1>
            <img src={ImagenVintage01} width="215" height="255"></img>
            <img src={ImagenVintage2} width="350" height="255"></img>
            <img src={ImagenVintage3} width="215" height="255"></img>
            <img src={ImagenVintage4} width="285" height="255"></img>
            <img src={ImagenVintage5} width="215" height="255"></img>
            <img src={ImagenVintage6} width="215" height="255"></img>
            <img src={ImagenVintage7} width="215" height="255"></img>
            <img src={ImagenVintage8} width="215" height="255"></img>
            <img src={ImagenVintage9} width="215" height="255"></img>
            <img src={ImagenVintage10} width="215" height="255"></img>
        </Container>
        
    );
};