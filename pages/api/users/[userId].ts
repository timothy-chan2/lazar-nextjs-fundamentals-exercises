import users from '../../../data/users'

import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { userId } = req.query
  return res.status(200).json( "The user's name is " + users[ Number(userId) - 1 ].name )
}

export default handler