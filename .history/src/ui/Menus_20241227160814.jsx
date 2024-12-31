import { createContext, useContext, useState } from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
`

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`

const MenuContext = createContext()
function Menus({ children }) {
  const [openId, setOpenId] = useState('')
  const [position, setPosition] = useState({ x: 40, y: 20 })

  function open(openId) {
    setOpenId(openId)
  }
  function close() {
    setOpenId('')
  }
  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  )
}

function Toggle({ children }) {
  return <StyledToggle onClick={haandleClick}>{children}</StyledToggle>
}
function List({ children }) {
  const { position } = useContext(MenuContext)
  return <StyledList position={position}>{children}</StyledList>
}

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button
export default Menus