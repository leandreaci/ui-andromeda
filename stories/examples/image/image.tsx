import React from 'react'
import { Image, ImageProps } from '../../../src/atoms/image'

const Example = (args: ImageProps) => (
   <Image {...args} src="https://picsum.photos/seed/picsum/300/300" alt="Static random image" />
)

Example.args = {
  full: false,
  circle: false,
  rounded: false,
  thumbnail: false,
  align: undefined
}

Example.argTypes = {
  align: {
    control: { type: 'select' },
    options: ['', 'start', 'center', 'end']
  }
}

export default Example
