import { Card, Image } from "react-bootstrap";
import Img from '../../assets/img/image.svg'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/actions/actionCreator";

export default function Post({ title, text, postId, author, userId }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRedirect = (id) => {
    dispatch(setCurrentUser(id))
    navigate(`user-details/${id}`)
  }
  
  return (
    <Card style={{ width: "100%" }} className="mt-2" bg="light">
      <Card.Body>
        <Card.Header onClick={() => handleRedirect(userId)} className="mb-2 d-flex gap-2">
            <Image src={Img} roundedCircle />
            <Card.Text className="pt-1">{author}</Card.Text>
        </Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link href="#">Комментарии</Card.Link>
      </Card.Body>
    </Card>
  );
}