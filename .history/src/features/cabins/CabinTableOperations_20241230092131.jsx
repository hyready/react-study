import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import 
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' }
        ]}
        filterField='discount'
      />
      <></>
    </TableOperations>
  )
}

export default CabinTableOperations