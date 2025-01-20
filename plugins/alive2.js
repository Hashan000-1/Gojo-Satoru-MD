const axios = require('axios');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive2",
    react: "🤖",
    desc: "Check Bot is Alive",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 
  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Gojo Satoru MD is Alive Now 💙 '
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Gojo Satoru MD 🤖'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: 'Gojo Satoru MD is Alive Now ✨',
            hasMediaAttachment: true,
            imageMessage: 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg'
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"Select The Command\",\"sections\":[{\"title\":\"Gojo Satoru MD ✨🤖\",\"rows\":[{\"header\":\"Main Menu ✨\",\"title\":\"Gojo Satoru MD ✨\",\"description\":\"Give All Commands\",\"id\":\".menu\"},{\"header\":\"Details\",\"title\":\"Gojo Satoru MD\",\"description\":\"Details about Gojo Satoru\",\"id\":\".sysinfo\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Give me Ping\",\"id\":\".ping\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }
           ]
          })
        })
      }
    }
  }, {});
  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})