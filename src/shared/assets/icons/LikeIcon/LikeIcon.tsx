import likeIcon from './like.webp'
import likeWhiteIcon from './likeWhite.webp'

interface Props {
  variant?: 'dark' | 'white'
  width?: number
  height?: number
  className?: string
}

export function LikeIcon({
  variant = 'dark',
  width = 14,
  height = 14,
  className,
}: Props) {
  const icon = variant === 'white' ? likeWhiteIcon : likeIcon

  return (
    <div className={className}>
      <img
        src={icon}
        alt="like-icon"
        width={width}
        height={height}
      />
    </div>
  )
}
