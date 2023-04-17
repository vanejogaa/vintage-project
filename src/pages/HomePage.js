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
            <h2 className="text-center">Piezas a la última moda</h2>
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
            <h2 className="text-center">Comprar online ropa para mujer</h2>
            <br/>
            <h4>PRIORÍZATE es una tienda de moda low cost para mujer en la que encuentras ropa, zapatos, complementos, maquillaje, cosmética y papelería. Somos una firma española que destaca por su compromiso con las tallas, 
            ya que fabricamos prendas desde la talla 34 hasta la 48. Nuestra marca diseña vestidos, faldas, vaqueros y todo tipo de pantalones a precios baratos y al alcance de todas las mujeres. Todo lo que buscas puedes obtenerlo 
            con un solo clic en nuestra tienda online. Además nuestros envíos te llegan a casa en un plazo de 24-48 horas.
            En la tienda de priorízate.com encontrarás una amplia variedad de ropa de mujer. Desde vestidos de fiesta hasta pantalones cortos pasando por camisas con estampados. También podrás elegir el mejor calzado puesto que contamos 
            con zapatos de mujer para cualquier ocasión; sandalias de tacón, mules, sandalias planas con detalles o deportivas entre otras. Si necesitas complementos, en PRIORÍZATE encontrarás bolsos de todo tipo: pequeños para salir de fiesta, 
            capazos playeros, mochilas, bandoleras... Para complementar tu ropa de mujer te recomendamos echar un vistazo a nuestra sección de bisutería y accesorios.</h4>
            <br/>
            <h2 className="text-center">No es solo ropa</h2>
            <br/>
            <h4>La moda de mujer al mejor precio es nuestra especialidad, pero además contamos con otras gamas de productos. Nuestra sección de belleza contiene todo lo que necesitas para el cuidado diario. En otras palabras, tenemos artículos 
            de cosmética, maquillaje y accesorios de belleza para proteger tu piel y completar un look irresistible. Finalmente, te proponemos revisar nuestra papelería de diseño y rodearte de cosas que te hagan sentir bien en tu día a día.</h4>
            <br/>
            <br/>
            <br/>
            <br/>
           
        </Container>
        
        
    );
};