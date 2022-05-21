import React from 'react'
import { Container, ContainerProps } from '../../../src'

const Example = (args: ContainerProps) => (
  <Container {...args} />
)

Example.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut commodi dolores, eaque earum laudantium nemo, neque, numquam quod similique unde ut voluptate. Adipisci aliquid asperiores fuga? Iste sequi, voluptatum.'
}

Example.argTypes = {
  type: {
    control: { type: 'select' },
    options: ['fluid', 'xxl', 'xl', 'lg', 'md', 'sm']
  }
}

export default Example
