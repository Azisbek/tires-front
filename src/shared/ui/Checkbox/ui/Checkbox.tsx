import clsx from 'clsx'

import { ReactNode } from 'react'

import { Text } from 'shared/ui/Text'

import s from './Checkbox.module.scss'

interface CheckboxProps {
  children: ReactNode
  onClick: (value: boolean) => void
  checked: boolean
  className?: string
  color?: 'black' | 'orange'
}

export function Checkbox({
  children,
  onClick,
  checked,
  className,
  color = 'black',
}: CheckboxProps) {
  return (
    <div
      className={clsx(s.wrapper, className)}
      onClick={() => onClick(!checked)}
    >
      <div className={clsx(s.check, checked && s.activeCheck)}></div>

      <Text
        size="sm-14"
        className={s[color]}
      >
        {children}
      </Text>
    </div>
  )
}
