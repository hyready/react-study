/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'
import useDeleteCabin from './useDeleteCabin'
import CreateCabinForm from './CreateCabinForm'
import { useCreateCabin } from './useCreateCabin'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Menus from '../../ui/Menus'
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
          <Modal>
            <Menus>
              <Menus.Menu>
                <Menus.Toggle id={cabinId}></Menus.Toggle>
                <Menus.List id={cabinId}>
                  <Modal.Open opens='confirm-delete'>
                    <Menus.Button icon={<HiTrash />}>delete</Menus.Button>
                  </Modal.Open>

                  <Modal.Open opens='edit'>
                    <Menus.Button icon={<HiPencil />}>edit</Menus.Button>
                  </Modal.Open>

                  <Modal.Open opens='copy'>
                    <Menus.Button icon={<HiSquare2Stack />}>copy</Menus.Button>
                  </Modal.Open>
                </Menus.List>
              </Menus.Menu>
            </Menus>

            <Modal.Window name='confirm-delete'>
              <ConfirmDelete
                resourceName='确定要删除此条数据吗'
                disabled={deleteLoading}
                onConfirm={() => deleteCabin(cabinId)}
              ></ConfirmDelete>
            </Modal.Window>

            <Modal.Window name=''>
              <CreateCabinForm editCabin={cabin} />
            </Modal.Window>
            <Modal.Window name='copy'>
              <ConfirmDelete
                resourceName='确定要复制此条数据吗'
                disabled={isCreating}
                handleName='Copy'
                onConfirm={() => handleCreateCabin()}
              ></ConfirmDelete>
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
    </>
  )
}

export default CabinRow
