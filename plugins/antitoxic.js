let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 ANTI TOXIC 」*
Sender : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Message : ${m.text}
Don't be toxic! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /bitch|fuck|nude|fucker|myr|Ayin|Oombi/i
handler.command = new RegExp

module.exports = handler
