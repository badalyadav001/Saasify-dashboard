"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import API from "@/lib/api"

import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from "@/components/navbar/Navbar"
import StatsCard from "@/components/dashboard/StatsCard"
import RevenueChart from "@/components/charts/RevenueChart"
import UsersChart from "@/components/charts/UsersChart"
import UsersTable from "@/components/table/UsersTable"
import ActivityFeed from "@/components/dashboard/ActivityFeed"

export default function Dashboard() {

  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        router.push("/login")
        return
      }

      try {
        // 🔥 Backend verify (BEST WAY)
       API.get("/auth/me")

        setLoading(false)

      } catch (err) {
        localStorage.removeItem("token")
        router.push("/login")
      }
    }

    verifyUser()
  }, [router])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-medium">
        Loading Dashboard...
      </div>
    )
  }

  return (

    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      <Sidebar />

      <div className="flex-1 p-8 space-y-8">

        <Navbar />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome back, Badal 👋
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here's what's happening with your platform today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Total Revenue" value="$54,200" />
          <StatsCard title="Active Users" value="9,840" />
          <StatsCard title="Conversion Rate" value="14.2%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={[
            { month: "Jan", value: 4000 },
            { month: "Feb", value: 3000 },
            { month: "Mar", value: 5000 },
            { month: "Apr", value: 7000 },
            { month: "May", value: 9000 },
            { month: "Jun", value: 11000 },
          ]} />

          <UsersChart data={[
            { month: "Jan", users: 200 },
            { month: "Feb", users: 350 },
            { month: "Mar", users: 500 },
            { month: "Apr", users: 800 },
            { month: "May", users: 1200 },
            { month: "Jun", users: 1600 },
          ]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UsersTable />
          <ActivityFeed />
        </div>

      </div>

    </div>

  )
}