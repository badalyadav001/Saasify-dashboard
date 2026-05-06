"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from "@/components/navbar/Navbar"

export default function SettingsPage() {

  const [name, setName] = useState("Badal")
  const [email, setEmail] = useState("badal@email.com")
  const [notifications, setNotifications] = useState(true)

  const handleSave = () => {

    alert("Settings saved successfully!")

  }

  return (

    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      <Sidebar />

      <div className="flex-1 p-8 space-y-8">

        <Navbar />

        {/* Page Title */}

        <div>

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Settings
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your account preferences
          </p>

        </div>

        {/* Settings Card */}

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow max-w-xl">

          {/* Name */}

          <div className="mb-4">

            <label className="block text-sm mb-1 dark:text-gray-300">
              Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />

          </div>

          {/* Email */}

          <div className="mb-4">

            <label className="block text-sm mb-1 dark:text-gray-300">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />

          </div>

          {/* Notification Toggle */}

          <div className="flex items-center justify-between mb-6">

            <span className="dark:text-white">
              Email Notifications
            </span>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`px-4 py-1 rounded-lg text-white
                ${notifications ? "bg-green-500" : "bg-gray-400"}`}
            >

              {notifications ? "ON" : "OFF"}

            </button>

          </div>

          {/* Save Button */}

          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >

            Save Changes

          </button>

        </div>

      </div>

    </div>

  )

}