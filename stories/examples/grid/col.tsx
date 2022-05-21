import React from 'react'
import { Col, ColProps, Row } from '../../../src'

const Example = (args: ColProps) => (
  <Row>
    <Col {...args} />
    <Col size={[12, 6, 4, 3]}>Column 2</Col>
    <Col size={[12, 6, 4, 3]}>Column 3</Col>
  </Row>
)

Example.args = {
  children: 'Column 1',
  size: 6
}

Example.argTypes = {
  size: {
    control: { type: 'select' },
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
}

export default Example
