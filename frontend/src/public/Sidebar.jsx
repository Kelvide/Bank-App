import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
    const pathname = useLocation().pathname;
    return (
        <div>
            <aside
                class="z-20 hidden w-64 overflow-y-auto h-full bg-white dark:bg-gray-800 md:block flex-shrink-0"
            >
                <div class="py-4 text-gray-500 dark:text-gray-400">
                    <a
                        class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                        href="#"
                    >
                        Banka Bank
                    </a>
                    <ul class="mt-6">
                        <li class="relative px-6 py-3">
                        <span
                                aria-hidden="true" className={`${pathname === '/dashboard' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                            <a
                                className={`${pathname === '/dashboard' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                            >
                                <svg
                                    className='w-5 h-5'
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <Link to="/dashboard">Dashboard</Link>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li class="relative px-6 py-3">
                            <a
                                className={`${pathname === '/my-account' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/my-account' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    className='w-5 h-5'
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    ></path>
                                </svg>
                                <Link to="/my-account">Account</Link>
                            </a>
                        </li>
                        <li class="relative px-6 py-3">
                            <a
                                className={`${pathname === '/my-transactions' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/my-transactions' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    className='w-5 h-5'
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    ></path>
                                </svg>
                                <Link to="/my-transactions">My Transaction</Link>
                            </a>
                        </li>
                        <li class="relative px-6 py-3">
                            <a
                                className={`${pathname === '/my-profile' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                            >
                                  <span
                                aria-hidden="true" 
                                className={`${pathname === '/my-profile' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    className='w-5 h-5'
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    ></path>
                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <Link to="/my-profile">Profile</Link>
                            </a>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                 className={`${pathname === '/notifications' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/notifications"
                            >
                                   <span
                                aria-hidden="true" 
                                className={`${pathname === '/notifications' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                    ></path>
                                </svg>
                                <span>Notification</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                 className={`${pathname === '/insights' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                 to="/insights"
                            >
                                   <span
                                aria-hidden="true" className={`${pathname === '/insights' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span>Insights</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                className={`${pathname === '/settings' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/settings"
                            >
                                <span
                                aria-hidden="true" className={`${pathname === '/settings' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg>
                                <span>Setting</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                className={`${pathname === '/help' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/help"
                            >
                                <span
                                aria-hidden="true" className={`${pathname === '/help' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg>
                                <span>Help</span>
                            </Link>
                        </li>
                    </ul>
                    <div class="px-6 my-6">
                        <button
                            class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        >
                            <Link to='/login'>Logout</Link>
                            <span class="ml-2" aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export const MobileSidebar = (props) => {
    const pathname = useLocation().pathname;
    return (
        <div>
             {props.status && <aside
                class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
            >
                <div class="py-4 text-gray-500 dark:text-gray-400">
                    <a
                        class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                        href="#"
                    >
                        Banka Bank
                    </a>
                    <ul class="mt-6">
                        <li class="relative px-6 py-3">
                            {/* className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" */}
                            <Link
                                  className={`${pathname === '/dashboard' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/dashboard"
                            >
                            <span
                                aria-hidden="true" className={`${pathname === '/dashboard' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li class="relative px-6 py-3">
                            <Link
                                 className={`${pathname === '/my-account' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/my-account"
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/my-account' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    ></path>
                                </svg>
                                <span>Account</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link to="/my-transactions"
                                 className={`${pathname === '/my-transactions' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/my-transactions' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    ></path>
                                </svg>
                                <span>My Transactions</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" className={`${pathname === '/my-profile' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/my-profile"
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/my-profile' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    ></path>
                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                 className={`${pathname === '/notifications' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/notifications"
                            >
                                    <span
                                aria-hidden="true" className={`${pathname === '/notifications' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                    ></path>
                                </svg>
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                className={`${pathname === '/insights' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/insights"
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/insights' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span>Insights</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                className={`${pathname === '/settings' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/settings"
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/settings' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li class="relative px-6 py-3">
                            <Link
                                className={`${pathname === '/help' ? 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' : 'inline-flex gap-4 items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-400' }`}
                                to="/help"
                            >
                                  <span
                                aria-hidden="true" className={`${pathname === '/help' ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg' : 'hidden'}`}
                            ></span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg>
                                <span>Help</span>
                            </Link>
                        </li>
                    </ul>
                    <div class="px-6 my-6">
                        <button
                            class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        >
                            <Link to='/login'>Logout</Link>
                            <span class="ml-2" aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>
            </aside>}
        </div>
    )
}
