var Eris = require('eris'); // Define the Eris Library
var bot = new Eris('TOKEN'); // Token Type: String

bot.on('ready', () => { // Same as D.js Ready Event
    console.log('Ready!')
});

bot.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        bot.createMessage(message.channel.id, `Pong! Took \`${message.channel.guild.shard.latency}\``) // If the Message is ping, reply with the API Latency and Pong!
    }
});

bot.connect(); // Connect the Bot to Discord!
