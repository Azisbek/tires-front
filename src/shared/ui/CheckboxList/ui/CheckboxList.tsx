import clsx from 'clsx'

import { useState } from 'react'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox/ui/Checkbox'

import s from './CheckboxList.module.scss'

interface CheckboxListProps {
  dataTexts: string[]
  data: string[]
  setData: (updated: string[]) => void
}

export function CheckboxList({ dataTexts, data, setData }: CheckboxListProps) {
  const [isOpen, setIsOpen] = useState(dataTexts.length < 6)

  const toggle = (value: string) => {
    if (data.includes(value)) {
      setData(data.filter((v) => v !== value))
    } else {
      setData([...data, value])
    }
  }

  return (
    <>
      <div className={clsx(s.wrapper, isOpen && s.open)}>
        {dataTexts.map((text) => (
          <Checkbox
            key={text}
            checked={data.includes(text)}
            onChange={() => toggle(text)}
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
