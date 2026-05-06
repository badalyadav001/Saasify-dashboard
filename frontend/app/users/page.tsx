"use client"

import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from "@/components/navbar/Navbar"
import UsersTable from "@/components/table/UsersTable"

export default function UsersPage() {

  return (

    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 p-8 space-y-8">

        <Navbar />

        {/* Page Title */}

        <div>

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            User Management
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your platform users and monitor activity
          </p>

        </div>

        {/* Users Table */}

        <UsersTable />

      </div>

    </div>

  )

}