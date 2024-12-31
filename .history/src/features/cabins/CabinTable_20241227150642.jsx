import CabinRow from './CabinRow'
import Spinner from '../../ui/Spinner'
import useCabins from './useCabins'
import Table from '../../ui/Table'

function CabinTable() {
  const { cabins, isLoading } = useCabins()
  if (isLoading) return <Spinner />

  return (
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <Table.Header>
        <div>imgage</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div>handle</div>
      </Table.Header>
      <Table.Body
        data={cabins}
        render={
          <CabinRow
            cabin={cabin}
            key={cabin.id}
          />
        }
      >
        {cabins.map(cabin => (
          <CabinRow
            cabin={cabin}
            key={cabin.id}
          />
        ))}
      </Table.Body>
    </Table>
  )
}

export default CabinTable
