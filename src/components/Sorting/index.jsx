import { Container, Dropdown, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sortFromBegin, sortFromEnd, defaultSort } from '../../store/actions/actionCreator'

export default function Sorting() {
  const dispatch = useDispatch()

  return (
    <Container className="mt-2 d-flex justify-content-end">
      <Dropdown>
        <Dropdown.Toggle variant="primary" >
          Sort by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button" onClick={() => dispatch(defaultSort())}>Default</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => dispatch(sortFromBegin())}>A - Z</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => dispatch(sortFromEnd())}>Z - A</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}