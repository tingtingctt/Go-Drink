// Import MySQL connection.
var connection = require("./connection.js");

const db = {
    viewAll: (table)=> connection.query(`SELECT * FROM ${table}`),
    addOne: (table,obj)=> connection.query(`INSERT INTO ${table} SET ?`, obj),
    updateOne: (table,id)=> connection.query(`UPDATE ${table} SET devoured = 1 WHERE id=${id}`),
    deleteOne: (table,id)=> connection.query(`DELETE FROM ${table} WHERE id=${id} `),
}
module.exports = db;