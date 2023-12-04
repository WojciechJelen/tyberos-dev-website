import React, { useState, useEffect } from 'react'

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const handleToggleClick = () => {
    const element = document.documentElement
    element.classList.toggle('dark')

    const isDark = element.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    // setDarkMode(isDark)
  }

  return (
    <button onClick={handleToggleClick}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}

export default ThemeToggle
