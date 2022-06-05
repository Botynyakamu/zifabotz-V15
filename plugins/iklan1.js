const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let str = `››╭─〘 *JASA LOGO* 〙
╭╡📮: Jasa pembuatan logo hanya menerima via:
│┝‷✧ *Dana:* 085828764046
│╰───···─────
│⁺◛˖ Ingin jasa pembuatan logo? Chat nomor dibawah
╰──────────···───╮`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(iklan1)).buffer()
  image = (await conn.prepareMessage('6287773973818@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "JASA PASANG IKLAN",
        "description": '\n' + watermark + '\n' + str,
        "retailerId": "yuk order!",
        "url": "▌│█║▌║▌║║▌║▌║█│▌",
        "currencyCode": "IDR",
        "priceAmount1000": "10000000",
"productImageCount": "1",
      },
      "businessOwnerJid": "6287773973818@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['iklan1']
handler.tags = ['store']
handler.command = /^(iklan1)$/

module.exports = handler

let wm = global.botwm
