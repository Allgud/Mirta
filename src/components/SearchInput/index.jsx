import { InputGroup, Form, CloseButton } from "react-bootstrap"
import { useState } from "react"

export default function SearchInput() {
  const [value, setValue] = useState('')

  const clearInput = () => {
    setValue('')
  }

  return (
    <InputGroup>
      <Form.Control
        placeholder="Search post"
        aria-label="Search posts"
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
      <InputGroup.Text>
        <CloseButton onClick={clearInput}/>
      </InputGroup.Text>
    </InputGroup>
  )
}