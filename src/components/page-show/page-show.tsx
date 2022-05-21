import React from 'react'
import { Button, Col, Dropdown, Icon, Link, Row, Separator, Spinner, Typography } from '../../'
import { DropdownItemProps } from '../../molecules/dropdown/dropdown-item'

export type PageShowProps = {
  children: React.ReactNode
  title: string|React.ReactNode
  loading: boolean
  extraButtons?: DropdownItemProps[]
  backButton?: {
    uri: string
    label: string
  }
}

export const PageShow: React.FC<PageShowProps> = (props: PageShowProps) => {
  const {
    loading = true,
    children,
    extraButtons = [],
    backButton,
    title
  } = props

  if (loading) return <Spinner />

  return (
    <div>
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
          {Boolean(backButton) && (
            <Button tag={Link} href={backButton?.uri} color="danger">
              <Icon icon="faAngleLeft" className="me-1" />
              {backButton?.label}
            </Button>
          )}
        </Col>
      </Row>

      <Separator />

      {children}

    </div>
  )
}
