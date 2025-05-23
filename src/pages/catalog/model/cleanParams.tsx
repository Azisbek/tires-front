import { ProductQueryParams } from 'shared/types/CatalogpageTypes'

export function cleanParams(
  params: ProductQueryParams,
): Partial<ProductQueryParams> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => {
      if (Array.isArray(value)) {
        // Если это массив, оставляем его только если он не пустой
        return value.length > 0
      }

      return (
        value !== '' &&
        value !== null &&
        value !== undefined &&
        value !== 'Все' &&
        value !== 0 &&
        value !== 99999 &&
        value !== false &&
        !(typeof value === 'number' && isNaN(value))
      )
    }),
  )
}
