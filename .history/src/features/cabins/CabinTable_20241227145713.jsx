import styled from 'styled-components'
import CabinRow from './CabinRow'
import Spinner from '../../ui/Spinner'
import { useQuery } from '@tanstack/react-query'
import { getCabins } from '../../services/apiCabins'
import Table from '../../ui/Table'

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`

function CabinTable() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
  if (isLoading) return <Spinner />

  return (
    <Table>
      <TableHeader role='row'>
        <div>imgage</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div>handle</div>
      </TableHeader>
      {cabins.map(cabin => (
        <CabinRow
          cabin={cabin}
          key={cabin.id}
        />
      ))}
    </Table>
  )
}

export default CabinTable
