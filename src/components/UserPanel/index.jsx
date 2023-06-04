import { Container, Row, Col, Image } from "react-bootstrap";
import Img from "../../assets/img/image.svg";

export default function UserPanel() {
  return (
    <Container>
      <Row>
        <Col className="pt-3 d-flex justify-content-end">Alexander</Col>
        <Col md={3} className="pt-3 d-flex justify-content-start">allgud@bk.ru</Col>
        <Col md={1} className="pt-2 d-flex justify-content-end">
          <Image src={Img} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}