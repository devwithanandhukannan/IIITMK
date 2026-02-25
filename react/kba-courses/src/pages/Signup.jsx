import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();


    const handleSignup = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        try {
            const response = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    password: password,
                    role: role,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setSuccess('Account created successfully!')
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            } else {
                setError(data.message || 'Signup failed. Please try again.')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
            console.log(err)
        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-purple-200 min-h-screen flex items-center justify-center py-10">
                <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
                        Sign Up
                    </h1>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-3 bg-green-100 text-green-600 rounded-md text-sm">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-1">Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded p-2 focus:border-purple-500 focus:outline-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded p-2 focus:border-purple-500 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border rounded p-2 focus:border-purple-500 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full border rounded p-2 focus:border-purple-500 focus:outline-none"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 disabled:opacity-50"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-gray-700 mt-4">
                        Already have an account?
                        <a
                            className="text-purple-600 hover:underline ml-1 cursor-pointer"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup
