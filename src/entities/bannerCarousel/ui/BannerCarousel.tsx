import s from './BannerCarousel.module.scss'

interface Props {
  images: string[]
  currentSlide: number
}

export function BannerCarousel({ images, currentSlide = 1 }: Props) {
  return (
    <div className={s.bannerCarousel}>
      <div
        className={s.bannerSlides}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={'slide'}
            className={s.slide}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel
