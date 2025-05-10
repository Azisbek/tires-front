import { ProductImageProps } from '../model/types'

export const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
    />
  )
}
