import mysql from "mysql2";
import fs from 'fs';
import path from 'path';


// create the connection to database

const db = mysql.createConnection({
    host: "localhost/8081",
    user: "root",
    password: "",
    database: "db_restaurant"
});


db.connect(error => {
  if (error) {
    console.error(error);
  } else {
    console.log("Successfully connected to the database.");
  }
});

export default db;
