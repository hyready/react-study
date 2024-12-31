import Row from '../ui/Row'

import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import AddCabin from '../features/cabins/AddCabin'
import Filter from '../ui/Filter'
const options = [
  { value: 'all', label: 'All' },
  { value: 'no-discount', label: 'No discount' },
  { value: 'with-discount', label: 'With discount' }
]

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <Filter
          options={options}
          filterField=''
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
