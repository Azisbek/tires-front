import { useGetFavoritesQuery } from 'pages/favorite/api';
import { ProductList } from 'widgets/product-list';
import { ProductCardProps } from 'entities/product/types/types';
import { Text, Title } from 'shared/ui/Text';
import s from './FavoritePage.module.scss';
import { Loader } from 'shared/ui/loader-components';
import { ErrorScreen } from 'shared/ui/error-boundary';

export function FavoritePage() {
  const { data, isLoading, error } = useGetFavoritesQuery();

  if (isLoading) return <Loader />;
  if (error) return <ErrorScreen />;
  if (!data?.favorites?.length) return <p>No favorite products</p>;


  const formattedFavorites: ProductCardProps[] = data.favorites.map((product) => ({
    productId: product.product_Id,
    productImg: product.image,
    price: Number(product.price), 
    isFavorite: product.is_favorite,
    productTitle: product.title,
    inStock: product.in_stock,
    rating: product.rating ?? 0,
    commentQuantity: product.comment_quantity ?? 0,
    season: product.season === 1 ? 'winter' : product.season === 2 ? 'summer' : 'allSeason',
  }));

  return (
    <div className={s.container}>
      <Title className={s.title} size="lg-32">
        Избранное
      </Title>

      <Text className={s.text} size="sm-14" color="gray">
        Товаров: {data.total_favorites}
      </Text>

      <ProductList className={s.productList} products={formattedFavorites} />
    </div>
  );
}
