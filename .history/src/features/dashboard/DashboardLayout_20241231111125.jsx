import styled from 'styled-components'
import Stats from './Stats'
import { useRecentStays } from './useRecentStays'
import { useRecentBookings } from './useRecentBookings'
import useCabins from '../cabins/useCabins'
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings()
  const { confirmedStays, isLoading, numDays } = useRecentStays()
  const { cabins, isLoading: isLoading2 } = useCabins()
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabins={cabins}
      ></Stats>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
