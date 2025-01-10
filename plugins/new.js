const axios = require('axios');
const { generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
const { cmd } = require('../command');

cmd({
    pattern: "alive4",
    react: "🤖",
    desc: "Check if the bot is alive",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // Generate the interactive message content
        const messageContent = {
            text: 'Gojo Satoru MD is Alive Now 💙',
            footer: 'Gojo Satoru MD 🤖',
            buttons: [
                { buttonId: '.menu', buttonText: { displayText: 'Main Menu ✨' }, type: 1 },
                { buttonId: '.sysinfo', buttonText: { displayText: 'Details' }, type: 1 },
                { buttonId: '.ping', buttonText: { displayText: 'Ping' }, type: 1 }
            ],
            headerType: 1,
            imageMessage: { 
                url: 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg' 
            }
        };

        const message = generateWAMessageFromContent(from, {
            templateMessage: {
                hydratedTemplate: {
                    hydratedContentText: messageContent.text,
                    hydratedFooterText: messageContent.footer,
                    hydratedButtons: messageContent.buttons,
                },
            },
        }, {});

        // Send the interactive message
        await conn.relayMessage(from, message.message, { messageId: message.key.id });
    } catch (error) {
        console.error(error);
        reply(`Error: ${error.message}`);
    }
});
