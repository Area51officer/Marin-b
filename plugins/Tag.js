let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/8P075Vr/maxresdefault.jpg'
	let dares = [
'𝐻𝑜𝑤 𝑑𝑎𝑟𝑒 𝑦𝑜𝑢 𝑡𝑎𝑔 𝑴𝒚 𝑫𝒂𝒓𝒍𝒊𝒏𝒈 🤨'
] // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'maker.jpeg', `“${pickRandom(dares)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.customPrefix = /@Vambo|Vambo/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
