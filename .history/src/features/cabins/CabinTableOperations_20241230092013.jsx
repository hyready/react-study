import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
function CabinTableOperations() {
  return (
    <TableOperations>
      {' '}
      <Filter
        options={options}
        filterField='discount'
      />
    </TableOperations>
  )
}

export default CabinTableOperations
