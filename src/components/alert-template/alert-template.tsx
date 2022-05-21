import React, { CSSProperties } from 'react'
import { Button } from '../../atoms/button'
import { Icon } from '../../atoms/icon'
import { AlertComponentPropsWithStyle } from 'react-alert'

export type AlertTemplateProps = AlertComponentPropsWithStyle

const style = {
  content: {
    width: '300px',
    position: 'relative',
    boxShadow: '0 0 15px rgb(0 0 0 / 10%)',
    borderRadius: '4px',
    border: '1px solid #ddd',
    padding: '15px 50px 15px 15px',
    background: '#f2f2f2'
  },
  close: {
    position: 'absolute',
    top: '50%',
    right: '5px',
    padding: '0 8px',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  }
}

export const AlertTemplate = (props: AlertTemplateProps) => {
  const {
    message,
    close
    // options
  } = props

  return (
    <div style={style.content as CSSProperties}>
      {/* {options.type === 'info' && <Icon icon="fa-exclamation-circle" className="me-1"/>}
      {options.type === 'success' && <Icon icon="fa-check-circle" className="me-1"/>}
      {options.type === 'error' && <Icon icon="fa-times-circle" className="me-1"/>} */}
      <div>{message}</div>
      <div>
        <Button onClick={close} style={style.close as CSSProperties}>
          <Icon icon="fa-times" />
        </Button>
      </div>
    </div>
  )
}
