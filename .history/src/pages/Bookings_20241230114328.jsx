import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Bookings() {
  return (
    <Row type='horizontal'>
      <Heading as='h1'>All bookings</Heading>
      <BookingTable></BookingTable>
    </Row>
  )
}

export default Bookings
