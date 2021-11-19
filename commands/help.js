const { SlashCommandBuilder } = require('@discordjs/builders');
const ms = require('ms');
const fs = require('fs');
const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");


module.exports = {
        name: "help",
    description: "This command :D",
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Help command')
    .addStringOption(option =>
                     option.setName('command')
                     .setDescription('If you know what command your looking for.')),

    async execute(interaction, client) {
    let commandInfo = await interaction.options.getString("command")

    if (commandInfo) {
      let cmd = client.commands.get(commandInfo);

      if (!cmd) {
        return interaction.reply("Couldn't find that command!")
      } else if (cmd) {
        let description = cmd.description ? cmd.description : "No description available.";

        let helpEmbed = new MessageEmbed()
        .setTitle(`Help for **\`${cmd.name}\`**`)
        .addField("Name", `\`${cmd.name}\``, true)
        .addField("Description", `\`${description}\``, true)
        .setColor("GREEN")

        return interaction.reply({ embeds: [helpEmbed], ephemeral: true });
      }
    } else {

      let cmd = client.commands;

    let helpEmbed = new MessageEmbed()
    .setTitle('Help Menu')
    .setDescription('Commands:')
        .setColor("GREEN")

    cmd.forEach(cmd => {
    helpEmbed.addField(`**\`${cmd.name}\`**`, `\`${cmd.description}\``)
})

    interaction.reply({ embeds: [helpEmbed] })
    }
  }
};


	
    
