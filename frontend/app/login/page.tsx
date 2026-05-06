"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import API from "@/lib/api"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // 🔐 Login
  const handleLogin = async () => {
    setLoading(true)
    setError("")

    try {
      const res = await API.post("/auth/login", {
        email,
        password
      })

      localStorage.setItem("token", res.data.token)

      // ✅ Smooth redirect (NO full reload)
      router.push("/dashboard")

    } catch (err: any) {
      setError(err?.response?.data?.message || "Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  // ⚡ Demo Login
  const handleDemoLogin = async () => {

    const demoEmail = "demo@test.com"
    const demoPassword = "123456"

    setEmail(demoEmail)
    setPassword(demoPassword)

    setLoading(true)
    setError("")

    try {
      const res = await API.post("/auth/login", {
        email: demoEmail,
        password: demoPassword
      })

      localStorage.setItem("token", res.data.token)

      router.push("/dashboard")

    } catch (err) {
      setError("Demo account not found")
    } finally {
      setLoading(false)
    }
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-96 relative z-10">

        <h1 className="text-3xl font-bold text-center text-white">
          SaaSify
        </h1>

        <p className="text-center text-gray-300 mt-1 mb-6 text-sm">
          Smart Analytics Dashboard 🚀
        </p>

        {/* Demo Badge */}
        <div className="bg-white/10 border border-white/20 text-gray-200 text-xs p-3 rounded-lg mb-4 text-center">
          Demo: <b>demo@test.com</b> / <b>123456</b>
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-600" />
          <span className="text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-600" />
        </div>

        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-white/10 border border-white/20 text-white"
        >
          🚀 Try Demo
        </button>

        <p className="text-sm text-center mt-6 text-gray-400">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-indigo-400 cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </div>

    </div>
  )
}