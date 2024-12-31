import { useEffect } from 'react'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import { getCabins } from '../services/apiCabins'
import CabinTable from '../features/cabins/CabinTable'
function Cabins() {
  useEffect(function () {
    getCabins()
  }, [])
  return (
    <Row type='horizontal'>
      <CabinTable />
    </Row>
  )
}

export default Cabins
