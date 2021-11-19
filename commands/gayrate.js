const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
        name: "gayrate",
    description: "Gives a random number, telling you how gay you are",
	data: new SlashCommandBuilder()
		.setName('gayrate')
		.setDescription('Gives a random number, telling you how gay you are'),
	async execute(interaction, client) {
const gay = Math.floor(Math.random() * Math.floor(100));
        const pingy = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Gay Scale...")
	.setDescription(`You are scientificly proven to be ${gay}% gay`)
	.setTimestamp()
		return interaction.reply({ embeds: [pingy] });
	},
};