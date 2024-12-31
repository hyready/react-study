import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import GlobalStyles from './styles/GlobalStyled'
import AppLayout from './ui/AppLayout'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Account from './pages/Account'
import Login from './pages/Login'
import Fhzj from './pages/Fhzj'
import PageNotFound from './pages/PageNotFound'
import Booking from './pages/Booking'
import Checkin from './pages/Checkin'
import protectAuth from './pages/protectAuth'
const queryClient = new QueryClient({
  defaultOptions: { staleTime: 60 * 1000 }
})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
              path='bookings/:bookingId'
              element={<Booking />}
            />
            <Route
              path='checkin/:bookingId'
              element={<Checkin />}
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
              path='fhzj'
              element={<Fhzj />}
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
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)'
          }
        }}
      />
    </QueryClientProvider>
  )
}

export default App