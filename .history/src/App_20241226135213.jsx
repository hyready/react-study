import GlobalStyles from './styles/GlobalStyled'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import AppLayout from './ui/AppLayout'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({})
function App() {
  return (
    <QueryClientProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
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
          </Route>

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
    </QueryClientProvider>
  )
}

export default App
