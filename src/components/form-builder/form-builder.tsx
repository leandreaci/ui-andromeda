import React from 'react'
import { Form, Formik } from 'formik'
import { Row, Col, Typography } from '../../'
import { FormBuilderGroup } from './form-builder.types'
import { FormBuilderElement } from './form-builder-element'
import { FormBuilderHelper } from './utils/form-builder-helper'

export type FormBuilderProps = {
  data: FormBuilderGroup[]
  onSubmit: any
  className?: string
}

export const FormBuilder: React.FC<FormBuilderProps> = (props: FormBuilderProps) => {
  const {
    data,
    onSubmit,
    className
  } = props

  const options = {
    enableReinitialize: true,
    ...FormBuilderHelper.init(data).build(),
    onSubmit
  }

  return (
    <div className="w-100">
      <Formik {...options}>
        {(actions) => (
          <Form className={`form-builder${className ? ' ' + className : ''}`}>
            {data.map(({ name, customComponent: Component, items, classes }, index) => (
              <div
                key={index}
                className={`so-form-group${classes?.soFormGroup ? ' ' + classes?.soFormGroup : ''}`}
              >
                {name && <Typography tag="h2" variant="h5">{name}</Typography>}
                {Boolean(Component) && Component}

                <Row>
                  {items
                    .filter(item => item?.component)
                    .map(({ column, columnClassName, ...item }) => (
                      <Col key={item.name} size={column || 12} className={columnClassName}>
                        <FormBuilderElement {...item!} actions={actions} />
                      </Col>
                    ))}
                </Row>
              </div>
            ))}
          </Form>
        )}
      </Formik>
    </div>
  )
}
