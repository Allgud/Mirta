import { Container, Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../store/actions/actionCreator'

export default function Paginator() {
  const dispatch = useDispatch()
  const { postsView } = useSelector(store => store.posts)
  const pages = Object.keys(postsView)
    .map(number =>
      <Pagination.Item
        key={number}
        active={+number === 1}
        onClick={() => dispatch(setCurrentPage(+number))}
      >
        {+number}
      </Pagination.Item>)
  
  return (
    <Container className='d-flex justify-content-center pt-2'>
      <Pagination>{pages}</Pagination>
    </Container>
    
  )
}