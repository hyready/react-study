import { useNavigate } from 'react-router'
import useUser from '../features/authentication/useUser'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectRoute({ children }) {
  const navigate = useNavigate()
  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser()
  // 2. If there is NO authenticated user, redirect to the /login
  if (!isAuthenticated) {
    navigate('/login', { replace: true })
  }
  // 3. While loading, show a spinner
  if (isLoading) return <FullPage></FullPage>

  // 4. If there IS a user, render the app
  return children
}

export default ProtectRoute

const { isLoading, isAuthenticated } = useUser()

// 2. If there is NO authenticated user, redirect to the /login
useEffect(
  function () {
    if (!isAuthenticated && !isLoading) navigate('/login')
  },
  [isAuthenticated, isLoading, navigate]
)

// 3. While loading, show a spinner
if (isLoading)
  return (
    <FullPage>
      <Spinner />
    </FullPage>
  )

// 4. If there IS a user, render the app
