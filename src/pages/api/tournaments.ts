import type { NextApiRequest, NextApiResponse } from 'next'
const mysql = require('mysql2/promise');
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "sapfir103.beget.tech",
      user: "sapfir103_aos",
      password: "",
      database: "sapfir103_aos",
    }
  };

async function query(sql:string) {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql);

    return results;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    query(`SELECT * FROM tournaments`)
    .then(data=>{
        res.status(200).json(data)
    });
  }