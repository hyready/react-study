function SortBy({ options }) {
  return (
    <select>
      {options.map(option => (
        <option value={option}></option>
      ))}
    </select>
  )
}

export default SortBy
