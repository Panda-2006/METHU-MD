const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋🏻",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*HEY DEAR* ,${pushname}\n *I Am AlIVE NOW....! 🖐🏻*

╭─────────────➣
┊
┊FOR MORE DETAILS  ,   TYPE ( *.menu*) 🔐
┊
╰─────────────➣

*- I AM METHU - MD V1 WHATSAPP USER BOT 💛*


> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴍᴇᴛʜᴜ ᴍᴅ 
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/0yzKxMfX/20250301-041847.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
