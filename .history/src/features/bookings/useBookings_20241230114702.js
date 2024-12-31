import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/apiBookings'
export default function useCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ['Bookings'],
    queryFn: getBookings
  })
  return { Bookings, isLoading }
}
