
/* Coded by Dinuka Himsara 
 Don't use this code without any permission */

const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

// Import GojoBotInc from index.js (where it is initialized)
// Detect any incomin
// Command to turn AI mode ON
cmd({
    pattern: "ai on",
    desc: "Enable AI mode",
    category: "main",
    filename: __filename
}, async (GojoBotInc, mek, m, { reply }) => {
    process.env.AUTO_CHAT = "true";  // Enable AI mode by setting the environment variable
    config.AUTO_CHAT = "true";  // Update the config in memory
    return reply("AI mode is now enabled. I'll reply to your messages!");
});

// Command to turn AI mode OFF
cmd({
    pattern: "ai off",
    desc: "Disable AI mode",
    category: "main",
    filename: __filename
}, async (GojoBotInc, mek, m, { reply }) => {
    process.env.AUTO_CHAT = "false";  // Disable AI mode by setting the environment variable
config.AUTO_CHAT = "false";  // Update the config in memory
    return reply("AI mode is now disabled. I won't reply with AI responses anymore.");
});
