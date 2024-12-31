import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/apiBookings'
import { useSearchParams } from 'react-router'
export default function useBookings() {
  const [searchParams] = useSearchParams()
  const filterValue = searchParams.get('status')
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : {
          field: 'status',
          value: filterValue
        }

  const sortByRow = searchParams.get('sortBy') || 'startDate - desc'
  const [field, direction] = sortByRow.split('-')
  const sortBy = {
    field,
    direction
  }
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))
  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page })
  })
  return { bookings, isLoading, count }
}
