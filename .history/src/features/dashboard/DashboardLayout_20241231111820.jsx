import styled from 'styled-components'
import Stats from './Stats'
import { useRecentStays } from './useRecentStays'
import { useRecentBookings } from './useRecentBookings'
import useCabins from '../cabins/useCabins'
import Spinner from '../../ui/Spinner'
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings()
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays()
  const { cabins, isLoading: isLoading3 } = useCabins()
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      ></Stats>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
