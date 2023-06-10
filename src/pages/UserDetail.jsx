import { Card, ListGroup, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PostView from '../components/PostView'
import Loader from "../components/Loader";
import { useEffect } from "react";
import { getCurrentUserPosts, getCurrentUser } from "../store/actions/actionCreator";

export default function UserDetails() {
  const { currentUser, loading, currentUserPosts } = useSelector(store => store.users)
  const location = useLocation()
  const dispatch = useDispatch()
  const userId = location.pathname.split('/').splice(-1)

  useEffect(() => {
    dispatch(getCurrentUserPosts(userId))
  }, [dispatch, location.pathname])

  useEffect(() => {
    if (!currentUser) {
      dispatch(getCurrentUser(userId))
    }
  }, [])

  return (
    <>
       {
        !currentUser
          ? <Loader />
          : <Col>
          <Link to="/" className="text-decoration-none mt-2">{'<'} Back to main</Link>
          <Card className="mt-2" style={{ width: "100%" }}>
            <Card.Header>
              <Card.Title className="p-2">{currentUser.name}</Card.Title>
              <Card.Subtitle className="p-2">{currentUser.username}</Card.Subtitle>
            </Card.Header>
            <ListGroup>
              <ListGroup.Item><strong>Email:</strong> {currentUser.email}</ListGroup.Item>
              <ListGroup.Item><strong>Address:</strong> {`${currentUser.address.city} ${currentUser.address.street} ${currentUser.address.suite}`}</ListGroup.Item>
              <ListGroup.Item><strong>Phone:</strong> {currentUser.phone}</ListGroup.Item>
              <ListGroup.Item><strong>Website:{' '}</strong><Link target="_blank" to={`http://${currentUser.website}`}>{currentUser.website}</Link></ListGroup.Item>
              <ListGroup.Item><strong>Company Name:</strong> {currentUser.company.name}</ListGroup.Item>
            </ListGroup>
          </Card>
          {
            loading
              ? <Loader />
              : <PostView posts={currentUserPosts} authorName={currentUser.name}/>
          }
        </Col>
      }
    </>
  )
}