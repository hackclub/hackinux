import { useState, useEffect } from 'react'
import { throttle } from 'lodash'

export default callback => {
  const scrollHandler = () => {
    const currentPosition = window ? window.scrollY : null
    callback(currentPosition)
  }

  const throttledScrollHandler = throttle(scrollHandler, 250)

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [])
}
