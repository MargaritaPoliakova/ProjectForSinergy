const express = require('express')
const mysql = require('mysql')
const exphbs = require('express-handlebars')

const connection = mysql.createConnection({
host: "localhost",
user: "root",
database: "Mysql",
password: "root"
});
connection.connect(function(err){
if (err) {
return console.error("Ошибка: " + err.message);
}
else{
console.log("Подключение к серверу MySQL успешно установлено");
}
}); 
