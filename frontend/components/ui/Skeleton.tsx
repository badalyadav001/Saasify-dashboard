"use client"

export default function Skeleton() {

  return (

    <div className="animate-pulse space-y-3">

      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>

      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>

      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>

      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>

    </div>

  )
}