let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Kokushibo.mp3'
conn.sendFile(m.chat, vn, 'Kokushibo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.help = ['Kokushibo']
handler.tags = ['voice']
handler.command = /^(kokushibo|KOKUSHIBO|Kokushibo)$/i

module.exports = handler
