import { ProductQueryParams } from 'shared/types/CatalogpageTypes'

export function cleanParams(
  params: ProductQueryParams,
): Partial<ProductQueryParams> {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, v]) =>
        v !== '' &&
        v !== null &&
        v !== undefined &&
        !(typeof v === 'number' && isNaN(v)),
    ),
  )
}
