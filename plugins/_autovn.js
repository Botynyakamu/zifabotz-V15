let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let lmafo = fs.readFileSync('./src/AUD-20200522-WA0288')
let jembut = fs.readFileSync('./src/AUD-20200522-WA0283')
conn.sendFile(m.chat, jembut, '', '', m, true)
setTimeout(() => {
conn.sendFile(m.chat, lmafo, '', '', m, true)
}, 1000)
}

handler.customPrefix = /^(sc|.sc|script|sourcode|.sourcode|.script)$/i
handler.command = new RegExp

module.exports = handler
