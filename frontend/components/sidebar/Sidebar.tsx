// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export default function Sidebar() {

//   const pathname = usePathname()

//   const menu = [
//     { name: "Dashboard", path: "/dashboard", icon: "📊" },
//     { name: "Users", path: "/users", icon: "👥" },
//     { name: "Analytics", path: "/analytics", icon: "📈" },
//     { name: "Settings", path: "/settings", icon: "⚙" },
//   ]

//   return (

//     <div className="h-screen w-64 bg-gray-900 text-white p-6">

//       <h1 className="text-2xl font-bold mb-10 tracking-wide">
//         SaaSify
//       </h1>

//       <nav className="flex flex-col gap-3">

//         {menu.map((item) => (

//           <Link
//             key={item.path}
//             href={item.path}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
//             ${pathname === item.path
//                 ? "bg-blue-500 shadow-lg"
//                 : "hover:bg-gray-700"
//               }`}
//           >

//             <span>{item.icon}</span>

//             {item.name}

//           </Link>

//         ))}

//       </nav>

//     </div>

//   )
// }
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {

  const pathname = usePathname()

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Users", path: "/users", icon: "👥" },
    { name: "Analytics", path: "/analytics", icon: "📈" },
    { name: "Settings", path: "/settings", icon: "⚙" },
  ]

  return (

    <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">

      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        SaaSify
      </h1>

      <nav className="flex flex-col gap-3">

        {menu.map((item) => (

          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
            ${pathname === item.path
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg scale-[1.03]"
                : "hover:bg-gray-700 hover:scale-[1.01]"
              }`}
          >

            <span>{item.icon}</span>
            {item.name}

          </Link>

        ))}

      </nav>

    </div>

  )
}