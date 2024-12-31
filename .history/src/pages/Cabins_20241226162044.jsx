import { useEffect } from 'react'
import Row from '../ui/Row'
import { getCabins } from '../services/apiCabins'
import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
function Cabins() {
  useEffect(function () {
    getCabins()
  }, [])
  return
  ;<>
    <Row type='horizontal'>
      <Heading as='h1'>All cabins</Heading>
      <p>Filter / Sort</p>
    </Row>
    <Row type='horizontal'>
      <CabinTable />
    </Row>
  </>
}

export default Cabins
