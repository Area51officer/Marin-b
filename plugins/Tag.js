let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/8P075Vr/maxresdefault.jpg'
	let dares = [
'𝐇𝐨𝐰 𝐝𝐚𝐫𝐞 𝐲𝐨𝐮 𝐭𝐚𝐠 𝐦𝐞'
] // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'maker.jpeg', `“${pickRandom(dares)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['Bla']
handler.tags = ['info']
handler.command = @𝑀𝑎𝑟𝑖𝑛 𝐾𝑖𝑡𝑎𝑔𝑎𝑤𝑎<𝟑$/i
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
