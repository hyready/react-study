import { useState } from 'react'
import Modal from '../../ui/Modal'
import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'

function AddCabin() {
  const [showModal, setshowModal] = useState()
  return (
    <div>
      <Modal>
        <Modal.Open>
          {' '}
          <Button>Add new cabin</Button>(
        </Modal.Open>
        <CreateCabinForm />
      </Modal>
      )}
    </div>
  )
}

export default AddCabin
