const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5777739',
  password: 'm2KnwCqJ6l',
  database: 'sql5777739'
})

module.exports = db.promise();