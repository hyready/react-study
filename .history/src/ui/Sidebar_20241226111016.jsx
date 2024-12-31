import styled from 'styled-components'

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow: auto;
`
const List = styled.div`
  flex-basis: 1500px;

  background-color: red;
`

const List1 = styled.div`
  flex-basis: 1500px;

  background-color: yellow;
`
function Sidebar() {
  return (
    <StyledSidebar>
      <List />
      <List1 />
    </StyledSidebar>
  )
}

export default Sidebar
