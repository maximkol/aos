const mysql = require('mysql2/promise');
const config = {
    db: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    }
  };

export default async function excuteQuery(sql:string){
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql);

    return results;
}
