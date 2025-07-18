export function formatDate(date: string | Date): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return 'Неверная дата'
  return d.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export const formatNewsDate = (isoString: string) => {
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export const formatPromotionDate = (isoString: string) => {
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}
