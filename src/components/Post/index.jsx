import { Card } from "react-bootstrap";

export default function Post({ title, text, id }) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link href="#">Комментарии</Card.Link>
      </Card.Body>
    </Card>
  );
}