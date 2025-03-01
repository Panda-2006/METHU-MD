const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋🏻 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*💛 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴄʜᴀɴᴜ*
💛 *ɴᴜᴍʙᴇʀ* -: 94767952708
💛 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029Vb7zZ9uCHDyqYLV4QM1N

*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴍᴇᴛʜᴜ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/SXvNd406/Picsart-25-02-28-13-46-38-821.jpg'/`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
