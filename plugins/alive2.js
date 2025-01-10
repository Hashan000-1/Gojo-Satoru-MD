const axios = require('axios');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');
const { cmd, commands } = require('../command');
const config = require("../config");

cmd({
    pattern: "alive2",
    react: "🤖",
    desc: "Check Bot is Alive",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Download the image
        
// Download the image
const imageUrl = 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg';
const { data } = await axios.get(imageUrl, { responseType: 'arraybuffer' });
const imageBuffer = Buffer.from(data);  // Convert the image data to a buffer

// Upload the image buffer to WhatsApp server
const { imageMessage } = await generateWAMessageContent({
    image: { buffer: imageBuffer }
}, { upload: conn.waUploadToServer });

// Create the interactive message content
const msgContent = generateWAMessageFromContent(m.chat, {
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
                    imageMessage: imageMessage  // Use the imageMessage directly
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

// Send the message to the chat
await conn.relayMessage(m.chat, msgContent.message, {
    messageId: msgContent.key.id
});

