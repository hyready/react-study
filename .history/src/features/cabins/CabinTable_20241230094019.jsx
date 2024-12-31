import { useSearchParams } from 'react-router'
import CabinRow from './CabinRow'
import Spinner from '../../ui/Spinner'
import useCabins from './useCabins'
import Table from '../../ui/Table'
import Empty from '../../ui/Empty'

function CabinTable() {
  const { cabins, isLoading } = useCabins()
  const [searchParams] = useSearchParams()

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all'

  let filteredCabins
  if (filterValue === 'all') filteredCabins = cabins
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter(cabin => cabin.discount === 0)
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter(cabin => cabin.discount > 0)

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc'
  const [field, direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  )

  if (isLoading) return <Spinner />
  if (!sortedCabins.length) return <Empty></Empty>

  return (
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <Table.Header>
        <div>imgage</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={sortedCabins}
        render={cabin => (
          <CabinRow
            cabin={cabin}
            key={cabin.id}
          />
        )}
      />
    </Table>
  )
}

export default CabinTable
