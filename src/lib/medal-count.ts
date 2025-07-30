import { CountryMedals } from '@/types/medal-count.types'

export const sortByValues = ['gold', 'silver', 'bronze', 'total'] as const

export type SortBy = (typeof sortByValues)[number]

export function sortMedals(medals: CountryMedals[], sortBy: SortBy) {
  const medalsSorted = medals.sort((a, b) => {
    const aSortByVal = a[sortBy]
    const bSortByVal = b[sortBy]

    switch (sortBy) {
      //   case 'gold':
      //     return bSortByVal - aSortByVal
      case 'silver':
        return bSortByVal - aSortByVal || b['gold'] - a['gold']
      case 'bronze':
        return bSortByVal - aSortByVal || b['gold'] - a['gold']
      case 'total':
        return bSortByVal - aSortByVal || b['gold'] - a['gold']
      default:
        return bSortByVal - aSortByVal || b['total'] - a['total']
    }
  })

  return medalsSorted
}
