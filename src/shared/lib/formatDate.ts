export const formatDate = (isoString: string) => {
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('ru-RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}
