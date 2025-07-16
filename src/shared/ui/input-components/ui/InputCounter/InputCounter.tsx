import clsx from 'clsx'

import arrowBottomIcon from 'shared/assets/icons/ArrowBottom.svg'
import arrowTopIcon from 'shared/assets/icons/ArrowTop.svg'

import s from './InputCounter.module.scss'

interface Props {
  className?: string
  value: number | undefined
  increment?: () => void
  decrement?: () => void
}

export function InputCounter({
  className,
  value,
  increment,
  decrement,
}: Props) {
  return (
    <div className={clsx(s.counter, className)}>
      <p>{value}</p>

      <div className={s.btnsContainer}>
        <button
          onClick={increment}
          className={s.btnIncrement}
        >
          <img
            src={arrowTopIcon}
            alt="top"
          />
        </button>

        <button
          onClick={decrement}
          className={s.btnDecrement}
        >
          <img
            src={arrowBottomIcon}
            alt="bottom"
          />
        </button>
      </div>
    </div>
  )
}
