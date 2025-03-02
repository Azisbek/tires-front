import iconca from '../../../shared/assets/icon/Union.png'
import s from '../ui/PrimitionCard.module.scss'

interface Product {
  id: number
  title: string
  tags: string[]
  expiryDate: string
  imageUrl: string
}

interface ProductStocksListProps {
  product: Product 
}

export const PromitionCard: React.FC<ProductStocksListProps> = ({ product }) => {
  return (
    <div className={s.stocks}>
      <img 
        src={product.imageUrl}
        alt={product.title}
      />
      <p>{product.title}</p>
      <button className={s.stocksBtn}>{product.tags[0]}</button>
      <button className={s.stocksBtn}>{product.tags[1]}</button>
      <div>
        <img
          src={iconca}
          alt="Union iconca"
        />
        Действует до: <b>{product.expiryDate}</b>
      </div>
    </div>
  )
}
