import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup className="text-center">
      <Card>
        <Card.Img variant="top" src="/src/assets/ajichombo1.png" width="55%" height="65%"/>
        <Card.Body>
          <Card.Title>Aji Chombo</Card.Title>
          <Card.Text>
            Provincia: Chiriqui
            <br></br>Finca: Finca El amanecer
            <br></br>Categoria: Vegetal
          </Card.Text>
          <Button variant="primary">Ver Producto</Button>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img  variant="top" src="/src/assets/aguacate.png" width="50%" height="65%"/>
        <Card.Body>
          <Card.Title>Aguacate</Card.Title>
          <Card.Text>
            Provincia: Cocle
            <br></br> Finca:Finca Buen Pastor
            <br></br>Categoria: Fruta
          </Card.Text>
          <Button variant="primary">Ver Producto</Button>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card  >
        <Card.Img variant="top" src="/src/assets/espinacas.png"width="50%" height="65%"/>
        <Card.Body>
          <Card.Title>Espinaca</Card.Title>
          <Card.Text>
          Provincia: Cocle
          <br></br> Finca:Finca Buen Pastor
            <br></br>Categoria: Fruta
          </Card.Text>
          <Button variant="primary">Ver Producto</Button>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;