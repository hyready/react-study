import styled from 'styled-components'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'
import Button from '../../ui/Button'
import { useMutation } from '@tanstack/react-query'
import { deleteCabin } from '../../services/apiCabins'
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

  const { isLoading: deleteLoading, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {}
  })
  return (
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
        <button onClick={() => mutate()}>
          <HiTrash />
        </button>
      </div>
    </TableRow>
  )
}

export default CabinRow