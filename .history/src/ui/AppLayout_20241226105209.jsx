import { Outlet } from 'react-router'
import styled from 'styled-components'
import Header from './Header'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header></Header>
      <div></div>

      {/* <Outlet></Outlet> */}
    </StyledAppLayout>
  )
}

export default AppLayout
