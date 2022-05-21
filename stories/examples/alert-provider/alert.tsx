import React from 'react'
import {AlertProvider, useAlert, Button} from '../../../src'

const Alert = () => {
  const alert = useAlert()

  return (
    <Button onClick={() => {
      alert.show(<div>
        <div>Oh look, an alert!</div>
        <div>Oh look, an alert!</div>
      </div>)
    }}>
      Show Alert
    </Button>
  )
}

const Example = () => {
  return (
    <AlertProvider {...{ timeout: 5000 }}>
      <Alert />
    </AlertProvider>
  )
}

export default Example
