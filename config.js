// Thanks For Allah
// AlyaaXzy
// BOTCAHX
// Zifabotz

let fs = require('fs')
global.owner = ['6287773973818', '6287773973818','6287773973818', '6287773973818', '6287773973818'] // Letakan nomor kamu disini
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': '2d118bcd18c4e779748a84b',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

// Sticker WM
global.packname = 'rozi'
global.author = 'zifa'

global.wait = '▰▰▰▰▱▱▱▱▱▱ ʟᴏᴀᴅɪɴɢ...'
global.eror = '「❗」Server LAGI ERROR COK!'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '©️ zifabotz' //change the watermark 
global.image = 'https://telegra.ph/file/052ca138a613c8859756f.jpg' //change the image
global.thumbfoto = 'https://telegra.ph/file/3c83bc5fa0cbcdc6a1e75.jpg'

// image
global.iklan1 = 'https://telegra.ph/file/fb3c63bfc185c1b93be23.jpg'
global.iklan2 = 'https://telegra.ph/file/ca019fecf933ee59d8048.jpg'
global.bcloc = 'https://telegra.ph/file/4ab99e9b66c753d25be39.jpg'
global.bcgroup = 'https://telegra.ph/file/4ac5fa9a50ffd3a1b7ef4.jpg'
global.donasi = 'https://telegra.ph/file/64d8556e1645572a455a5.jpg'
global.ow = 'https://telegra.ph/file/2c0af43b8190ec4d10e18.jpg'
global.menu = 'https://telegra.ph/file/422659beac3fbce755668.jpg'
global.rules = 'https://telegra.ph/file/dbcf65a7890c88d4c796f.jpg'
global.bank = 'https://telegra.ph/file/d5ddf4cc627bb0e6bc420.jpg'
global.kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
global.kolam = 'https://telegra.ph/file/5aa5dfa3394477e11fb18.jpg'
global.thanks = 'https://telegra.ph/file/9ed4e9df06e251d624c07.jpg'

global.multiplier = 9999999 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
