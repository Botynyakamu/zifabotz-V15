let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
♡   ❍ㅤ  ⎙ㅤ ⌲
╭─[ *_STORE_* ]─✧
╰─────···`.trim()
  const button = {
        buttonText: 'STORE ZIFABOTZ',
        description: kontol,
        sections:  [{title: "STORE ZIFABOTZ", rows: [
        {title: '🦄» sewa zifabotz', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewazifabotz1"},
 {title: '📺» Pasang iklan di zifabotz', description: "menampilkan produk mu", rowId:".iklan1"},
        {title: '🦄» Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewasat"},
        {title: '😼» Jasa run mursid', description: "jasa run bot", rowId:".runbotmursid"},
        {title: '📺» Pasang iklan di bot', description: "jasa pemasang iklan di bot", rowId:".lucbot"},
        {title: '📦» Jasa tutorial run replit', description: "tutorial replit", rowId:".replit2"},
        {title: '📦» Jasa tutorial run heroku', description: "tutorial heroku", rowId:".heroku3"},
        {title: '🗃️» KEMBALI KE HALAMAN UTAMA', description: "menampilkan menu", rowId:".menu"},
        {title: '📮» RULES', description: "taati peraturan", rowId:".rules2"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['iklan']
module.exports = handler
