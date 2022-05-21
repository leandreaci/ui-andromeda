import { InputHTMLAttributes, ReactNode } from 'react'
import { DropzoneOptions } from 'react-dropzone'
import { FormBuildItemInput } from './components/input'

type FormBuilderValidations = 'length'|'min'|'max'|'matches'|'email'|'url'|'uuid'|'ensure'|'trim'|'lowercase'|'uppercase'|'nullable'|'required'|'defined'|'notRequired'|'oneOf'|'equals'

type Option = {
  label: string|number
  value: string|number
}

type StringOrNumber = string|number

type ColumnNumber = 1|2|3|4|5|6|7|8|9|10|11|12

export type FormBuilderValidationProps = {
  type: FormBuilderValidations
  params?: (StringOrNumber|RegExp)[]
}

export interface FormBuilderBasicsItem extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  column?: ColumnNumber|ColumnNumber[]
  columnClassName?: string
  title?: string
  placeholder?: string
  tabIndex?: number
  value?: StringOrNumber
  disabled?: boolean
  validations?: FormBuilderValidationProps[]
  validationType?: string
  onChange?: any
  onBlur?: any
  type?: string
}

interface FormBuilderItemPassword extends FormBuilderBasicsItem {
  component?: 'password'
  type?: 'password'
}

interface FormBuilderItemButton extends FormBuilderBasicsItem {
  component?: 'button'
  type?: 'submit'|'reset'|'button'
  color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'
  label: string
  labelLoading?: string
}

interface FormBuilderItemSelect extends Omit<FormBuilderBasicsItem, 'value'> {
  component?: 'select'
  value?: Option|Option[]
  options: Option[]
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isSearchable?: boolean
  isMulti?: boolean
}

interface FormBuilderItemDatePicker extends FormBuilderBasicsItem {
  component?: 'datepicker'
}

interface FormBuilderItemDropZone extends FormBuilderBasicsItem {
  component?: 'dropzone'
  dropzoneOptions?: DropzoneOptions
  textFileSelect?: string
  textFileSelected?: string
  showAcceptedFile?: boolean
  LabelAcceptedFile?: string
  showFileRejection?: boolean
  labelFileRejection?: string
}

interface FormBuilderItemRadio extends FormBuilderBasicsItem {
  component?: 'radio'
  value?: string
  options: Option[]
}

interface FormBuilderItemCheckbox extends Omit<FormBuilderBasicsItem, 'value'> {
  component?: 'checkbox'
  value?: string[]
  options: Option[]
}

export type FormBuilderItem =
  | FormBuildItemInput
  | FormBuilderItemPassword
  | FormBuilderItemButton
  | FormBuilderItemSelect
  | FormBuilderItemDropZone
  | FormBuilderItemDatePicker
  | FormBuilderItemRadio
  | FormBuilderItemCheckbox

export type FormBuilderGroup = {
  items: FormBuilderItem[]
  name?: string
  customComponent?: ReactNode
  classes?: {
    soFormGroup?: string
  }
}
