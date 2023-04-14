import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <Container>
    <Form>
    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control placeholder="Apellidos" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="Dirección" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control placeholder="Ciudad" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Provincia</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Álava</option>
            <option>Albacete</option>
            <option>Alicante</option>
            <option>Almería</option>
            <option>Asturias</option>
            <option>Ávila</option>
            <option>Badajoz</option>
            <option>Baleares</option>
            <option>Barcelona</option>
            <option>Burgos</option>
            <option>Cáceres</option>
            <option>Cádiz</option>
            <option>Cantabria</option>
            <option>Castellón</option>
            <option>Ciudad Real</option>
            <option>Córdoba</option>
            <option>La Coruña</option>
            <option>Cuenca</option>
            <option>Gerona</option>
            <option>Granada</option>
            <option>Guadalajara</option>
            <option>Guipúzcoa</option>
            <option>Huelva</option>
            <option>Huesca</option>
            <option>Jaén</option>
            <option>León</option>
            <option>Lérida</option>
            <option>Lugo</option>
            <option>Madrid</option>
            <option>Málaga</option>
            <option>Murcia</option>
            <option>Navarra</option>
            <option>Orense</option>
            <option>Palencia</option>
            <option>Las Palmas</option>
            <option>Pontevedra</option>
            <option>La Rioja</option>
            <option>Salamanca</option>
            <option>Segovia</option>
            <option>Sevilla</option>
            <option>Soria</option>
            <option>Tarragona</option>
            <option>Santa Cruz de Tenerife</option>
            <option>Teruel</option>
            <option>Toledo</option>
            <option>Valencia</option>
            <option>Sevilla</option>
            <option>Valladolid</option>
            <option>Vizcaya</option>
            <option>Zamora</option>
            <option>Zaragoza</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Código postal</Form.Label>
          <Form.Control maxlength="5"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="He leído y acepto los términos y condiciones de uso" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registro
      </Button>
    </Form>
    </Container>
  );
}

export default GridComplexExample;
