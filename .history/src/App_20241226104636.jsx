import styled, { css } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import AppLayout from './pages/AppLayout'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}></Route>
          <Route
            index
            element={
              <Navigate
                to='dashboard'
                replace
              />
            }
          />
          <Route
            path='dashboard'
            element={<Dashboard />}
          />
          <Route
            path='bookings'
            element={<Bookings />}
          />
          <Route
            path='cabins'
            element={<Cabins />}
          />
          <Route
            path='users'
            element={<Users />}
          />
          <Route
            path='settings'
            element={<Settings />}
          />
          <Route
            path='account'
            element={<Account />}
          />
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
