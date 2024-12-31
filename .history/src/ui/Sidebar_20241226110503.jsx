import styled from 'styled-components'

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
const List = styled.div`
  height: 100vh;
  background-color: red;
`
function Sidebar() {
  return <StyledSidebar></StyledSidebar>
}

export default Sidebar