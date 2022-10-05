// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { fetchAPI } from "../../lib/api"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiRes = await fetchAPI(
    "/nouns-comics",
    {
      populate: {
        Cards: {
          populate: "*"
        }
      }
    },
    { method: "GET" },
    process.env.STRAPI_KEY
  )

  if (apiRes.status == 200) {
    res.status(200).json(apiRes)
  } else {
    res.status(500).json(apiRes)
  }
}
