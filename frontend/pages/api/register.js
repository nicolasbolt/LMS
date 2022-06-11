import cookie from 'cookie'
import { NEXT_PUBLIC_API_URL } from '@/utils/constants'

const register = async (req, res) => {
    if (req.method === 'POST') {
      const { firstName, lastName, username, email, password } = req.body

      console.log(username, email, password)
  
      const strapiRes = await fetch(`${NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          // first_name: firstName,
          // last_name: lastName
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
        if (
          data &&
          data.message &&
          data.message[0] &&
          data.message[0].messages &&
          data.message[0].messages[0] &&
          data.message[0].messages[0].message
          ) {
            res
              .status(data.statusCode)
              .json({ message: data.message[0].messages[0].message })
        } else {
          res
            .status(data.statusCode)
            .json({ message: 'Something went wrong'})
        }
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
  }

export default register