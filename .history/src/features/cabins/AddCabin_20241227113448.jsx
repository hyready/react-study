import { useState } from 'react'
import Modal from '../../ui/Modal'
import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'

function AddCabin() {
  const [showModal, setshowModal] = useState()
  return (
    <div>
     
        <Modal>
          <Modal.Open> <Button onClick={() => setshowModal(show => !show)}>Add new cabin</Button>
      {showModal && (</Modal.Open>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  )
}

export default AddCabin
