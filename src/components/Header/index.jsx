import { Container, Row, Col, Image } from "react-bootstrap";
import Img from "../../assets/img/image.svg";
import AlertError from "../AlertError";
import { useSelector } from "react-redux";

export default function Header() {
  const { error } = useSelector(store => store.posts)

  return (
    <>
      {
        error
          ? <AlertError text={error} close={() => { }} />
          : <Container className="d-flex justify-content-end">
              <Row>
                <Col className="pt-3 d-flex justify-content-end">Alexander</Col>
                <Col className="pt-3 d-flex justify-content-start">allgud@bk.ru</Col>
                <Col className="pt-2 d-flex justify-content-end">
                  <Image src={Img} roundedCircle />
                </Col>
              </Row>
            </Container>
      }
    </>
  );
}