export const SEASON_MAP: Record<string, string> = {
  winter: 'Зимние',
  summer: 'Летние',
  all_seasons: 'Всесезонные',
}

const reverseSeasonMap: Record<string, string> = Object.fromEntries(
  Object.entries(SEASON_MAP).map(([key, value]) => [value, key]),
)

export const mapSeasonToRu = (values: string[]): string[] =>
  values.map((key) => SEASON_MAP[key] || '')

export const mapSeasonToEn = (values: string[]): string[] =>
  values.map((value) => reverseSeasonMap[value] || '')
