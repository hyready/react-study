import { Outlet } from 'react-router'
import styled from 'styled-components'

const StyledAppLayout = styled.div``
function AppLayout() {
  return (
    <StyledAppLayout>
      <Outlet></Outlet>
    </StyledAppLayout>
  )
}

export default AppLayout
