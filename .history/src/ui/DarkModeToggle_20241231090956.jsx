import ButtonIcon from './ButtonIcon'

function DarkModeToggle() {
  return (
    <ButtonIcon
      disabled={isLoading}
      onClick={logout}
    >
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}

export default DarkModeToggle
