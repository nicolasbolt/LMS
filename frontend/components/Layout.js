import AuthContext from '@/context/AuthenticationContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext)

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
                    {!user ? (
                        <>
                            <Link href="/account/login">
                                <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4">
                                    Log In
                                </a>
                            </Link>
                            <Link href="/account/register">
                                <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4">
                                    Register
                                </a>
                            </Link>
                        </>
                    ) :  (
                        <>
                            <div onClick={() => logout()}>
                                <a className="block mt-4 inline-block mt-0 text-sky-200 text-lg hover:text-white mr-4 cursor-pointer">
                                    Log Out
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>

        {children}
    </div>
  )
}
