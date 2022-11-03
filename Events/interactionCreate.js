const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`La commande ${interaction.commandName} n'a pas été trouvé.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Une erreur s'est produite en executant la commande "${interaction.commandName}".`);
			console.error(error);
		}
	},
};