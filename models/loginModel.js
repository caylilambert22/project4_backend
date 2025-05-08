const db = require('../db/dbUtil.js');

exports.getAllInformation = () => {
  return db.query('SELECT * FROM users')
}

exports.createInformation = (username, password, email) => {
  return db.query('INSERT INTO users (username, password, email) VALUES (?, ?)' , [username , password, email])
}

