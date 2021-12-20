const axios = require("axios");

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
        name: "insult",
    description: "Insult someone",
	data: new SlashCommandBuilder()
		.setName('insult')
		.setDescription('Insult someone')
    .addUserOption(option =>
    option.setName('person')
    .setRequired(true)
    .setDescription('Who to insult?')),

    async execute(interaction) {
            const who = interaction.options.getUser('person');

      	const urlt = 'https://insult.mattbas.org/api/insult.json?who=' + who.tag;


  
interaction.reply({content: 'Coming soon :eyes: ...', ephemeral: true})
	}
    
}