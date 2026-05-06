// "use client"

// import { useEffect, useState } from "react"
// import axios from "axios"
// import Skeleton from "@/components/ui/Skeleton"

// export default function UsersTable() {

//   const [users, setUsers] = useState<any[]>([])
//   const [search, setSearch] = useState("")
//   const [loading, setLoading] = useState(true)
//   const [currentPage, setCurrentPage] = useState(1)

//   const usersPerPage = 5

//   useEffect(() => {

//     async function fetchUsers() {

//       try {

//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         )

//         const usersWithStatus = res.data.map((u: any) => ({
//           ...u,
//           status: Math.random() > 0.5 ? "Active" : "Inactive"
//         }))

//         setUsers(usersWithStatus)

//       } catch (error) {

//         console.log("Error fetching users")

//       } finally {

//         setLoading(false)

//       }

//     }

//     fetchUsers()

//   }, [])

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   )

//   const indexOfLast = currentPage * usersPerPage
//   const indexOfFirst = indexOfLast - usersPerPage
//   const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast)

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

//   const deleteUser = (id: number) => {
//     setUsers(users.filter((user) => user.id !== id))
//   }

//   if (loading) {

//     return (

//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
//         <Skeleton />
//         <Skeleton />
//         <Skeleton />
//       </div>

//     )

//   }

//   return (

//     <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

//       <div className="flex items-center justify-between mb-4">

//         <h2 className="text-lg font-semibold dark:text-white">
//           Users
//         </h2>

//         <input
//           type="text"
//           placeholder="Search users..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white w-60"
//         />

//       </div>

//       <div className="overflow-x-auto">

//         <table className="w-full text-left">

//           <thead className="bg-gray-50 dark:bg-gray-700">

//             <tr>

//               <th className="py-3 px-4">User</th>
//               <th className="py-3 px-4">Email</th>
//               <th className="py-3 px-4">Company</th>
//               <th className="py-3 px-4">Status</th>
//               <th className="py-3 px-4">Actions</th>

//             </tr>

//           </thead>

//           <tbody>

//             {currentUsers.map((user) => (

//               <tr
//                 key={user.id}
//                 className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
//               >

//                 {/* User */}

//                 <td className="py-3 px-4 flex items-center gap-3">

//                   <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-semibold">

//                     {user.name.charAt(0)}

//                   </div>

//                   <span className="dark:text-white">
//                     {user.name}
//                   </span>

//                 </td>

//                 {/* Email */}

//                 <td className="py-3 px-4 dark:text-white">
//                   {user.email}
//                 </td>

//                 {/* Company */}

//                 <td className="py-3 px-4 dark:text-white">
//                   {user.company?.name}
//                 </td>

//                 {/* Status */}

//                 <td className="py-3 px-4">

//                   <span
//                     className={`px-3 py-1 text-xs rounded-full font-medium ${
//                       user.status === "Active"
//                         ? "bg-green-100 text-green-600"
//                         : "bg-red-100 text-red-600"
//                     }`}
//                   >

//                     {user.status}

//                   </span>

//                 </td>

//                 {/* Actions */}

//                 <td className="py-3 px-4 flex gap-4">

//                   <button className="text-blue-500 hover:underline text-sm">
//                     View
//                   </button>

//                   <button
//                     onClick={() => deleteUser(user.id)}
//                     className="text-red-500 hover:underline text-sm"
//                   >
//                     Delete
//                   </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//       {/* Pagination */}

//       <div className="flex justify-end gap-2 mt-6">

//         {Array.from({ length: totalPages }, (_, i) => (

//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 rounded-lg text-sm ${
//               currentPage === i + 1
//                 ? "bg-indigo-600 text-white"
//                 : "bg-gray-200 dark:bg-gray-700 dark:text-white"
//             }`}
//           >

//             {i + 1}

//           </button>

//         ))}

//       </div>

//     </div>

//   )
// }
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Skeleton from "@/components/ui/Skeleton"

export default function UsersTable() {

  const [users, setUsers] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const usersPerPage = 5

  useEffect(() => {

    async function fetchUsers() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")

        const usersWithStatus = res.data.map((u: any) => ({
          ...u,
          status: Math.random() > 0.5 ? "Active" : "Inactive"
        }))

        setUsers(usersWithStatus)
      } catch {
        console.log("Error fetching users")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()

  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  const indexOfLast = currentPage * usersPerPage
  const currentUsers = filteredUsers.slice(indexOfLast - usersPerPage, indexOfLast)

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    )
  }

  return (

    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">

      <div className="flex justify-between mb-4">

        <h2 className="text-lg font-semibold dark:text-white">
          Users
        </h2>

        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="sticky top-0 bg-gray-50 dark:bg-gray-700">

            <tr>
              <th className="p-3">User</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {currentUsers.map((user) => (

              <tr key={user.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition">

                <td className="p-3 flex gap-3 items-center">

                  <div className="w-9 h-9 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                    {user.name[0]}
                  </div>

                  {user.name}

                </td>

                <td>{user.email}</td>
                <td>{user.company?.name}</td>

                <td>
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}>
                    {user.status}
                  </span>
                </td>

                <td className="flex gap-2">

                  <button className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                    View
                  </button>

                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="flex justify-end gap-2 mt-4">

        {Array.from({ length: totalPages }, (_, i) => (

          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {i + 1}
          </button>

        ))}

      </div>

    </div>

  )
}