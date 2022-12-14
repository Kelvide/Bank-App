import React from 'react'
import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
  return (
    <div>
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div
        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto bg-purple-600 md:w-6/12 flex justify-center items-center">
            <img
              className="w-5/6 h-full"
              src="../assets/images/forgot-password.svg"
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-3/5">
            <div className="w-full">
              <h1
                className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
              >
                Forgot Password
              </h1>
              <div className='flex flex-col gap-1'>
                <div>
                  <label className="text-gray-700 text-sm font-semibold">Email</label>
                  <input
                    className="block w-full mt-1 text-sm border px-3 py-2 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300"
                    placeholder="Jane Doe" type="email"
                  />
                </div>
              </div>
              <Link to="/login"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Recover Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
