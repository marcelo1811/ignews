import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Marcelo' },
    { id: 2, name: 'Marcelo' },
    { id: 3, name: 'Marcelo' },
  ]

  return res.json(users)
}