import { CountryMedals } from '@/types/countryMedals'
import medals from './medals.json'

export async function GET() {
  const medalsWithTotal: CountryMedals[] = medals.map((countryMedals) => {
    return {
      ...countryMedals,
      total: countryMedals.gold + countryMedals.silver + countryMedals.bronze,
    }
  })
  return Response.json(medalsWithTotal)
}
