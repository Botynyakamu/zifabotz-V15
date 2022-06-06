let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let lmafo = fs.readFileSync('./src/PTT-20220220-WA0414.opus')
let jembut = fs.readFileSync('./src/WhatsApp-Audio-2021-06-16-at-14.35.33.opus')
conn.sendFile(m.chat, jembut, '', '', m, true)
setTimeout(() => {
conn.sendFile(m.chat, lmafo, '', '', m, true)
}, 1000)
}

handler.customPrefix = /^(kontol|memek|jembut|jancok|ngentod|pepek|sial)$/i
handler.command = new RegExp

module.exports = handler
