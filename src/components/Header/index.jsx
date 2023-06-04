import { Container } from "react-bootstrap";

import Navigation from "../Navigation";
import UserPanel from "../UserPanel";

export default function Header() {
  return (
    <Container className="d-flex">
      <Navigation />
      <UserPanel />
    </Container>
  );
}