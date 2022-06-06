const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    let logo = global.bcgroup
    let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
    conn.reply(m.chat, `_Send a broadcast message to ${groups.length} group_\nestimation complete ${groups.length * 1.5} seconds`, m)
    for (let id of groups) {
        await delay(1500)
        await conn.send3ButtonImg(id, logo,'*—「 Broadcast Group 」—*\n' + text, wm, '⋮☰ Menu', '.menu', 'Sewa', '.sewa', 'Taati peraturan bot', '.rules', m)
    }
    m.reply('_*Broadcast Finished*_')
}
handler.help = ['bcgcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastgrouploc|bcgcloc)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))

let wm = global.botwm
