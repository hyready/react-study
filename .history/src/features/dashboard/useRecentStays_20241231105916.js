import { useSearchParams } from 'react-router'
import { getStaysAfterDate } from '../../services/apiBookings'

function useRecentStays() {
  const [searchParams] = useSearchParams()
}

export default useRecentStays
