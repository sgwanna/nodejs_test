var express = require('./node_modules/express');
var app = express();
var mysql = require('./node_modules/mysql');
var config = {
  host            : '172.16.25.102',
  user            : 'root',
  password        : 'castis',
  port            : 3306,
  database        : 'ADCAST_test',
  connectionLimit : 50
};
var pool = mysql.createPool(config);

pool.getConnection(function(err, connection) {
  if(!err) {
    // 전체 청약 조회
    app.get('/getADContractList', function(req, res) {
      var queryStr = 'SELECT ID, TITLE, EXECUTION_START_DATE, EXECUTION_END_DATE FROM TBL_AD_CONTRACT';

      connection.query(queryStr, function(err, rows, fields) {
        if(!err) {
          var result = {
            size: rows.length,
            result: rows
          };
          res.json(result);
          console.log(result);
        } else {
          console.log('Error[%s]', err);
        }
      });
    });

    // title로 청약 조회
    app.get('/getADContract', function(req, res) {
      var queryStr = 'SELECT ID, TITLE, EXECUTION_START_DATE, EXECUTION_END_DATE FROM TBL_AD_CONTRACT ';
      queryStr += 'WHERE TITLE LIKE ("%'+req.query.title+'%")';
      for (var key in req.query) {
        console.log(key);
      }
      connection.query(queryStr, function(err, rows, fields) {
        if(!err) {
          var result = {
            size: rows.length,
            result: rows
          };
          res.json(result);
          console.log(result);
        } else {
          console.log('Error[%s]', err);
        }
      });
    });
  }
  connection.release();
});

app.listen(3000);
