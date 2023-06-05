import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Loader from '../Loader'
import { useSelector } from 'react-redux'

export default function Layout() {
  const { loading } = useSelector(store => store.posts)

  return (
    <Container>
      {
        loading ? <Loader /> : <Outlet />
      }
    </Container>
  );
}