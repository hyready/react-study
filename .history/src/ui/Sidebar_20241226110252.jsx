import styled from 'styled-components'

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1/-1;
`

function Sidebar() {
  return <StyledSidebar>sidebar</StyledSidebar>
}

export default Sidebar
