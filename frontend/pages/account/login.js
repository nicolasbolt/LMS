import Layout from '@/components/Layout'
import H1 from '@/components/utils/H1'
import AuthContext from '@/context/AuthenticationContext'
import { useState, useContext } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)

  const handleSubmit = async e => {
      e.preventDefault()
      await login({email, password})
  }

  return (
    <Layout>
        <div className='lg:w-1/4 mx-auto my-5'>
            <H1>Login</H1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='lg:w-1/4 mx-auto p-5 border shadow'>
                <div className="w-full max-w-lg mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        {/* <p className="text-gray-600 text-xs italic">Minimum of 8 characters</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        {/* <p className="text-gray-600 text-xs italic">Minimum of 8 characters</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 mx-auto mt-5'>
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                    Login
                </button>
            </div>
        </form>
    </Layout>
  )
}
