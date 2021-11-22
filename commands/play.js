
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
const { Pokemon } = require('djs-games')
const game = new Pokemon({
  message: false,
 slashCommand: true,
  interaction: interaction,
    token: 'MTYzNDkwODMyMQ.W4Bdhbuh7wjOcSt04Zw1GNJBjndSn8KS.c3beb08f4ee96f07', // Get Your Api Token at https://dagpi.xyz/dashboard
  winMessage: 'You Win!',
  loseMessage: 'You Lose!',
  wrongGuess: 'Wrong Guess loser!',
  stopCommand: 'stop',
  maxAttempts: 10,
})
game.start()
    } else     if (choice === "youtube") {
game='YouTube is the biggest video streaming platform in the world.'

    }  else  if (choice === "chess") {
game='A1 to B3. Wait, no. I mean yeah. No... UGH!!!!'

    }  else  if (choice === "checkers") {
game='My grandma is good at this one :D'

    }  else  if (choice === "fishing") {
game=':tropical_fish:   :fish:  :blowfish:   :fishing_pole_and_fish: '

    } else if (choice === "lettertile") {
game='I\'m good at this one :)'

    } else     if (choice === "wordsnack") {
game='Save a snack for me?'

    } else     if (choice === "doodlecrew") {
game='Ready? Set. Draw!'

    } else     if (choice === "spellcast") {
game='Spells galore =>'

    } else     if (choice === "awkword") {
game='GOGOGOGOGO, and dont make it awkward (get it?)!'

    } else     if (choice === "puttparty") {
game='This is so new we dont even know what to put here'

    }

		await interaction.reply({content : `Pong! ${emoji} Client Latency - ${interaction.client.ws.ping}ms.`});
	}
    
}