const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'tod (Truth or Dare)',
  description: 'Such a classic game',
  
	data: new SlashCommandBuilder()
		.setName('tod')
		.setDescription('Truth or Dare...')
        .addStringOption((option) =>
      option
        .setName("selection")
        .setDescription("select dare if you have the guts...")
        .setRequired(true)
 .addChoice('Truth', 'truth')
        .addChoice('Dare', 'dare')

    ),
cooldowns : new Set(),
	    cooldown : 8,
	async execute(interaction) {
const choice = interaction.options.getString('selection');
if (choice === "truth") {

let string = [
      "Who is your crush",
      "Are you rude to others",
      "Why do you use this bot",
      "Who is your best friend",
      "Do you simp for a celebrity",
      "Whats your favorite show",
      "Are you really who you are",
      "When did you start liking your crush",
      "Have you ever spoken to your crush",
    ];

 let truth = string[Math.floor(Math.random() * string.length)];

const truthEmbed = new MessageEmbed()
.setTitle('Truth...')
.setDescription("`" + truth + "?`")
.setColor('GREEN')

return await interaction.reply({embeds: [truthEmbed]})

} else if (choice === "dare") {
let dare = [
      "Read a 600 page book",
      "Tell a random guy u love them",
      "Vote this bot",
      "Say that Aspect is the best!",
      "DM your crush and admit u have a crush on them",
      "Watch a spongebob episode and record it",
      "Text all your friends and say you will buy them food",
      "Buy a burger",
      "Eat KFC",
    ];
 let Result = dare[Math.floor(Math.random() * dare.length)];

const dareEmbed = new MessageEmbed()
.setTitle('Dare!')
.setDescription("`" + Result + '!`')
.setColor('RED')

return await interaction.reply({embeds: [dareEmbed]})
} 

	},
};
