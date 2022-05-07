global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.clp = require('caliph-api')
global.bs = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.owner = ['62895342581896', '6285171612950', '6285877650700', '6281213812319'] // Put your number here
global.mods = []
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit 

global.repox = 'ktdprjct/from-rsl'
global.branx = 'master'

global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}


//=========== Sticker WM =============//
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'wa.me/62895342581896'
  var sticker_author = '© ktdprjct メ bot'
 } else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}
const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})
//=========== Don't Change ============//
global.packname = sticker_name
global.author = sticker_author
//=====================================//

//====== Sticker take(colong stiker:v) ======//
const cpack = fs.readFileSync("lib/colong.json")
const ctickerpack = JSON.parse(cpack)
if (ctickerpack.cpackname == '') {
  var colong_name = 'sikilinsut olang nylong stikell'
  var colong_author = '© ktdprjct メ bot'
 } else {
  var colong_name = ctickerpack.cpackname
  var colong_author = ctickerpack.cauthor
}
const file_colong = "lib/colong.json"
fs.watchFile(file_colong, () => {
  fs.unwatchFile(file_colong)
  console.log(chalk.redBright("Update 'colong.json'"))
  delete require.cache[file_colong]
  require('./lib/colong.json')
})
//====================================≠=//
global.pclg = colong_name
global.aclg = colong_author
//======================================//

global.wm = '© ktdprjct メ bot'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/BO7vTZIb2ZDCWKJ3oMmc0N'
global.linkig = ''
global.linkyt = ''
global.linkfb = ''
global.web = ''
global.web1 = ''

global.deslink = ''
global.titlink = ''
global.bodlink = ''

//========= Url Template Button =========//
global.dtu = 'Group Bot WhatsApp'
global.urlnya = 'https://chat.whatsapp.com/BO7vTZIb2ZDCWKJ3oMmc0N'

//========= Call Template Button =========//
global.dtc = 'Add Me'
global.nmbrnya = '+62 895-3425-81896'


//============ Proses Bot ============//
global.wait = '```Tunggu sebentar ya kak```'
global.eror = 'error kk, coba lagi nanti'


//========== Tampilan Bot ===========//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''
global.lim ='Ⓛ'
global.prem = 'Ⓟ'

//======== Fake Size ========//
global.fsx = 999999999999  //fake size foto/video
global.fsdx = 9999999999999  //fake size document 
global.pcdx = 999999999999  // fake page count document

global.versibot = '^0.0.4'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
