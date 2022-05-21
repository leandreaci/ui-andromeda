import React from 'react'
import { FormikHelpers } from 'formik'
import { FormBuilderItem } from './form-builder.types'
import { FormBuilderComponentsList } from './form-builder-components-list'
import { FormGroup } from './_partials/form-group'

type Props = FormBuilderItem & {
  actions: FormikHelpers<any>
}

export const FormBuilderElement: React.FC<Props> = (props: Props) => {
  const {
    component,
    value,
    actions,
    ...elements
  } = props

  const Component = (component && typeof component === 'object')
    ? component
    : (
        component != null
          ? FormBuilderComponentsList[component]
          : null
      )

  if (!Component) return null

  return (
    <FormGroup name={props.name} title={props.title} validations={props.validations}>
      <Component {...elements} value={value || ''} actions={actions} />
    </FormGroup>
  )
}
