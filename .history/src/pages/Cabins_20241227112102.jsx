import Row from '../ui/Row'

import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import CreateCabinForm from '../features/cabins/CreateCabinForm'
import Button from '../ui/Button'
import { useState } from 'react'
function Cabins() {
  const [showModal, setshowModal] = useState(false)
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setshowModal(show => !show)}>
          Add new cabin
        </Button>
        {showModal && <CreateCabinForm />}
      </Row>
    </>
  )
}

export default Cabins
