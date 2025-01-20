const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg",
SESSION_ID: process.env.SESSION_ID || "PZszSBhY#89k3z1R8aIG49xm0K8jOSs8D1e7FApgAPor0mdLaQ-c",
};


