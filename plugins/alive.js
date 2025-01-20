const config = require('../config');
const { cmd, commands } = require('../command');
const pdfUrl = "https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg";

cmd({
    pattern: "alive",
    desc: "Check if the bot is alive.",
    category: "main",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {


        // Send a message indicating the bot is alive
        const message = await conn.sendMessage(from, { text: '`Gojo Satoru MD is Alive Now 🤖✨`' });

        // Simulate some processing time
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulating a delay
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the alive response with additional information
        await conn.sendMessage(from, {
            document: { url: pdfUrl }, // Path to your PDF file
            fileName: 'Gojo Satoru MD ✨', // Filename for the document
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            image: { url: 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg' },
            pageCount: 2024,
            caption: `Gojo Satoru MD is Alive Now 🤖✨ \n\n⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : ${ping} ms\n\n𝗧𝘆𝗽𝗲   .𝗺𝗲𝗻𝘂 𝗼𝗿 .𝗹𝗶𝘀𝘁 𝗳𝗼𝗿 𝗴𝗲𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀\n\nGojo Satoru MD ✨`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'Gojo Satoru MD ✨',
                    newsletterJid: "120363343196447945@newsletter",
                },
                externalAdReply: {
                    title: '©Gojo Satoru MD ✨',
                    body: ' *Gojo Satoru MD ✨*',
                    thumbnailUrl: 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg',
                    sourceUrl: 'https://wa.me/+94775625576',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});

