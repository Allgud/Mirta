import { Alert } from 'react-bootstrap'

export default function AlertError({text, close}) {
  return (
    <Alert variant='danger' onClose={close} className='mt-2'>
      <p>{text}</p>
    </Alert>
  )
}