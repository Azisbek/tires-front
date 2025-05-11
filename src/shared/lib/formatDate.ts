export const formatDate = (isoString: string) => {
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('ru-RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
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
