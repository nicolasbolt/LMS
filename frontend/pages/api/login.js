import cookie from 'cookie'
import { NEXT_PUBLIC_API_URL } from '@/utils/constants'

const login = async (req, res) => {
    if (req.method === 'POST') {
      const { identifier, password } = req.body
  
      const strapiRes = await fetch(`${NEXT_PUBLIC_API_URL}/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier,
          password
        }),
      })
  
      const data = await strapiRes.json()
  
      if (strapiRes.ok) {
        // Set Cookie
        res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'strict',
            path: '/'
        }))

        res.status(200).json({ user: data.user })
      } else {
        console.error(data)
        res
          .status(data.statusCode)
          .json({ message: data.message[0].messages[0].message })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
  }

export default login