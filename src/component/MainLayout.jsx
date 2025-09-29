import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
      <main className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              🎬 MovieApp
            </h1>
            <ul className="flex space-x-6 text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <div className="wrapper flex-1 max-w-6xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    )
}

export default MainLayout
