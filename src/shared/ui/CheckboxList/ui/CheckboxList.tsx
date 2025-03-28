import clsx from 'clsx'

import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox/ui/Checkbox'

import s from './CheckboxList.module.scss'

interface CheckboxListProps {
  dataTexts: string[]
  data: boolean[]
  setData: (index: number, value: boolean) => void
}

export function CheckboxList({ dataTexts, data, setData }: CheckboxListProps) {
  const [isOpen, setIsOpen] = useState(dataTexts.length < 6)

  return (
    <>
      <div className={clsx(s.wrapper, isOpen && s.open)}>
        {dataTexts.map((text, i) => (
          <Checkbox
            key={`${text}${i}`}
            checked={data[i]}
            onChange={(checked) => setData(i, checked)}
          >
            {text}
          </Checkbox>
        ))}
      </div>
      {dataTexts.length > 5 && (
        <AppButton
          variant="border"
          onClick={() => setIsOpen(!isOpen)}
          className={s.show}
        >
          {!isOpen ? (
            <>
              <span>Показать все</span> ({dataTexts.length - 5})
            </>
          ) : (
            <span>Скрыть все</span>
          )}
        </AppButton>
      )}
    </>
  )
}
