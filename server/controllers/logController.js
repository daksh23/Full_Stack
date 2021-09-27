const e = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Logs"
});

exports.getList = async (req, res) => {
   
        con.query("SELECT * FROM records ORDER BY startDate DESC", function (err, result, fields) {
          if (err) throw err;
        
          return res.json({
            status: true,
            result
        });
        });
 
}

exports.addLog = async (req, res) => {
    const sDate = req.body.sdate.slice(0, 19).replace(':', ' ');

    const eDate = req.body.edate.slice(0, 19).replace(':', ' ');
    const desc = req.body.desc;

    // sql query
    var sql = `INSERT INTO records (startDate, endDate, des) VALUES ("${sDate}","${eDate}", "${desc}")`;

    con.query(sql, function (err, result) {
        if (err) throw err;
        return res.json({
            status: true,
            message: "log entry added",
        });
    });

}