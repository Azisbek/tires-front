import { InputSelect } from 'shared/ui/input-components'

import s from './SelectBlock.module.scss'

export function SelectBlock({
  label,
  options,
}: {
  label: string
  options: string[]
}) {
  return (
    <div className={s.inputBlock}>
      <label>{label}</label>
      <InputSelect
        color="darkGrey"
        options={options}
        defaultValue={`Выберите ${label.toLowerCase()}`}
      />
    </div>
  )
}
