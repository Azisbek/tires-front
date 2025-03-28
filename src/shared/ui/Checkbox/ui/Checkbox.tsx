import { ReactNode } from 'react'

import { Text } from 'shared/ui/Text'

import s from './Checkbox.module.scss'

interface CheckboxProps {
  children: ReactNode
  onChange: (value: boolean) => void
  checked: boolean
}

export function Checkbox({
  children,
  onChange,
  checked,
}: CheckboxProps) {
  return (
    <label className={s.wrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <Text size="sm-14">{children}</Text>
    </label>
  )
}
