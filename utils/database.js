const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({ 
    host:'localhost', 
    user: 'root', 
    password: '0000',
    database: 'crown_09'
  })

module.exports = pool.promise();