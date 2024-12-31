import { useQuery } from '@tanstack/react-query'
import { getBooking } from '../../services/apiBookings'
export default function useBookings() {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBooking
  })
  return { bookings, isLoading }
}