function Logout() {
  return (
    <ButtonIcon
      disabled={isLoading}
      onClick={logout}
    >
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}

export default Logout
