import { useEffect } from 'react'

export default function useOutsideClick(handler) {
  useEffect(
    function () {
      function handleClick(e) {
        console.log('shif ')
        if (ref.current && !ref.current.contains(e.target)) {
          handler()
        }
      }
      document.addEventListener('click', handleClick, true)
      return document.removeEventListener('click', handleClick, true)
    },
    [handler]
  )
}
