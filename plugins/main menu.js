const config = require('../config');
const { cmd, commands } = require('../command');
const pdfUrl = "https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg";

cmd({
    pattern: "menu",
    desc: "Check commands.",
    category: "main",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Send a message indicating the bot is alive
        const message = await conn.sendMessage(from, { text: '`𝗚𝗼𝗷𝗼 𝗦𝗮𝘁𝗼𝗿𝘂 𝗠𝗗 𝗕𝗼𝘁 𝗠𝗲𝗻𝘂 💙`' });

        // Simulate some processing time
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulating a delay
        const endTime = Date.now();
        const ping = endTime - startTime;

        // New menu message with different decorations
        const menuMessage = `
🎀╔═══════════════⧫═══════════════🎀
🎀 *𝗚𝗢𝗝𝗢 𝗦𝗔𝗧𝗢𝗥𝗨 𝗠𝗗 𝗠𝗘𝗡𝗨 💙* 🎀
🎀
🎀 *𝗔𝘂𝘁𝗵𝗼𝗿:* 𝙳𝙸𝙽𝚄𝙺𝙰 𝙷𝙸𝙼𝚂𝙰𝚁𝙰
🎀 *𝗖𝗼𝗻𝘁𝗮𝗰𝘁:* wa.me/+94761209144
🎀 *𝗪𝗲𝗯 𝗨𝗿𝗹:* https://gojo-yagami.github.io
🎀 *𝗥𝗲𝗽𝗼 𝗨𝗿𝗹:* https://github.com/gojo-yagami/Gojo-Satoru-MD
🎀 *𝗣𝗿𝗲𝗳𝗶𝘅:* ( . )
🎀
🎀╚═══════════════⧫═══════════════🎀

✨ *𝗠𝗲𝗻𝘂 𝗦𝗲𝗰𝘁𝗶𝗼𝗻𝘀* ✨

━━━━━━━━━━━━━━

✳️ *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂:*  
📂 *Command:* *.downloadmenu*  
📜 *Description:* Download files from provided links.  
🕰️ *Usage:* Use command for getting links to download files.

━━━━━━━━━━━━━━

✳️ *𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂:*  
📂 *Command:* *.mainmenu*  
📜 *Description:* Get help with bot commands.  
🕰️ *Usage:* Use command for getting a list of bot commands.

━━━━━━━━━━━━━━

✳️ *𝗚𝗿𝗼𝗽 𝗠𝗲𝗻𝘂:*  
📂 *Command:* *.groupmenu*  
📜 *Description:* Get information about the group.  
🕰️ *Usage:* Use command for managing group settings.

━━━━━━━━━━━━━━

✳️ *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂:*  
📂 *Command:* *.ownermenu*  
📜 *Description:* Set welcome message for new members.  
🕰️ *Usage:* Use command to configure your bot's behavior.

━━━━━━━━━━━━━━

✳️ *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂:*  
📂 *Command:* *.convertmenu*  
📜 *Description:* Convert files to different formats.  
🕰️ *Usage:* Use command to convert your files.

━━━━━━━━━━━━━━

✳️ *𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂:*  
📂 *Command:* *.searchmenu*  
📜 *Description:* Search for information online.  
🕰️ *Usage:* Use command for web searches.

━━━━━━━━━━━━━━

🎀╔═══════════════⧫═══════════════🎀
🎀 *© 𝙶𝙾𝙹𝙾 𝚂𝙰𝚃𝙾𝚁𝚄 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ* 🎀
🎀 *© ᴄᴏᴅᴇᴅ ʙʏ ᴅɪɴᴜᴋᴀ ʜɪᴍꜱᴀʀᴀ* 🎀
🎀╚═══════════════⧫═══════════════🎀
`;

        // Send the alive response with the updated menu
        await conn.sendMessage(from, {
            document: { url: pdfUrl },
            fileName: 'Gojo Satoru MD💙',
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            image: { url: 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg' },
            pageCount: 2024,
            caption: menuMessage,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'Gojo Satoru MD V2 💙',
                    newsletterJid: "120363343196447945@newsletter",
                },
                externalAdReply: {
                    title: '©Gojo Satoru MD 💙',
                    body: ' *Gojo Satoru MD 💙*',
                    thumbnailUrl: 'https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg',
                    sourceUrl: 'https://wa.me/+94761209144',
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
