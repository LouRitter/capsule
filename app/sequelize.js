var mysql = require('mysql');
var Sequelize = require("sequelize");

var source ={
     jawsDB:{
        port:3306,
        host:   'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user:   'bd2hjhv2ybc5bea9',
        password:'n8572rmh5z5r62ob',
        database: 'nh6z3815qyixpc1h'
     }
    };

var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
module.exports = sequelize;