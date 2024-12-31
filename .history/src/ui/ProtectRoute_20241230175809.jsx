function ProtectRoute() {
  // 1. Load the authenticated user
  // 2. If there is NO authenticated user, redirect to the /login
  // 3. While loading, show a spinner
  return <div></div>
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
