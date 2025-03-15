import summerIcon from 'shared/assets/icons/summer-tires.svg'
import winterIcon from 'shared/assets/icons/winter-tires.svg'

interface Props {
  tiresType?: 'summer' | 'winter'
}

export function TiresIcon({ tiresType }: Props) {
  const tireIcons = {
    summer: summerIcon,
    winter: winterIcon,
  }

  const tireIcon = tireIcons[tiresType || 'summer']

  return (
    <img
      src={tireIcon}
      alt={tiresType}
    />
  )
}
