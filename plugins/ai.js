/* Coded by Dinuka Himsara 
 Don't use this code without any permission */

 const config = require('../config');
 const { cmd, commands } = require('../command');
 const { fetchJson } = require('../lib/functions');
 
 // Detect any incoming message
 conn.ev.on('messages.upsert', async (message) => {
     try {
         const msg = message.messages[0];  // Get the message object
         const { from, body, isGroup, sender } = msg;  // Extract details from the message
 
         // Only reply with AI when AI mode is ON, and ensure the message is from a private chat (not a group)
         if (config.AUTO_CHAT === "true" && !isGroup) {
             if (body) {  // If there's text in the message
                 let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${body}`);
                 await conn.sendMessage(from, { text: `${data.data}` });
                 console.log(`Replied to ${sender} with AI response: ${data.data}`);
             }
         }
     } catch (e) {
         console.log('Error in auto-reply:', e);
     }
 });
 
 // Command to turn AI mode ON
 cmd({
     pattern: "ai on",
     desc: "Enable AI mode",
     category: "main",
     filename: __filename
 },
 async (conn, mek, m, { reply }) => {
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
 },
 async (conn, mek, m, { reply }) => {
     process.env.AUTO_CHAT = "false";  // Disable AI mode by setting the environment variable
     config.AUTO_CHAT = "false";  // Update the config in memory
     return reply("AI mode is now disabled. I won't reply with AI responses anymore.");
 });
 