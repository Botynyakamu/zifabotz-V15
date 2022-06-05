let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.send2Button(m.chat, `_*total fitur zifabotz saat ini: ${totalfeatures}*_`, '©️ zifabotz', 'Menu', '.menu', 'owner', '.owner', m) 
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler
