import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../public/Header';
import { Sidebar } from '../public/Sidebar';

export const Transaction = () => {
    const [menu, setMenu] = useState(false);
    const [drawal, setDrawal] = useState(false);
    const [title, setTitle] = useState(false);

    const transfer = () => {
        setDrawal(true);
        setMenu(false);
        setTitle('Transfer');
    }
    const withdraw = () => {
        setDrawal(true);
        setMenu(false);
        setTitle('Withdraw');
    }
    const deposit = () => {
        setDrawal(true);
        setMenu(false);
        setTitle('Deposit');
    }
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Header />
                <main className="h-full overflow-y-auto dark:bg-black">
                    <div className="container px-6 py-3 mx-auto grid">
                        <div className='lg:flex gap-2 items-center my-6'>
                            <h2
                                className="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                            >
                                Transaction
                            </h2>
                            <span className='w-1 rounded h-7 mt-2 bg-purple-600'></span>
                            <div className='mt-2 flex gap-3'>
                                <Link to="/dashboard"><span className='text-sm tcext-purple-600'> Dashboard</span></Link>
                                {/* <Link><span className='text-sm text-purple-600'> New Transaction</span></Link> */}
                                <Link to="/my-transactions"><span className='hidden md:flex text-sm mt-1'> Transaction</span></Link>
                            </div>
                        </div>
                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        All Transactions
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        24
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Transferred
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        $ 46,760.89
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Received
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        $ 30,000.00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Cancelled
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        376
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='block lg:flex gap-3'>
                            <div className='grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-5'>
                                <div className='bg-purple-600 px-2 text-white py-3 rounded-md text-center flex gap-1'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                        ></path>
                                    </svg>
                                    <Link>All Transactions</Link>
                                </div>
                                <div className='bg-purple-600 px-2 text-white py-3 rounded-md text-center flex gap-1'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <Link>Transferred</Link>
                                </div>
                                <div className='bg-purple-600 px-2 text-white py-3 rounded-md text-center flex gap-1'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <Link>Received</Link>
                                </div>
                                <div className='bg-purple-600 px-2 text-white py-3 rounded-md text-center flex gap-1'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                        ></path>
                                    </svg>
                                    <Link>Cancelled</Link>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-2 mb-3'>
                                <div className='bg-purple-600 w-20 h-10 py-2 flex items-center justify-center text-white rounded-md text-center gap-1'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <Link>Print</Link>
                                </div>
                                {/* <div className='dark:text-gray-200 mt-2'><Link>New Transaction</Link></div> */}
                                <div className='relative inline-block'>
                                    <button onClick={() => setMenu(!menu)} className='dark:text-gray-200 mt-2'><span> New Transaction</span></button>
                                    {menu && <div className="absolute right-0 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-2 px-5" role="none">
                                            <Link onClick={withdraw}><p className='text-gray-600 py-2 hover:text-purple-600 transition-all duration-500 ease'>Withdraw</p></Link>

                                            <Link onClick={transfer}><p className='text-gray-600 py-2 hover:text-purple-600 transition-all duration-500 ease'>Transfer</p></Link>

                                            <Link onClick={deposit}><p className='text-gray-600 py-2 hover:text-purple-600 transition-all duration-500 ease'>Deposit</p></Link>

                                        </div>
                                    </div>}

                                </div>
                                {drawal && <div className="absolute top-0 right-0 bg-black/60 dark:bg-black/50 w-full h-screen flex z-40 overflow-hidden">
                                    {title === 'Withdraw' && <div className='w-3/12 transition-all ease-out duration-700 dark:bg-gray-100 bg-gray-50 h-full p-6 ml-auto z-40 flex flex-col gap-4'>
                                        <div className='flex justify-between items-center mb-6'>
                                            <h2 className='text-xl font-semibold'>{title} Money</h2>
                                            <img onClick={() => setDrawal(false)} src="../assets/images/close.png" alt="" className="w-4 h-4 cursor-pointer" />
                                        </div>
                                        <div className='flex justify-between text-sm border-b border-gray-300 '>
                                            <p className="text-gray-700 text-sm font-semibold dark:text-gray-700"> Witdraw From: </p>
                                            <div className='flex flex-col gap-2 mb-3 text-right'>
                                                <span>Fola</span>
                                                <span>6262629087</span>
                                            </div>
                                        </div>
                                        <form action="" className='flex flex-col gap-5 w-full px-5 py-6'>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Amount</label>
                                                <input type="number" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='2000000' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Reason For Withdraw</label>
                                                <input type="text" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='Reasons for withdraw' />
                                            </div>
                                            <button type='submit'
                                                className="block w-full px-4 py-3 mt-4 text-base font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                            >
                                                Withdraw
                                            </button>
                                        </form>
                                    </div>}
                                    {title === 'Transfer' && <div className='w-3/12 transition-all ease-out duration-700 dark:bg-gray-100 bg-gray-50 h-full p-6 ml-auto z-40 flex flex-col gap-4'>
                                        <div className='flex justify-between items-center mb-6'>
                                            <h2 className='text-xl font-semibold'>{title} Money</h2>
                                            <img onClick={() => setDrawal(false)} src="../assets/images/close.png" alt="" className="w-4 h-4 cursor-pointer" />
                                        </div>
                                        <div className='flex justify-between text-sm border-b border-gray-300 '>
                                            <p className="text-gray-700 text-sm font-semibold dark:text-gray-700"> Transfer From: </p>
                                            <div className='flex flex-col gap-2 mb-3 text-right'>
                                                <span>Fola</span>
                                                <span>6262629087</span>
                                            </div>
                                        </div>
                                        <form action="" className='flex flex-col gap-5 w-full px-5 py-6'>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Beneficiary Account No</label>
                                                <input type="number" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='34577899999' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Beneficiary Account Name</label>
                                                <input type="text" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='John Doe' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Amount</label>
                                                <input type="number" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='2000000' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Reason For transfer</label>
                                                <input type="text" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='Reasons for transfer' />
                                            </div>
                                            <button type='submit'
                                                className="block w-full px-4 py-3 mt-4 text-base font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                            >
                                                Transfer
                                            </button>
                                        </form>
                                    </div>}
                                    {title === 'Deposit' && <div className='w-3/12 transition-all ease-out duration-700 dark:bg-gray-100 bg-gray-50 h-full p-6 ml-auto z-40 flex flex-col gap-4'>
                                        <div className='flex justify-between items-center mb-6'>
                                            <h2 className='text-xl font-semibold'>{title} Money</h2>
                                            <img onClick={() => setDrawal(false)} src="../assets/images/close.png" alt="" className="w-4 h-4 cursor-pointer" />
                                        </div>
                                        <div className='flex justify-between text-sm border-b border-gray-300 '>
                                            <p className="text-gray-700 text-sm font-semibold dark:text-gray-700"> Deposit to: </p>
                                            <div className='flex flex-col gap-2 mb-3 text-right'>
                                                <span>Fola</span>
                                                <span>6262629087</span>
                                            </div>
                                        </div>
                                        <form action="" className='flex flex-col gap-5 w-full px-5 py-6'>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Amount</label>
                                                <input type="number" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='2000000' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label className="text-gray-700 text-sm font-semibold dark:text-gray-600"> Reason For Deposit</label>
                                                <input type="text" className='block w-full mt-1 text-sm border px-3 py-3 rounded-lg border-purple-200 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-500' placeholder='Reasons for deposit' />
                                            </div>
                                            <button type='submit'
                                                className="block w-full px-4 py-3 mt-4 text-base font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                            >
                                                Deposit
                                            </button>
                                        </form>
                                    </div>}
                                </div>}
                            </div>
                        </div>
                        <div className="w-full overflow-hidden rounded-lg shadow-xs">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                        >
                                            <th className="px-4 py-3">Account Name</th>
                                            <th className="px-4 py-3">Description</th>
                                            <th className="px-4 py-3">Account No</th>
                                            <th className="px-4 py-3">Amount</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                    >
                                        <tr className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div
                                                        className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                    >
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Hans Burger</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                Paid for a service
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6262634209
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                $ 863.45
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <span
                                                    className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                                                >
                                                    Received
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6/10/2020
                                            </td>
                                        </tr>

                                        <tr className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div
                                                        className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                    >
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Jolina Angelie</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                Transfer to a friend
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6262632976
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                $ 369.95
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <span
                                                    className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                                                >
                                                    Transferred
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6/10/2020
                                            </td>
                                        </tr>

                                        <tr className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div
                                                        className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                    >
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Sarah Curry</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                Pay a bill
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6262617897
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                $ 86.00
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <span
                                                    className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                                >
                                                    Cancelled
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6/10/2020
                                            </td>
                                        </tr>

                                        <tr className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div
                                                        className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                    >
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Rulia Joberts</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                Transfer to a friend
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6262687098
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                $ 1276.45
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <span
                                                    className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                                                >
                                                    Received
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6/10/2020
                                            </td>
                                        </tr>

                                        <tr className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div
                                                        className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                    >
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">Wenzel Dashington</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                For fun
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6262628975
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                $ 863.45
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                <span
                                                    className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                                                >
                                                    Received
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                6/10/2020
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <span className="flex items-center col-span-3">
                                    Showing 21-30 of 100
                                </span>
                                <span className="col-span-2"></span>
                                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                    <nav aria-label="Table navigation">
                                        <ul className="inline-flex items-center">
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                                    aria-label="Previous"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-4 h-4 fill-current"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"
                                                            fill-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                                >
                                                    1
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                                >
                                                    2
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                                                >
                                                    3
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                                >
                                                    4
                                                </button>
                                            </li>
                                            <li>
                                                <span className="px-3 py-1">...</span>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                                >
                                                    8
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                                >
                                                    9
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                                    aria-label="Next"
                                                >
                                                    <svg
                                                        className="w-4 h-4 fill-current"
                                                        aria-hidden="true"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                            clip-rule="evenodd"
                                                            fill-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
