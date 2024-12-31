function SortBy({ options }) {
  return (
    <select>
      {options.map(option => (
        <option value=''></option>
      ))}
    </select>
  )
}

export default SortBy
