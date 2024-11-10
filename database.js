const mysql2 = require('mysql2')

const mysql = mysql2.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'note_app',
}).promise()

async function getNotes() {
    const [rows] = await mysql.query('SELECT * FROM notes')
    return rows
}

async function getNote(id) {
    const [row] = await mysql.query(`
        SELECT *
        FROM notes
        WHERE id = ?
        `, [id])
    return row
}

async function setNote(title , contents) {
    const result = await mysql.query(`
        INSERT INTO notes (title , contents)
        VALUES (? , ?)
        `[title , contents])
    const id = result.insertId
    return getNote(id)
}

module.exports = {getNotes,  getNote , setNote}