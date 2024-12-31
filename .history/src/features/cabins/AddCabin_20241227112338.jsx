import { useState } from 'react'
import Modal from '../ui/Modal'
import CreateCabinForm from '../features/cabins/CreateCabinForm'

function AddCabin() {
  return (
    <div>
      <Button onClick={() => setshowModal(show => !show)}>Add new cabin</Button>
      {showModal && <CreateCabinForm />}
    </div>
  )
}

export default AddCabin
