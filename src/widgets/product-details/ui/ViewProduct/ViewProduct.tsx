import { BuyCard } from 'features/buy-card'

import { BriefDescription } from 'entities/brief-description/ui/BriefDescription/BriefDescription'
import { BriefDescriptionMobile } from 'entities/brief-description/ui/BriefDescriptionMobile/BriefDescriptionMobile'
import { ProductHeader } from 'entities/product-header'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { ProductDetailsTypes } from 'shared/types/ProductDetailsTypes'
import { Space } from 'shared/ui/Space/Space'
import { TiresImage } from 'shared/ui/TiresImage'

import s from './ViewProduct.module.scss'

interface Props {
  data: ProductDetailsTypes
}

export function ViewProduct({ data }: Props) {
  const { isMobile } = useScreenWidth()

  return (
    <section className={s.viewProduct}>
      <ProductHeader
        title={data.title}
        season={data.characteristics.season}
        warranty={data.warranty}
        id={data.id}
        comments_count={data.comments_count}
        average_rating={data.average_rating}
      />

      <Space h={45} />

      <div className={s.container}>
        <TiresImage
          images={data.image || []}
          season={data.characteristics.season}
        />

        {isMobile ? (
          <BriefDescriptionMobile data={data.characteristics} />
        ) : (
          <BriefDescription data={data.characteristics} />
        )}

        <BuyCard
          data={data}
          title={data.title}
          images={data.image}
        />
      </div>
    </section>
  )
}
