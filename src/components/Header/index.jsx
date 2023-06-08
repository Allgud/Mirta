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
      <Container className="d-flex p-2 gap-5">
        <Row className="flex-grow-1">
          <SearchInput />   
        </Row>
        <Row>
          <Row className="d-flex flex-row pt-2 justify-content-end flex-nowrap">
            <Col className="d-none d-sm-block">Alexander</Col>
            <Col className="d-none d-lg-block">allgud@bk.ru</Col>
            <Col>
              <Image src={Img} roundedCircle />
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}