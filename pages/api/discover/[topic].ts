import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';
import { topicPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        const { topic }:any = req.query;
        const videosQuery = topicPostsQuery(topic);
        const videos = await client.fetch(videosQuery);
        res.status(200).json(videos);
    }
}