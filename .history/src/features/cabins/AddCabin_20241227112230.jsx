function AddCabin() {
  return (
    <>
      <Button onClick={() => setshowModal(show => !show)}>Add new cabin</Button>
      {showModal && <CreateCabinForm />}
    </>
  )
}

export default AddCabin
