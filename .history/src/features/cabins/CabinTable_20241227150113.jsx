import CabinRow from './CabinRow'
import Spinner from '../../ui/Spinner'
import useCabins from './useCabins'
import Table from '../../ui/Table'

function CabinTable() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
  const {} = useCabins()
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
