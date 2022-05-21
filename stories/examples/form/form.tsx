import React from 'react'
import { Input, InputProps } from '../../../src/atoms/input'
import { Checkout } from '../../../src/atoms/checkbox'
import { Radio } from '../../../src/atoms/radio'

const Example = (args: InputProps) => (
  <form>
    <h2>Input</h2>
    <div className="form-group">
      <label className="form-label" htmlFor="name">input:</label>
      <Input id="input" name="input" {...args} />
      <div className="invalid-feedback">Campo obrigatório</div>
    </div>

    <h2>Textarea</h2>
    <div className="form-group">
      <label className="form-label" htmlFor="textarea">textarea:</label>
      <Input type="textarea" id="textarea" name="textarea" />
    </div>

    <h2>File input</h2>
    <div className="form-group">
      <label className="form-label" htmlFor="file">file:</label>
      <Input type="file" id="file" name="file" />
    </div>

    <h2>Color</h2>
    <div className="form-group">
      <label className="form-label" htmlFor="color">file:</label>
      <Input type="color" id="color" name="color" />
    </div>

    <h2>Radio</h2>
    <div className="form-check">
      <Checkout name="checkbox"/>
      <label className="form-check-label" htmlFor="checkbox">checkbox 1</label>
    </div>

    <h2>Checkbox</h2>
    <div className="form-check">
      <Radio name="radio" />
      <label className="form-check-label" htmlFor="radio">radio 1</label>
    </div>
    <div className="form-check">
      <Radio name="radio" id="radio2" />
      <label className="form-check-label" htmlFor="radio2">radio 2</label>
    </div>
  </form>
)

export default Example
