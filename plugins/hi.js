let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/9tMNN0N/my-dress-up-darling-11032022-0011.jpg'
	let dares = [
'π»ππ€ πππ¦ π βπππ π¦ππ’?β¨'
] // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'maker.jpeg', `*π―πππ! π°π πππππ πΎππ‘ππππ€π<π*\nβ${pickRandom(dares)}β`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['hi']
handler.tags = ['info']
handler.command = /^(hi|hello|hey)$/i
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
