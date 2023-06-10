import { Spinner, Row } from "react-bootstrap";

export default function Loader() {
  return (
    <Row className="d-flex justify-content-center">
      <Spinner animation="border" role="status" variant="primary" className="mt-5" />
    </Row>
  );
}