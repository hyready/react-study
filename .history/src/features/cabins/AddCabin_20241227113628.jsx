import Modal from '../../ui/Modal'
import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default AddCabin
