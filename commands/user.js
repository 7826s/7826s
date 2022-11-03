const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Donne des informations à propos de l\'utilisateur qui execute la commande.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply.Embed(`Cette commande à été executé par ${interaction.user.username}, qui a rejoin le ${interaction.member.joinedAt}.`);
	},
};