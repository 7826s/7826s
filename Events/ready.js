const { Client, GatewayIntentBits, Events} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(c) {
		console.log(`Prêt! Connecté en tant que ${c.user.tag}`);
	},
};