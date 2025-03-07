import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

type Props = {
  link?: string
  className?: string
  children?: React.ReactNode
  onClick?: (event: any) => void
  style?: {
    width: string
  }
} & React.ComponentProps<'button'>

export const Button = ({
  link,
  children,
  className,
  onClick,
  style,
}: Props) => {
  const buttonClassName = `${styles.root} ${className}`
  const button = (
    <button
      className={buttonClassName}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )

  if (link) {
    return (
      <Link
        to={link}
        className={styles.linkContainer}
      >
        {button}
      </Link>
    )
  }

  return button
}
