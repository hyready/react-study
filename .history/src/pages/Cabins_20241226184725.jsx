import Row from '../ui/Row'

import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import CreateCabinForm from '../features/cabins/CreateCabinForm'
function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type='horizontal'>
        <CabinTable />
      </Row>
      <Row>
        <CreateCabinForm></CreateCabinForm>
      </Row>
    </>
  )
}

export default Cabins
