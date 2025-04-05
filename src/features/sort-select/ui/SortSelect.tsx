import { InputSelect } from 'shared/ui/input-components'

interface SortSelectProps {
  onChange: (sort: string) => void
  currentSort: string
}

const sortOptions = [
  { id: 'price', label: 'Сначала дорогие' },
  { id: '-price', label: 'Сначала дешевые' },
]

export function SortSelect({ onChange, currentSort }: SortSelectProps) {
  const selectedOption = sortOptions.find((opt) => opt.id === currentSort)

  const handleChange = (label: string) => {
    const selected = sortOptions.find((opt) => opt.label === label)
    if (selected) {
      onChange(selected.id)
    }
  }

  return (
    <InputSelect
      onChange={handleChange}
      className="select"
      color="white"
      options={sortOptions.map((opt) => opt.label)}
      defaultValue={selectedOption?.label}
    />
  )
}
