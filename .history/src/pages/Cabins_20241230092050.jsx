import Row from '../ui/Row'

import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import AddCabin from '../features/cabins/AddCabin'
import CabinTableOperations from '../features/cabins/CabinTableOperations'
function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabinTableOperations></CabinTableOperations>
        <Filter
          options={options}
          filterField='discount'
        />
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
