const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('avatar')
	.setDescription('Prend l\'avatar de l\'utilisateur spécifié!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('@ l\'utilisateur dont vous souhaiter l\'avatar.'))
	.addBooleanOption(option =>
		option.setName('ephemeral')
			.setDescription('Whether or not the echo should be ephemeral'))
};