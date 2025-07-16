import s from './RadioBoxPickup.module.scss'

interface Props {
  checked: string | number | boolean
  title: string
  workTimes?: string
  onClick: (value: string) => void
}

export function RadioBoxPickup({ checked, title, workTimes, onClick }: Props) {
  return (
    <div
      className={s.radioBox}
      onClick={() => onClick(title)}
    >
      <div className={s.radio}>
        {checked === title && <div className={s.checked}></div>}
      </div>

      <div className={s.content}>
        <p className={s.title}>{title}</p>
        {workTimes && (
          <p className={s.workTimes}>
            <img
              src="src/shared/assets/icons/Icon_time.svg"
              alt="time"
            />
            {workTimes}
          </p>
        )}
      </div>
    </div>
  )
}
