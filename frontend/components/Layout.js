import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-sky-600 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                    <a className="font-semibold text-xl tracking-tight">
                        LMS
                    </a>
                </Link>
            </div>
            <div className="w-full block flex-grow flex items-center w-auto">
                <div className="text-sm flex-grow">
                    <Link href="/about">
                        <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4">
                            About
                        </a>
                        
                    </Link>
                    <Link href="/courses">
                        <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4">
                            Courses
                        </a>
                        
                    </Link>
                </div>
                <div>
                    <Link href="#">
                        <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4">
                            Sign In
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4">
                            Register
                        </a>
                    </Link>
                </div>
            </div>
        </nav>

        {children}
    </div>
  )
}
