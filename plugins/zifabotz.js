let handler = async (m, { conn }) => {
let caption = `*(￣ヘ￣）HEMM*`

conn.send2Button( m.chat, caption, ``, `Menu`, `.?`, `donasi`, `.donasi`,  m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
