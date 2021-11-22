const { blackjack, rps } = require('discord.js-games');

const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
        name: "play",
    description: "Play a game!",
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a game!')  .addStringOption(option =>
      option.setName('game')
        .setDescription('What to play?')
        .setRequired(true)
        .addChoice('Who\'s that Pokemon??????', 'poke')
        .addChoice('Guess da Logo', 'logo')
        .addChoice('Guess da Flag', 'flag')
        .addChoice('Tic Tac Toe', 'tic')
        .addChoice('ConnectFour', 'connect')
        .addChoice('Snake', 'snake')
        .addChoice('RockPaperScissors', 'doodlecrew')
        .addChoice('GuessTheNumber', 'number')
        .addChoice('Fast Type', 'type')
        .addChoice('Hangman', 'hangman')
        .addChoice('FindEmoji', 'emoji')),

    async execute(interaction) {
          const choice = interaction.options.getString('game');
	
    if (choice === "poke") {
    const result = await rps({
      message: interaction,
      embed: {
        title: 'RPS with slash command',
        color: 'GREEN',
        winMessage: '{user} congratulations, you won!'
      }
    });
    console.log('result:', result);
    } 
	}
    
}