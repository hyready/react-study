import { useState } from 'react'
import Modal from '../../ui/Modal'
import Button from '../../ui/Button'
import CreateCabinForm from '../features/cabins/CreateCabinForm'

function AddCabin() {
  const [showModal, setshowModal] = useState()
  return (
    <div>
      <Button onClick={() => setshowModal(show => !show)}>Add new cabin</Button>
      {showModal && <CreateCabinForm />}
    </div>
  )
}

export default AddCabin
