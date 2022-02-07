// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  name: string
}

/**
 * Sample REST API route.
 *
 * @param {object} req The incoming request object.
 * @param {object} res The outgoing response object.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({name: 'John Doe'})
}
