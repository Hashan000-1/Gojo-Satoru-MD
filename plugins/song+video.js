
const { cmd } = require('../command'); // Ensure the path is correct
const { fetchJson } = require('../lib/functions'); // Ensure the path is correct

const apilink = 'https://api-pink-venom.vercel.app/api/ytdl?url='; // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "ytdl",
    alias: ["ytmp3", "ytmp4"],
    react: "🎥",
    desc: "Download YouTube videos or audio",
    category: "download",
    use: '.ytdl <YouTube URL>',
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) {
            return await reply("⚠️ Please provide a YouTube video URL!");
        }

        // Validate YouTube URL (basic check)
        const isValidUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(q);
        if (!isValidUrl) {
            return await reply("⚠️ Please provide a valid YouTube video URL!");
        }

        const ytdl_info = await fetchJson(`${apilink}${encodeURIComponent(q)}`);

        if (!ytdl_info.response) {
            return await reply("🚫 No results found!");
        }

        const videoInfo = ytdl_info.response;

        // Prepare the message
        const msg = `
            *YouTube Downloader* 🎥

            • *Title* - ${videoInfo.title}
            • *Description* - ${videoInfo.description || "No Description"}
            • *Duration* - ${videoInfo.duration}
            • *Views* - ${videoInfo.views}
            • *Channel* - [${videoInfo.name}](${videoInfo.channel})
            • *Download Link (MP3)* - [Click Here](${videoInfo.mp3})
            • *Download Link (MP4)* - [Click Here](${videoInfo.mp4})

            *© Projects of Didula Rashmika*`;

        // Sending the message with details
        await conn.sendMessage(from, {
            text: msg,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: `YouTube Downloader`,
                    body: `Download your favorite YouTube videos easily!`,
                    thumbnailUrl: videoInfo.image,
                    sourceUrl: videoInfo.url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await reply('❌ An error occurred while processing your request. Please try again later.');
    }
});
