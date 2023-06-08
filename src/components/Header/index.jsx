import { Container, Col, Image, Row } from "react-bootstrap";
import Img from "../../assets/img/image.svg";
import AlertError from "../AlertError";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput";
import { useLocation } from "react-router";

export default function Header() {
  const { error } = useSelector(store => store.posts)
  const location = useLocation()

  return (
    <Container>
      {error && <AlertError text={error} close={() => { }} />}     
      <Container className="d-flex p-2 gap-5 justify-content-end">
        {
          location.pathname === "/"
          && <Row className="flex-grow-1">
               <SearchInput />   
             </Row>
        }  
          <Row className="d-flex flex-row pt-2 justify-content-end flex-nowrap">
            <Col className="d-none d-sm-block">Alexander</Col>
            <Col className="d-none d-lg-block">allgud@bk.ru</Col>
            <Col>
              <Image src={Img} roundedCircle />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}