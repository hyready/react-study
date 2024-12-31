import styled from 'styled-components'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'
import useDeleteCabin from './useDeleteCabin'
import CreateCabinForm from './CreateCabinForm'
import { useState } from 'react'
import { useCreateCabin } from './useCreateCabin'
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description
  } = cabin
  const { deleteLoading, deleteCabin } = useDeleteCabin()
  const [showForm, setShowForm] = useState(false)
  const { isCreating, createCabin } = useCreateCabin()

  function handleCreateCabin() {
    const createCopyCabin = { ...cabin, name: `${name} Copy` }
    Reflect.deleteProperty(createCopyCabin, 'id')
    createCabin(createCopyCabin)
  }

  return (
    <>
      <TableRow>
        <Img src={image}></Img>
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button
            disabled={deleteLoading}
            onClick={() => deleteCabin(cabinId)}
          >
            <HiTrash />
          </button>
          <button
            disabled={deleteLoading}
            onClick={() => setShowForm(show => !show)}
          >
            <HiPencil />
          </button>
          <button onClick={handleCreateCabin}>
            <HiSquare2Stack />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm editCabin={cabin} />}
    </>
  )
}

export default CabinRow
