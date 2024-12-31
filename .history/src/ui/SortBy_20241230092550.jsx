import Select from './Select'
function SortBy({ options }) {
  return (
    <Select>
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default SortBy
