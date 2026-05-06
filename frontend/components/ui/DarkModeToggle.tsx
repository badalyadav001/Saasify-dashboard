"use client"

import { useEffect, useState } from "react"

export default function DarkModeToggle() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    const theme = localStorage.getItem("theme")

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }

  }, [])

  const toggleTheme = () => {

    if (darkMode) {

      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDarkMode(false)

    } else {

      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDarkMode(true)

    }

  }

  return (

    <button
      onClick={toggleTheme}
      className="px-3 py-1 text-sm rounded-lg bg-gray-800 text-white dark:bg-white dark:text-black transition"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>

  )

}