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
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
`
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout
