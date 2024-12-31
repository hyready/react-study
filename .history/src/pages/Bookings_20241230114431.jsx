import Heading from '../ui/Heading'
import Row from '../ui/Row'
import BookingTable from '../features/bookings/BookingTable'
function Bookings() {
  return
  ;<>
    <Row type='horizontal'>
      <Heading as='h1'>All bookings</Heading>
      <BookingTable></BookingTable>
    </Row>
    <Row></Row>
  </>
}

export default Bookings