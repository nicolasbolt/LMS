import AuthContext from '@/context/AuthenticationContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext)

  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-slate-100 p-6">
            <div className="flex items-center flex-shrink-0 text-slate-900 mr-6">
                <Link href="/">
                    <a className="font-semibold text-xl tracking-tight">
                        LMS
                    </a>
                </Link>
            </div>
            <div className="w-full block flex-grow flex items-center w-auto">
                <div className="text-sm flex-grow">
                    <Link href="/about">
                        <a className="block mt-4 inline-block mt-0 text-slate-900 text-lg hover:text-slate-500 mr-4 transition">
                            About
                        </a>
                        
                    </Link>
                    <Link href="/courses">
                        <a className="block mt-4 inline-block mt-0 text-slate-900 text-lg hover:text-slate-500 mr-4 transition">
                            Courses
                        </a>
                        
                    </Link>
                </div>
                <div>
                    {!user ? (
                        <>
                            <Link href="/account/login">
                                <a className="block mt-4 inline-block mt-0 text-slate-900 text-lg hover:text-slate-500 mr-4 transition">
                                    Log In
                                </a>
                            </Link>
                            <Link href="/account/register">
                                <a className="block mt-4 inline-block mt-0 text-slate-900 text-lg hover:text-slate-500 mr-4 transition">
                                    Register
                                </a>
                            </Link>
                        </>
                    ) :  (
                        <>
                            <div onClick={() => logout()}>
                                <a className="block mt-4 inline-block mt-0 text-slate-900 text-lg hover:text-slate-500 mr-4 transition cursor-pointer">
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
