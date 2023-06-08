import { Container, Col, Image, Row } from "react-bootstrap";
import Img from "../../assets/img/image.svg";
import AlertError from "../AlertError";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput";

export default function Header() {
  const { error } = useSelector(store => store.posts)

  return (
    <Container>
      {error && <AlertError text={error} close={() => { }} />}     
      <Container className="d-flex pt-2">
        <Container style={{width: "100%"}}>
          <SearchInput />   
        </Container>
        <Container className="d-flex pt-1 justify-content-end">
          <Row>
            <Col>Alexander</Col>
            <Col>allgud@bk.ru</Col>
            <Col>
              <Image src={Img} roundedCircle />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}