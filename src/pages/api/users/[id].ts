import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: 'json' },
    { id: 2, name: 'Marcelo' },
    { id: 3, name: 'Marcelo' },
  ]

  return response.json(users)
}