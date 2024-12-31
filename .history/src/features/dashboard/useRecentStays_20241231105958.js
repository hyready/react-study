import { useSearchParams } from 'react-router'
import { getStaysAfterDate } from '../../services/apiBookings'

function useRecentStays() {
  const [searchParams] = useSearchParams()
  const date = !searchParams.get('last') ? '7' : searchParams.get('last')
}

export default useRecentStays
