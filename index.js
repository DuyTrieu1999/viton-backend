const express = require('express');
const app = express();
var cors = require('cors');
var https = require('https');

app.use(cors());
const { Pool, Client } = require('pg');

// load from file later
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kendo',
  password: 'Mothaiba2210@',
  port: 5432
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000')
});

// throws an error for any idle client
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});
// print unhandled rejection in the console for any unhandled rejections
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message)
});
