const { cmd } = require('../command');
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');

cmd({
    pattern: 'alive2',
    desc: 'Check if the bot is running',
    category: 'info',
    react: '💚',
    use: '.alive',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd }) => {
    try {
        // Create the alive message
        const aliveMessage = {
            text: 'I am alive! 🤖',
            footer: 'Choose an option below:',
            buttons: [
                { buttonId: 'help', buttonText: { displayText: 'Help' }, type: 1 },
                { buttonId: 'status', buttonText: { displayText: 'Status' }, type: 1 }
            ],
            headerType: 1
        };

        // Send the alive message with buttons
        await conn.sendMessage(from, aliveMessage);
    } catch (e) {
        console.log(e);
        m.reply('Error while sending alive message!');
    }
});

// Handle button responses
cmd({
    pattern: 'help|status',
    desc: 'Handle button responses',
    category: 'info',
    react: '🔘',
    use: '.help or .status',
    filename: __filename
}, async (conn, mek, m, { from }) => {
    if (m.isButton) {
        console.log(`Button pressed: ${m.buttonId}`); // Log button ID
        let responseMessage;
        switch (m.buttonId) {
            case 'help':
                responseMessage = 'Here is the help section...';
                break;
            case 'status':
                responseMessage = 'The bot is running smoothly!';
                break;
            default:
                responseMessage = 'Unknown command';
        }
        await conn.sendMessage(from, { text: responseMessage });
    } else {
        console.log("Message is not a button interaction:", m); // Log non-button messages
    }
});