import React from 'react'
import { Alert, AlertProps, AlertRef, Button } from '../../../src'

const Example = (args: AlertProps) => {
  const alertRef = React.useRef<AlertRef>(null)

  const open = () => {
    alertRef.current?.open()
  }

  /*
    React.useEffect(() => {
      alertRef.current?.open()
    })
  */

  return (
    <>
      <Button onClick={open}>Open Alert</Button>
      <Alert {...args} ref={alertRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <Button color="success" onClick={() => alertRef.current?.close()}>Close</Button>
      </Alert>
    </>
  )
}

Example.args = {
  color: 'default',
  showButton: false,
  buttonText: 'Ok'
}

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['default', 'success', 'danger', 'warning', 'info']
  }
}

export default Example
