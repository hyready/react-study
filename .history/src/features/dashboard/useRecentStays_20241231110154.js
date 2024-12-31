import { useSearchParams } from 'react-router'
import { getStaysAfterDate } from '../../services/apiBookings'
import { useQuery } from '@tanstack/react-query'

function useRecentStays() {
  const [searchParams] = useSearchParams()
  const date = !searchParams.get('last') ? '7' : searchParams.get('last')
  const 
  const {} = useQuery({
    queryFn: () => getStaysAfterDate(date),
    queryKey: ['bookings']
  })
}

export default useRecentStays
