import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Button } from '../atoms/button'

export type AlertRef = {
  open: () => void
  close: () => void
}

export type AlertProps = {
  color?: 'default'|'success'|'info'|'warning'|'error',
  showButton?: boolean
  buttonText?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Alert = forwardRef<AlertRef, AlertProps>((props: AlertProps, ref) => {
  const {
    children,
    className,
    showButton,
    buttonText = 'Ok',
    color
  } = props

  const [display, setDisplay] = useState<boolean>(false)

  const open = () => setDisplay(true)

  const close = () => setDisplay(false)

  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close()
  }))

  const classes = classNames(
    className,
    'alert-content',
    color
  )

  if (!display) return <></>

  return ReactDOM.createPortal(
    <>
      <div className="alert-overlay" onClick={close}/>
      <div className={classes}>
        <div className="alert-body">{children}</div>
        {showButton && (
          <div className="alert-footer">
            <Button color="primary" onClick={close}>{buttonText}</Button>
          </div>
        )}
      </div>
    </>, document.getElementById('alert-portal')!)
})

Alert.displayName = 'Alert'
