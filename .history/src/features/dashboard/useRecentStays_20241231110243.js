import { useSearchParams } from 'react-router'
import { getStaysAfterDate } from '../../services/apiBookings'
import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'

function useRecentStays() {
  const [searchParams] = useSearchParams()
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'))
  const queryDate = subDays(new Date(), numDays).toISOString()
  const {} = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['bookings']
  })
}

export default useRecentStays
