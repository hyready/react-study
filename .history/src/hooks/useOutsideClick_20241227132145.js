import { useEffect } from 'react'

export default function useOutsideClick(handler, listenCapturing) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler()
        }
      }
      document.addEventListener('click', handleClick, listenCapturing)
      return document.removeEventListener('click', handleClick, listenCapturing)
    },
    [handler, listenCapturing]
  )
}
