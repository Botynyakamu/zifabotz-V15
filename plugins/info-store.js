/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*STORE CREATOR*
«================»
››╭─〘 *Store* 〙
╭╡📮: Store owner kami.
│┝‷✧ *jasa run bot:*
│┝‷✧ *jasa jadi bot:*
│╰───···─────
│⁺◛˖ Ingin membeli store owner? Chat owner aja…
╰──────────···───
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'SOURCE CODE 🐈',
               url: sc
             }

           },
                {
               urlButton: {
               displayText: '🌍 Instagram 🌍',
               url: webm
             }

           },
               {
             quickReplyButton: {
               displayText: 'Creator bot',
               id: '.owner',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(store)$/i
handler.help = ['store']
module.exports = handler
