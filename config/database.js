import mysql from "mysql2";
import fs from 'fs';
import path from 'path';



// const url = import.meta.url;
// const split = url.split('/');
// const directory = split.slice(3, split.length - 1).join('/');
// let newPath = path.join(directory,'ca-certificate.crt').replace('%20', ' ');

// const ca = fs.readFileSync(newPath);

// create the connection to database
// const db = mysql.createConnection({
//     host: '',
//     user: 'doadmin',
//     password: '',
//     database: 'db_restaurant',
//     port: '25060',
//     ssl: {
//       ca: cert,
//     }
// });

// create the connection to database
const db = mysql.createConnection({
    host: process.env.DB_DOMAIN,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DEFAULT_SCHEMA,
    port: process.env.DB_PORT,
});


db.connect(error => {
  if (error) {
    console.error(error);
  } else {
    console.log("Successfully connected to the database.");
  }
});

export default db;
