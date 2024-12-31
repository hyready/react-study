import ButtonIcon from './ButtonIcon'

function DarkModeToggle() {
  return (
    <ButtonIcon onClick={onClick}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}

export default DarkModeToggle
