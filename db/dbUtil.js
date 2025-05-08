const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pedrodog731**',
  database: 'login_app'
})

module.exports = db.promise();