import GlobalRoutes from "./routes/GlobalRoutes";
import Header from "./components/Header";
import Navigation from './components/Navigation'
import { Container, Col } from "react-bootstrap";

export default function App() {
  return (
    <Container className="d-flex">
      <Col md={1} style={{ height:"100%" }} as="aside">
        <Navigation />
      </Col>
      <Col as="div">
        <Header />
        <GlobalRoutes />
      </Col>
    </Container>
  );
}