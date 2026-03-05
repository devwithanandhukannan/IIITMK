import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()



  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('authToken', data.token)
        navigate('/')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="w-full flex justify-center items-center h-[90vh]">
        <div className="w-[400px] bg-white h-[500px] rounded-3xl shadow-lg">
          <h1 className="text-3xl font-bold pt-10 pb-5 text-center text-purple-600">
            Login
          </h1>

          {error && (
            <div className="mx-5 p-3 bg-red-100 text-red-600 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="flex flex-col p-5 space-y-4">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 rounded-md border border-gray-300 px-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <label htmlFor="passwd" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                id="passwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 rounded-md border border-gray-300 px-2 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-between px-5">
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded-md disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <a href="#" className="text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>

          <p className="text-center mt-6">
            Don't have an account?
            <a href="/signup" className="text-purple-600 hover:underline ml-1">
              Signup
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login