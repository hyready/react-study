import { Outlet } from 'react-router'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <div>
        <Outlet></Outlet>
      </div>
    </StyledAppLayout>
  )
}

export default AppLayout
