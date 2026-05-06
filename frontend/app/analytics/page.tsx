"use client"

import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from "@/components/navbar/Navbar"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts"

const trafficData = [
  { month: "Jan", visitors: 400 },
  { month: "Feb", visitors: 700 },
  { month: "Mar", visitors: 1200 },
  { month: "Apr", visitors: 1800 },
  { month: "May", visitors: 2400 },
]

const deviceData = [
  { name: "Desktop", value: 60 },
  { name: "Mobile", value: 30 },
  { name: "Tablet", value: 10 },
]

export default function AnalyticsPage() {

  return (

    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      <Sidebar />

      <div className="flex-1 p-8 space-y-8">

        <Navbar />

        {/* Page Title */}

        <div>

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Analytics
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track performance and user engagement
          </p>

        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Daily Visitors
            </p>
            <h2 className="text-2xl font-bold dark:text-white mt-2">
              2,450
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Bounce Rate
            </p>
            <h2 className="text-2xl font-bold dark:text-white mt-2">
              32%
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Avg Session
            </p>
            <h2 className="text-2xl font-bold dark:text-white mt-2">
              4m 21s
            </h2>
          </div>

        </div>

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Traffic Chart */}

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <h2 className="text-lg font-semibold mb-4 dark:text-white">
              Traffic Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={trafficData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#6366f1"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* Device Chart */}

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <h2 className="text-lg font-semibold mb-4 dark:text-white">
              Device Usage
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={deviceData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="value" fill="#22c55e" />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  )

}