import { useEffect } from 'react'

export default function useOutsideClick() {
  useEffect(
    function () {
      function handleClick(e) {
        console.log('shif ')
        if (ref.current && !ref.current.contains(e.target)) {
          close()
        }
      }
      document.addEventListener('click', handleClick, true)
      return document.removeEventListener('click', handleClick, true)
    },
    [close]
  )
}
