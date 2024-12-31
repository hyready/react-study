import Modal from '../ui/Modal'

function AddCabin() {
  return (
    <div>
      <Button onClick={() => setshowModal(show => !show)}>Add new cabin</Button>
      {showModal && <CreateCabinForm />}
    </div>
  )
}

export default AddCabin
