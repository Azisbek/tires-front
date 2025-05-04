import { InputSelect } from 'shared/ui/input-components'

import s from './AdminSelectBlock.module.scss'

export function AdminSelectBlock({
  label,
  options,
  error,
  onChange,
}: {
  label: string
  options: string[]
  error?: string
  onChange: (str: string) => void
}) {
  return (
    <div className={s.inputBlock}>
      <label>{label}</label>
      <InputSelect
        color="darkGrey"
        options={options}
        onChange={onChange}
        defaultValue={`Выберите ${label.toLowerCase()}`}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  )
}
