import { Outlet } from 'react-router'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`
function AppLayout() {
  return (
    <StyledAppLayout>
      <Outlet></Outlet>
    </StyledAppLayout>
  )
}

export default AppLayout
