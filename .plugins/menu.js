const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `👋🏻 HEY ${pushname} THIS IS MY MENU 📍`

*© OWNERS*  : ᴄᴋᴏᴅᴛ|ᴄʜᴀɴᴜ
                      
*© SUPPORTER* : ᴄᴋᴏᴅᴛ | ᴛᴇᴀᴍ

*© NUMBERS* : +94767952708
                        
*© SUPPORTER NUMBER* : +94729865906

╭──────────●●►
│📌 LIST MENU
╰──────────●●►

╭────────────➣                       
┆📍𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨
╰────────────➣
╭────────❐
┆❖.alive
┆❖.menu
┆❖.ping
┆❖.system 
╰────────❐

╭────────────────➣                           
┆📍𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨
╰────────────────➣
╭───────────❐
┆❖.song
┆❖.video 
┆❖.fb
┆❖.mediafire 
╰───────────❐

╭─────────────➣                           
┆📍𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨
╰─────────────➣
╭──────────❐
┆❖.shutdown 
┆❖.setpp
┆❖.block
┆❖.unblock  
┆❖.clearchat
┆❖.restart 
┆❖.broadcast 
╰──────────❐


I AM METHU - MD V1 WHATSAPP USER BOT 💛


> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴍᴇᴛʜᴜ  ᴍᴅ
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/vpJ0gvw/20250301-031933.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
