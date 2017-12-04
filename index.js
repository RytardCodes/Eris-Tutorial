var Eris = require('eris'); // Define the Eris Library

/*
    Types:
        Token: String,
        Options: Object (Optional)
        Command Options: Object (Optional)
        */

var bot = new Eris.CommandClient('TOKEN', {}, {
    defaultHelpCommand: true, // Type: Boolean . Choose from either use the Built-In Help Command or Make your own
    description: 'An Eris-based Discord Bot', // Type: String . Sets the Bot's Description when using the Help Command or other Command's you're Going to use.
    ignoreBots: true, // Type: Boolean . Choose from either to Ignore OAuth Bots or Not
    ignoreSelf: true, // Type: Boolean . Choose from either to Ignore the Current Bot Logged in or Not
    name: '<Bot Username>', // Type: String . Sets the Bot's Name for the Help Command
    owner: 'a unknown user', // Type: String . Sets the Bot Owner's Name for the Help Command
    prefix: '@mention ', // Type: String || Array . Sets the Bot's Global Prefix
    defaultCommandOptions: {} // Type: Object . Default command options. This object takes the same options as a normal Command
});

bot.on('ready', () => { // Same as D.js Ready Event
    console.log('Ready!')
});

bot.registerCommand('ping', (message) => { // How to Make: bot.registerCommand('string', generator || array || string). If it's a string, then it will reply the string. If an array, it will reply randomly. If a generator, it generates a message, or message and args (if defined) and runs a command with that
    bot.createMessage(message.channel.id, `Pong! Took \`${message.channel.guild.shard.latency}ms\``)
});
/*
    You can also make an Object for the Command Options
    Check at => https://abal.moe/Eris/docs/Command
    */

bot.registerCommand('prefix', (message, args) => { // As you can see, i ran a Generator with args, so yeah.
    if (args.join(' ').length === 0) {
        bot.createMessage(message.channel.id, 'Please Specify a New Prefix to Use!')
        return;
    }

    bot.registerGuildPrefix(message.channel.guild.id, args.join(' '));
    bot.createMessage(message.channel.id, `Changed the Guild Prefix to: **${args.join(' ')}**`)
}, {
    /*
        Giving Specified Requirements for the PREFIX Command
        Take a Look at the Permissions List at => https://abal.moe/Eris/docs/reference
        */

    cooldown: 5000,
    cooldownMessage: 'Please wait 5 Seconds to Use it Again!',
    requirements: {
        "manageGuild": true
    },
    permissionMessage: 'You need the `MANAGE_GUILD` Permissions to Use this Command!',
    guildOnly: true
});

bot.registerCommand('dm', (message) => { // This is questioned by many Users, on how to DM people, well here's how!
    client.getDMChannel('USER ID').then(channel => channel.createMessage('Your Message Here')); // Pretty Basic Right?
});

bot.connect(); // Connect the Bot to Discord!
