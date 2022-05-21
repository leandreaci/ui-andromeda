import React, { ReactNode } from 'react'
import { AlertProviderProps as ProviderProps, positions, Provider } from 'react-alert'
import { AlertTemplate } from './alert-template'

type AlertProviderProps = {
  children: ReactNode
}

const options: Omit<ProviderProps, 'template'> = {
  position: positions.MIDDLE,
  timeout: 5000
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children, ...props }: AlertProviderProps) => {
  return (
    <Provider {...options} {...props} template={AlertTemplate}>
      {children}
    </Provider>
  )
}
