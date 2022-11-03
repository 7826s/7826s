// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection, ActivityType } = require('discord.js');
const dotenv = require('dotenv');
const { on } = require('node:events');
const fs = require('node:fs');
const path = require('node:path');
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

console.log("étape 2");

// Update des commandes crée

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	}
	else {
		console.log(`[WARNING] Il manque une "data" ou une propriété à "execute" dans la commande ${filePath}`);
	}
}

console.log("étape 3");

// Event handler, pour gérer tout les évenements.

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

 client.once(Events.ClientReady, u => {
 	client.user.setPresence({status: 'idle'});
 	client.user.setActivity('MMZ', { type: ActivityType.Listening});
 });

// Log in to Discord with your client's token
client.login(process.env.token);