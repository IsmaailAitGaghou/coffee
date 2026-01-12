import React from 'react'

const page = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
        <div className='bg-white p-10 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold pb-3'>Login Page</h1>
            <form action="">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <button type="submit" className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md">Login</button>
            </form>
        </div>
    </div>
  )
}

export default page