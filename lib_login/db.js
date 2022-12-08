var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'bbdb.cuv4hgkmdrfn.ap-northeast-2.rds.amazonaws.com',
    user: 'master',
    password: 'bb-password',
    database: 'subway',
    multipleStatements: true
});
db.connect();

module.exports = db;