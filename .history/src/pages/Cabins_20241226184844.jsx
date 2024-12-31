import Row from '../ui/Row'

import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import CreateCabinForm from '../features/cabins/CreateCabinForm'
import Button from '../ui/Button'
function Cabins() {
  const [showForm, setShowForm] = useState(false)
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
        <Button onClick={() => setShowForm(show => !show)}>
          Add new cabin
        </Button>
        <CreateCabinForm></CreateCabinForm>
      </Row>
    </>
  )
}

export default Cabins
