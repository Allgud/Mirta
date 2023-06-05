import { Container, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function UserDetails() {
  const { currentUser } = useSelector(store => store.users)

  if (!currentUser) {
    return <Navigate to={"/"} />
  }

  return (
    <Container className="d-flex justify-content-center" style={{width: "100%"}}>
      <Card className="mt-5" style={{ width: "100%" }}>
        <Card.Header>
          <Card.Title className="p-2">{currentUser.name}</Card.Title>
          <Card.Subtitle className="p-2">{currentUser.username}</Card.Subtitle>
        </Card.Header>
        <ListGroup>
          <ListGroup.Item><strong>Email:</strong> {currentUser.email}</ListGroup.Item>
          <ListGroup.Item><strong>Address:</strong> {`${currentUser.address.city} ${currentUser.address.street}`}</ListGroup.Item>
          <ListGroup.Item><strong>Phone:</strong> {currentUser.phone}</ListGroup.Item>
          <ListGroup.Item><strong>Website:{' '}</strong><Link to={`http://${currentUser.website}`}>{currentUser.website}</Link></ListGroup.Item>
          <ListGroup.Item><strong>Company Name:</strong> {currentUser.company.name}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}