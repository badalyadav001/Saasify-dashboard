export default function ActivityFeed() {

  const activities = [
    { id: 1, text: "New user registered", time: "2 min ago", icon: "👤" },
    { id: 2, text: "Subscription upgraded", time: "10 min ago", icon: "💳" },
    { id: 3, text: "New payment received", time: "30 min ago", icon: "💰" },
    { id: 4, text: "User cancelled subscription", time: "1 hour ago", icon: "⚠️" },
  ]

  return (

    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5">

      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Recent Activity
      </h2>

      <ul className="space-y-4">

        {activities.map((activity) => (

          <li
            key={activity.id}
            className="flex items-center justify-between border-b pb-2 dark:border-gray-700"
          >

            <div className="flex items-center gap-3">

              <span className="text-xl">
                {activity.icon}
              </span>

              <span className="text-gray-700 dark:text-gray-300">
                {activity.text}
              </span>

            </div>

            <span className="text-sm text-gray-400">
              {activity.time}
            </span>

          </li>

        ))}

      </ul>

    </div>

  )
}