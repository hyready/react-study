import styled from 'styled-components'
import Stats from './Stats'
import { useRecentStays } from './useRecentStays'
import { useRecentBookings } from './useRecentBookings'
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings()
  const { confirmedStays, isLoading, numDays } = useRecentStays()
  const {} = useCabins()
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
      ></Stats>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
