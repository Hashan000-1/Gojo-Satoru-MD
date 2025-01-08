const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_CHAT: process.env.AUTO_CHAT || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg",
SESSION_ID: process.env.SESSION_ID || "fdkCkaga#NWveBhARQaGbxR6_vBFcBprCh_8f6wd-N6FUWYyqUWk",
};


