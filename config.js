const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
<<<<<<< HEAD
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
=======
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
>>>>>>> ed80d1b79f41a05bb9d3f7725c7ba65ee4b831b5
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/h2vC7XG/Gojo-satoru-md-bot-2.jpg",
SESSION_ID: process.env.SESSION_ID || "SdtRWbjS#QqJw3tO4JRdx7QFiYsPPPBPJhl3tOb71mk4slL_pGwA",
};


