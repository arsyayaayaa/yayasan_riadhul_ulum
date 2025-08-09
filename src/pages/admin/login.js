import { useState } from 'react'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      const data = await res.json()
      setError(data.message || 'Login gagal')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border border-green-400 p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:border-green-700"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-green-400 p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:border-green-700"
        />
        {error && <div className="text-red-500 mb-2 text-sm">{error}</div>}
        <button className="bg-green-700 hover:bg-green-800 text-white w-full py-2 rounded font-semibold transition">Login</button>
      </form>
    </div>
  )
}