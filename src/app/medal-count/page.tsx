import { MedalTable } from '@/components/MedalCount/MedalTable'
import { CountryMedals } from '@/types/medal-count.types'

export default async function MedalCountPage() {
  async function getMedals() {
    try {
      const response = await fetch(
        ` ${process.env.MEDAL_COUNT_API_BASE_URL}/medal-count`
      )

      if (!response.ok) {
        throw new Error('Unable to load medals data')
      }

      const medals: CountryMedals[] = await response.json()

      return medals
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error('Error on server')
      }
    }
  }

  const medals = await getMedals()

  return <MedalTable medals={medals} />
}
