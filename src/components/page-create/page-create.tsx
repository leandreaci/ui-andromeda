import React from 'react'
import { FormBuilderGroup } from '../form-builder/form-builder.types'
import { DropdownItemProps } from '../../molecules/dropdown/dropdown-item'
import { FormikHelpers } from 'formik'
import { Button, Col, Dropdown, FormBuilder, Icon, Link, Row, Separator, Typography } from '../../'

export type PageCreateProps<Values = any> = {
  data: FormBuilderGroup[]
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void
  title: string|React.ReactNode
  extraButtons?: DropdownItemProps[]
  cancelButton?: {
    uri: string
    label: string
  }
}

export const PageCreate: React.FC<PageCreateProps> = (props: PageCreateProps) => {
  const {
    title,
    extraButtons = [],
    cancelButton,
    onSubmit,
    data
  } = props

  return (
    <>
      <Row className="mb-3">
        <Col>
          <Typography lineBottom variant="h4" tag="h1">{title}</Typography>
        </Col>
        <Col className="ms-auto">
          {Boolean(extraButtons.length) && (
            <Dropdown
              color="default"
              className="me-2"
              label={<Icon icon="faEllipsisH" />}
              items={extraButtons}
            />
          )}
          {Boolean(cancelButton) && (
            <Button tag={Link} href={cancelButton?.uri} color="danger">
              <Icon icon="faAngleLeft" className="me-1" />
              {cancelButton?.label}
            </Button>
          )}
        </Col>
      </Row>

      <Separator />

      <FormBuilder data={data} onSubmit={onSubmit} />
    </>
  )
}
