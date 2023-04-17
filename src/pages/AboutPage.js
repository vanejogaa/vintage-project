import { Container } from "react-bootstrap";
import Image1 from "../assets/images/imag1.jpeg";
import Image2 from "../assets/images/imag2.jpeg";
import Image3 from "../assets/images/imag3.jpeg";
import Image6 from "../assets/images/image6.jpg";


export default function AboutPage(){

    return (
        <Container>
        <br/>
        <br/>
        <h2 className="text-center">La historia de la tienda PRIORÍZATE</h2>
        <br/>
        <h4>Esta historia comienza con la iniciativa de dos hermanos, Laura y Santiago Garcia, además de Fran Torres (pareja de Laura).  
        Siempre habían soñado con tener una tienda de ropa, ya que les encantaba la moda desde bien pequeños.
        Esta historia empezó en una reunión familiar, dónde los tres, expusieron sus ganas y motivación de ser dueños de una tienda de ropa para ofrecer asesoramiento a mujeres de todo tipo de tallajes.</h4>
        
        <img class="col-sm-4 alert alert-danger" src={Image1} width="400" height="600"></img>
        <img class="col-sm-4 alert alert-danger" src={Image6} width="400" height="600"></img>
        <img class="col-sm-4 alert alert-danger" src={Image3} width="400" height="600"></img>

         <br/>
         <br/>
        <h2 className="text-center">La estrategia de la tienda de PRIORÍZATE</h2>
        <br/>
        <h4 className="text-primary-emphasis">Pusieron el foco en analizar a la competencia: ¿cómo lo hacían los demás? Enseguida resultó evidente que las estrategias con influencers, 
        que por entonces no estaban tan “profesionalizados” y era más sencillo que colaboraran a cambio de producto, eran la clave del asunto.  
        Esta era la estrategia que marcaba la diferencia en Facebook e Instagram, que eran los canales en los que ellos estaban. Recurrieron a prescriptores de redes sociales en una primera fase para, 
        después, contactar con bloggers de moda. 
        Y precisamente en este momento fue cuando se empezó a producir el milagro. 
        Fruto de esta estrategia, empezaron a llegar los pedidos al WhatsApp de la tienda de Priorízate. Fue con cuentagotas, pero los pedidos crecían de forma sostenida, llegando a recibir 10 pedidos al día. 
        Te recuerdo que en este momento aún no tenían eCommerce y trabajaban desde un coworking de Elche en el que empezaban a no caber más percheros. Este fue el germen del que vino todo lo demás.</h4>
       

        <br/>
        <br/>
        <h2 className="text-center">La importancia del producto y su filosofía</h2>
        <br/>
        <h4>La idea de la tienda de PRIORÍZATE siempre ha sido tener un producto con buen diseño y un precio muy asequible: “La moda no es riqueza sino belleza”, repiten como mantra. 
        Evidentemente, cuando se parte de un capital social tan limitado no se pueden hacer grandes inversiones en nada, ni siquiera en producto. Las primeras prendas a las que accedieron fueron adquiridas 
        directamente a distribuidores en Elche. Tuvieron que dar muchas vueltas hasta encontrar lo que más se aproximaba a lo que tenían en mente. 
        Cuando el negocio despegó, también lo hizo su capacidad de negociación y esto les llevó a explorar el mercado europeo en busca de fabricantes que pudieran elaborar su propia colección. 
        A día de hoy, pueden decir orgullosamente que cuentan con más de 1.000 prendas diseñadas por ellos mismos. Ahora tienen un mayor control sobre el producto y, lógicamente, también sobre los márgenes, 
        con lo que pueden seguir siendo fieles a su filosofía.</h4>
        <img src={Image2} width="1250" height="600"></img>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </Container>
    )
}