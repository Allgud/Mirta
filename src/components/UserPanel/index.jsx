import { Container, Row, Col, Image } from "react-bootstrap";
import Img from "../../assets/img/image.svg";

export default function UserPanel() {
  return (
    <Container>
      <Row>
        <Col className="pt-3">Alexander</Col>
        <Col className="pt-3">allgud@bk.ru</Col>
        <Col className="pt-2">
          <Image src={Img} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}