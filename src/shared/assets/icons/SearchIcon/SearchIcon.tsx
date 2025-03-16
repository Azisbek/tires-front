import searchDarkIcon from './searchDark.webp'
import searchOrangeIcon from './searchOrange.webp'
import searchWhiteIcon from './searchWhite.webp'

interface Props {
  variant?: 'dark' | 'white' | 'orange'
  width?: number
  height?: number
  className?: string
}

export function SearchIcon({
  variant = 'dark',
  width = 14,
  height = 14,
  className,
}: Props) {
  const icon = {
    dark: searchDarkIcon,
    white: searchWhiteIcon,
    orange: searchOrangeIcon,
  }

  return (
    <div className={className}>
      <img
        src={icon[variant]}
        alt="like-icon"
        width={width}
        height={height}
      />
    </div>
  )
}
