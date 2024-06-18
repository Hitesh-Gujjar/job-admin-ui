import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/sign-in');
        localStorage.clear();
    }
    return (
        <div className="md:flex md:items-center md:justify-between bg-grayJob-400 py-5 shadow-md px-6">
            <div className="min-w-0 flex-1">
                <h2 className="text-sm  font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    
                </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
         
                <button
                    type="button"
                    onClick={() => { handleLogOut() }}
                    className="ml-3 inline-flex items-center  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Log-out
                </button>
            </div>
        </div>
    )
}

export default Header