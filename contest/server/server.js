var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const path = require("path")
var mysql = require('mysql');

// constant values
const PORT = 3100
const database = 'Logs'

// setup routes
const apiRoutes = require("./routes")

//database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Logs"
});

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api", apiRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"));
})


// port 
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);

    // calling method for database connection
    connectDB();
})

const connectDB = async () => {
    con.connect(function(err) {
        if (err) throw err;
        
        // create table if not exists     
        var sql = "CREATE TABLE if not exists records (id int primary key auto_increment, startDate datetime, endDate datetime, des VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
      });
}