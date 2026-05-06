"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function UsersChart({ data }: any) {

  return (

    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Users Growth
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="users"
            fill="#6366f1"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}