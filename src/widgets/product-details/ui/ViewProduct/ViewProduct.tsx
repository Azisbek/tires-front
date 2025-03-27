import { descriptionContainer } from 'widgets/product-details/api/data'

import { BuyCard } from 'features/buy-card'

import { BriefDescription } from 'entities/brief-description/ui/BriefDescription/BriefDescription'
import { BriefDescriptionMobile } from 'entities/brief-description/ui/BriefDescriptionMobile/BriefDescriptionMobile'
import { ProductHeader } from 'entities/product-header'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { ProductDetailsTypes } from 'shared/types/ProductDetailsTypes'
import { Space } from 'shared/ui/Space/Space'
import { TiresImage } from 'shared/ui/TiresImage'

import s from './ViewProduct.module.scss'
import { Loader } from 'shared/ui/loader-components'

interface Props {
  data: ProductDetailsTypes
}

export function ViewProduct({ data }: Props) {
  const { isMobile } = useScreenWidth()

  return (
    <section className={s.viewProduct}>
      <ProductHeader
        title={data.title}
        season={data.characteristics.season} // временное решение, без этого не как не работает
        warranty={data.warranty}
        id={data.id}
        comments={data.comments}
        average_rating={data.average_rating}
      />

      <Space h={45} />

      <div className={s.container}>
        <TiresImage
          image={data.image_url}
          season={data.characteristics.season}
        />

        {isMobile ? (
          <BriefDescriptionMobile data={data.characteristics} />
        ) : (
          <BriefDescription data={data.characteristics} />
        )}

        <BuyCard data={data} />
      </div>
    </section>
  )
}
