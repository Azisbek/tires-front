import s from './Tabs.module.scss'

interface TabsProps {
  options: string[]
  selected: string
  onSelect: (value: string) => void
}

export const Tabs = ({ options, selected, onSelect }: TabsProps) => (
  <div className={s.tabs}>
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        className={selected === opt ? s.activeTab : ''}
        type="button"
      >
        {opt}
      </button>
    ))}
  </div>
)
