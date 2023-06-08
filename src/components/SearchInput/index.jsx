import { InputGroup, Form, CloseButton } from "react-bootstrap"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchByTitle } from "../../store/actions/actionCreator"

export default function SearchInput() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const clearInput = () => {
    setValue('')
    dispatch(searchByTitle(''))
  }

  const handleChange = (evt) => {
    setValue(evt.target.value)
    dispatch(searchByTitle(evt.target.value))
  }

  return (
    <InputGroup>
      <Form.Control
        placeholder="Search post"
        aria-label="Search posts"
        value={value}
        onChange={evt => handleChange(evt)}
      />
      <InputGroup.Text>
        <CloseButton onClick={clearInput}/>
      </InputGroup.Text>
    </InputGroup>
  )
}