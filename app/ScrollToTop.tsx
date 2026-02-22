'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Clear hash from URL and scroll to top on page load/refresh
    if (window.location.hash) {
      // Remove the hash from URL without reloading the page
      window.history.replaceState(null, '', window.location.pathname)
      // Scroll to top
      window.scrollTo(0, 0)
    }
  }, [])

  return null // This component doesn't render anything
}