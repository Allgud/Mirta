import { Card, Image, Nav, Button } from "react-bootstrap";
import Img from '../../assets/img/image.svg'
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/actions/actionCreator";
import { useState } from "react";
import { getComments } from "../../store/actions/actionCreator";
import Loader from '../Loader'
import CommentList from "../CommentList";

export default function Post({ title, text, postId, author, userId }) {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { comments, loading, id } = useSelector(store => store.comments)

  const handleClick = () => {
    if (visible) setVisible(false)
    else {
      dispatch(getComments(postId))
      setVisible(true)
    }
  }

  const handleRedirect = (id) => {
    dispatch(setCurrentUser(id))
    navigate(`user-details/${id}`)
  }
  
  return (
    <Card style={{ width: "100%" }} className="mt-2" bg="light">
      <Card.Body>
        <Card.Header onClick={() => handleRedirect(userId)} className="mb-2">
          <Nav.Link className="d-flex gap-2">
            <Image src={Img} roundedCircle />
            <Card.Text className="pt-1">{author}</Card.Text>
          </Nav.Link>
        </Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          onClick={() => handleClick()}
        >
          {visible ? "Скрыть комментарии" : "Показать комментарии"}
        </Button>
        {
          (id === postId && visible)
          && <Card.Footer className="mt-2">
              {
                loading 
                ? <Loader />
                : <CommentList commentsArray={comments}/>
              }
        </Card.Footer>
        }
        
      </Card.Body>
    </Card>
  );
}