"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function RegisterPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {

    setLoading(true)
    setError("")

    try {

      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      })

      alert("Account created successfully ✅")

      router.push("/login")

    } catch (err: any) {
      setError("User already exists or error occurred")
    } finally {
      setLoading(false)
    }

  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account 🚀
        </h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-indigo-600 text-white w-full py-2 rounded-lg"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-indigo-600 cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>

    </div>

  )
}