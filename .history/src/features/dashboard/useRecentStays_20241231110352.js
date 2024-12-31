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
  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['bookings', `last-${queryDate}`]
  })
  const confirmedStays = stays?.filter(
    stay => stay.status === 'checked-in' || stay.status === 'checked-out'
  )
}

export default useRecentStays
