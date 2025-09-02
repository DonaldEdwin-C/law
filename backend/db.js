const mysql = require('mysql2/promise')

let db

async function initDB() {
  if (db) return db 

  db = await mysql.createConnection({
    host: 'localhost',
    port: 3333,
    user: 'root',     
    password: '@Kali0577',     
    database: 'goal_tracker' 
  })


  console.log(" MySQL connected")
  return db
}

module.exports = initDB
