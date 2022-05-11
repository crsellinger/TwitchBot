// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const DiscordBot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
DiscordBot.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
DiscordBot.login(token);

const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, 'SynBot connected!');   //currently uses broadcaster username to send messages, refer to ./setting.json for fix
    
});

client.on('message', (channel, user, message, self) => {
    if (self) return;

    if (message == '!ping'){
        client.say(channel, `@${user.username} has pinged SynBot!`);
        console.log(DiscordBot.)
    }
});