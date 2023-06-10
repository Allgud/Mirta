import { Dropdown, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sortFromBegin, sortFromEnd, defaultSort } from '../../store/actions/actionCreator'
import { useState } from "react";

const items = ["Default", "A - Z", "Z - A"]

export default function Sorting() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState('Default')

  const handleChange = (value) => {
    setMode(value)
    switch (value) {
      case "Default": {
        dispatch(defaultSort())
        break
      }
      case "A - Z": {
        dispatch(sortFromBegin())
        break
      }
      case "Z - A": {
        dispatch(sortFromEnd())
        break
      }
      default: setMode('Default')
    }
  }

  return (
    <Container className="mt-2 d-flex justify-content-end">
      <Dropdown>
        <Dropdown.Toggle variant="primary" >
          Sort by: {mode}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            items.map(item => (
              <Dropdown.Item as="button" key={item} value={item} onClick={(evt) => handleChange(evt.target.value)}>{item}</Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}