import React, { ImgHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  circle?: boolean
  rounded?: boolean
  thumbnail?: boolean
  full?: boolean
  align?: 'start'|'center'|'end'
  objectFit?: 'cover'|'contain'|'none'|'scale-down'|'unset'|'fill'|'revert'
  innerRef?: React.Ref<HTMLImageElement>
  lazy?: boolean
}

function alignValue (align?: string) {
  if (align === 'start') return 'float-start'
  if (align === 'end') return 'float-end'
  if (align === 'center') return 'mx-auto d-block'
  return false
}

function objectFitValue (attr?: string) {
  if (attr === 'cover') return 'object-fit-cover'
  if (attr === 'contain') return 'object-fit-contain'
  if (attr === 'none') return 'object-fit-none'
  if (attr === 'scale-down') return 'object-fit-scale-down'
  if (attr === 'unset') return 'object-fit-unset'
  if (attr === 'fill') return 'object-fit-fill'
  if (attr === 'revert') return 'object-fit-revert'
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const {
    src,
    alt,
    circle,
    rounded,
    thumbnail,
    align,
    objectFit,
    full,
    innerRef,
    className,
    width,
    height,
    lazy = false,
    ...attrs
  } = props

  const classes = classNames(
    className,
    circle && 'circle',
    rounded && 'rounded',
    thumbnail ? 'img-thumbnail' : 'img-fluid',
    full && 'w-100',
    objectFitValue(objectFit),
    alignValue(align)
  )

  const styleOptions = {
    style: {
      width,
      height
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      {...attrs}
      {...styleOptions}
      ref={innerRef}
      className={classes}
      loading={lazy ? 'lazy' : 'eager'}
    />
  )
}
