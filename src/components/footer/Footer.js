import React from "react";
import styled from "styled-components";

function Footer () {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
        {/*Colum 1 */}
        <div className="col-md-3 col-sm-6">
            <h4>INFORMACIÓN Y AYUDA</h4>
            <ul className="list-unstyled">
                <li><a href="/">Ayuda</a></li>
                <li><a href="/">Estado de tu pedido</a></li>
                <li><a href="/">Envíos y devoluciones</a></li>
                <li><a href="/">PRIORÍZATE Premier</a></li>
                <li><a href="/">-10% para estudiantes</a></li>
                <li><a href="/">Mapa del sitio</a></li>
            </ul>
        </div>
        {/*Colum 2 */}
        <div className="col-md-3 col-sm-6">
            <h4>SOBRE PRIORÍZATE</h4>
            <ul className="list-unstyled">
                <li><a href="/">Sobre Priorízate</a></li>
                <li><a href="/">Trabajar en PRIORÍZATE</a></li>
                <li><a href="/">Responsabilidad corporativa</a></li>
                <li><a href="/">Relación con inversores</a></li>
            </ul>
        </div>
        {/*Colum 3 */}
        <div className="col-md-3 col-sm-6">
            <h4>BENEFICIOS</h4>
            <ul className="list-unstyled">
                <li><a href="/">Móvil y apps de PRIORÍZATE</a></li>
                <li><a href="/">PRIORÍZATE Marketplace</a></li>
                <li><a href="/">Tarjetas regalo online</a></li>
                <li><a href="/">Black Friday</a></li>
                <li><a href="/">Recomendaciones</a></li>
                <li><a href="/">Información para socios</a></li>
            </ul>
        </div>
        {/*Colum 3 */}
        <div className="col-md-3 col-sm-6">
            <h4>MÁS PRIORÍZATE</h4>
            <ul className="list-unstyled">
                <li>L-S de 8:00h a 20:00h</li>
                <li>(+34) 91 13 92 142</li>
                <li>service@priorizate.com</li>
                <li>Av. las Bases, 48, Barcelona (08012)</li>
            </ul>
        </div>
        </div>
        {/*Footer Bottom */}
        <div className="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} PRIORÍZATE. Todos los derechos reservados.
            </p>
        </div>
        </div>  
        </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;

}

ul li a {
    color: var(--mainGrey);

}
ul li a:hover {
    color:var(--mainLightGrey);
}
`;