import { ProductCardProps } from "../model/types";

export const popularProductsMock: ProductCardProps[] = [
  {
    productId: 30,
    productImg: '/tire.jpeg',
    season: 'winter',
    rating: 4.5,
    commentQuantity: 3,
    productTitle: 'Vector',
    inStock: 3,
    price: 3000,
    isFavorite: true,
  },
  {
    productId: 31,
    productImg: '/tire.jpeg',

    season: 'summer',
    rating: 4.2,
    commentQuantity: 5,
    productTitle: 'Goodyear Vector 4Seasons',
    inStock: 5,
    price: 4500,
    isFavorite: false,
  },
  {
    productId: 32,
    productImg: '/tire.jpeg',

    season: 'allSeason',
    rating: 4.8,
    commentQuantity: 8,
    productTitle: 'Continental AllSeason',
    inStock: 2,
    price: 5200,
    isFavorite: true,
  },
  {
    productId: 33,
    productImg: '/tire.jpeg',

    season: 'winter',
    rating: 4.6,
    commentQuantity: 4,
    productTitle: 'Goodyear UltraGrip',
    inStock: 7,
    price: 3800,
    isFavorite: false,
  },
]
