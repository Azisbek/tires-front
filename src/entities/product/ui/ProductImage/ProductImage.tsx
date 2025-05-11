import s from './ProsuctImage.module.scss'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
}

export function ProductImage({ src, alt, className }: ProductImageProps) {
  return (
    <img
      className={`${s.img} ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
    />
  )
}
