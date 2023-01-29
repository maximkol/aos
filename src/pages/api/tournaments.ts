import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/db/mysql';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    excuteQuery(`SELECT * FROM tournaments`)
    .then(data=>{
        res.status(200).json(data)
    });
  }