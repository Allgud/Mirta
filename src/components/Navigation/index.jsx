import { Container, Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Container>
      <Navbar expand={false}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mt-2">
            <Nav.Link href="/">Posts</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}