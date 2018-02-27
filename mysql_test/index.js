var express = require('express');
var app = express();
var mysql = require('mysql');
var conn = mysql.createConnection({
  host      : '172.16.25.102',
  user      : 'root',
  password  : 'castis',
  port      : 3306,
  database  : 'ADCAST_test'
});

conn.connect();

conn.query('SELECT * FROM TBL_AD_CAMPAIGN_LOG ORDER BY ID DESC LIMIT 1', function(err, rows, fields) {
  if(!err)
    console.log('result: ' + rows);
  else
    console.log('Error[%s]', err);
});

conn.end();
