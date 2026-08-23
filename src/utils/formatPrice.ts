const defaultLocale = 'sr-RS'

export function formatPrice(price: number, currency: string, locale = defaultLocale): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  }).format(price)
}
