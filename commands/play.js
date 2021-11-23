const { blackjack, rps, slotMachine, connectFour } = require('discord.js-games');

const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
        name: "play",
    description: "Play a game!",
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a game!')
    
    .addStringOption(option =>
      option.setName('game')
        .setDescription('What to play?')
        .setRequired(true)
        .addChoice('Blackjack', 'blackjack')
        .addChoice('RockPaperScissors', 'RockPaperScissors')
        .addChoice('Slot Machine', 'slots')
.addChoice('Gunfight', 'gunfight')
.addChoice('Soccer', 'soccer')
.addChoice('Roadrace', 'roadrace')


        .addChoice('Connect Four', 'connect4'))
        .addUserOption(option =>
        option.setName('user')
        .setDescription('only for gunfight and roadrace')),
        

    async execute(interaction) {
          const choice = interaction.options.getString('game');
	const member = interaction.options.getUser('user')
    if (choice === "blackjack") {
await blackjack({ message: interaction });

    } else if (choice === "RockPaperScissors") {
      await     rps({ 
        message: interaction,

         });
    } else if (choice === "slots") {
await slotMachine({
  message: interaction,
  emojis: [
    ":grin:", ":smile:", ":slight_smile:", ":smirk:", ":ok_hand:"],
  embed: {
    winMessage: "yay! u won! You are extremely lucky to have won. Trust me.",
    loseMessage: "ha loser, u lost lol",
    descriptionMesage: "Possible emojis:\n :grin:, :smile:, :slight_smile:, :smirk:, :ok_hand:"
  
}

  });
    } else if (choice === "connect4") {
      await connectFour({message: interaction})
    } else if (choice === "gunfight") {

const opponent = interaction.options.getUser('user');
		if(!opponent) return interaction.reply('Use the user option please');

		const positions = {
			three: '_ _        :levitate: :point_right:      **3**        :point_left: :levitate:',
			two: '_ _        :levitate: :point_right:      **2**        :point_left: :levitate:',
			one: '_ _        :levitate: :point_right:      **1**        :point_left: :levitate:',
			go: '_ _        :levitate: :point_right:      **GO!**        :point_left: :levitate:',
			ended1: '_ _     :levitate: :point_right:      **STOP!**        :skull_crossbones: :levitate:',
			ended2: '_ _     :levitate: :skull_crossbones:      **STOP!**        :point_left: :levitate:',
		};

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						label: 'Shoot!',
						custom_id: 'shoot1',
						style: 'PRIMARY',
						disabled: true,
					},
					{
						type: 2,
						label: '\u200b',
						custom_id: 'id lol useless',
						style: 'SECONDARY',
						disabled: true,
					},
					{
						type: 2,
						label: 'Shoot!',
						custom_id: 'shoot2',
						style: 'DANGER',
						disabled: true,
					},
				],
			},
		];
interaction.reply('Game started! May the fastest win!')
		const msg = await interaction.channel.send({
			content: positions.three,
			components: componentsArray,
		});

		function countdown() {
			setTimeout(() => {
				msg.edit({
					content: positions.two,
					components: componentsArray,
				});
			}, 1000);
			setTimeout(() => {
				msg.edit({
					content: positions.one,
					components: componentsArray,
				});
			}, 2000);
			setTimeout(() => {
				componentsArray[0].components[0].disabled = false;
				componentsArray[0].components[2].disabled = false;
				msg.edit({
					content: positions.go,
					components: componentsArray,
				});
			}, 3000);
		}
		countdown();

		const filter = button => {
			return button.user.id == interaction.user.id || button.user.id == opponent.id;
		};

		const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });

		componentsArray[0].components[0].disabled = true;
		componentsArray[0].components[2].disabled = true;

		if(button.customId === 'shoot1' && button.user.id == interaction.user.id) {
			msg.edit({
				content: positions.ended1,
				components: componentsArray,
			});
			return button.reply({ content: `<@${interaction.user.id}> won!` });
		}
		else if(button.customId === 'shoot2' && button.user.id == opponent.id) {
			msg.edit({
				content: positions.ended1,
				components: componentsArray,
			});
			return button.reply({ content: `<@${opponent.id}> won!` });
		}
	

    } else if (choice === "soccer") {
      	const positions = {
			left: '_ _                   🥅🥅🥅\n_ _                   🕴️\n      \n_ _                         ⚽',
			middle: '_ _                   🥅🥅🥅\n_ _                        🕴️\n      \n_ _                         ⚽',
			right: '_ _                   🥅🥅🥅\n_ _                              🕴️\n      \n_ _                         ⚽',
		};
		let randomized = Math.floor(Math.random() * Object.keys(positions).length);
		let gameEnded = false;
		let randomPos = positions[Object.keys(positions)[randomized]];

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'left',
						label: 'Left',
					},
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: 'middle',
						label: 'Middle',
					},
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'right',
						label: 'Right',
					},
				],
			},
		];
interaction.reply('Started! Beat me, I dare you :sunglasses:')
		const msg = await interaction.channel.send({
			content: randomPos,
			components: componentsArray,
		});
		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: randomPos,
				components: componentsArray,
			});
		}
		setInterval(() => {
			if(gameEnded == false) return update();
		}, 1000);

		const filter = button => {
			return button.user.id === interaction.user.id;
		};
		const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });

		if(button.customId !== Object.keys(positions)[randomized]) {
			gameEnded = true;
			return button.reply({ content: 'You won!' });
		}
		else {
			gameEnded = true;
			return button.reply({ content: 'You lose...' });
		}
    } else if (choice === "roadrace") {
      	const opponent = interaction.options.getUser('user');

		if(!opponent) return interaction.reply('Use the user option please');

		const positions = {
			first: ':checkered_flag:--------------------',
			second: `                              :red_car: - <@${interaction.user.id}>`,
			third: `                              :blue_car: - <@${opponent.id}>`,
			fourth: ':checkered_flag:--------------------',
		};
		const blue = String(Math.random());
		const red = String(Math.random());

		positions.second = positions.second.split('');
		positions.third = positions.third.split('');

		const speed = 2;

		const data = { first: 30, second: 30 };

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: blue,
						emoji: { name: '🚙' },
					},
					{
						type: 2,
						style: 'DANGER',
						custom_id: red,
						emoji: { name: '🚗' },
					},
				],
			},
		];
interaction.reply('Game started')
		const msg = await interaction.channel.send({
			content: positions.first + '\n' + positions.second.join('') + '\n' + positions.third.join('') + '\n' + positions.fourth,
			components: componentsArray,
		});

		const filter = (button => { return button.user.id === interaction.user.id || button.user.id === opponent.id; });
		const game = interaction.channel.createMessageComponentCollector({
			filter,
			componentType: 'BUTTON',
		});

		function update(win, who) {
			if(win === true) {
				game.stop();
				componentsArray[0].components[0].disabled = true;
				componentsArray[0].components[1].disabled = true;

				interaction.channel.send(`gg ${who.username} won`);
			}

			msg.edit({
				content: positions.first + '\n' + positions.second.join('') + '\n' + positions.third.join('') + '\n' + positions.fourth,
				components: componentsArray,
			});
		}

		game.on('collect', async button => {
			button.deferUpdate();
			for(let i = 0; i < speed; i++) {
				if(button.customId === blue && button.user.id === opponent.id) {
					data.second--;
					if(i === speed - 1) data.second === 0 ? update(true, opponent) : update();
					positions.third.shift();
				}
				else if(button.user.id === interaction.user.id && button.customId === red) {
					data.first--;
					if(i === speed - 1) data.first === 0 ? update(true, interaction.user) : update();
					positions.second.shift();
				}
			}
		});
    }
    
    }
    
}