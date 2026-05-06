"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

interface Props {
  data: {
    month: string
    value: number
  }[]
}

export default function RevenueChart({ data }: Props) {

  return (

    <div className="bg-white p-6 rounded-xl shadow-md w-full">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-lg font-semibold dark:text-white">
Revenue Trends
</h2>

        <span className="text-sm text-gray-500">
          Last 4 Months
        </span>

      </div>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb"
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )
}