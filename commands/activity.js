//const discordTogether = require('../modules/activities.js')
const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: "activity",
    description: "Watch YouTube with friends, play chess, doodle, betryal.io and so many more games!",

    data: new SlashCommandBuilder()
        .setName('activity')
        .setDescription('Watch YouTube with friends, play chess, doodle, betryal.io and so many more games! Only 💻.')
        .addChannelOption(option => 
                    option.setName('channel')
                    .setDescription('Where to play? SELECT A VOICE CHANNEL')
                    .setRequired(true))
        .addStringOption(option =>
            option.setName('activity')
            .setDescription('What to play?')
            .setRequired(true)
            .addChoice('YouTube Together', 'youtube')
            .addChoice('Poker', 'poker')
            .addChoice('betrayal.io', 'betrayal')
            .addChoice('Fishington', 'fishy')
            .addChoice('Letter Tile', 'letter')
            .addChoice('Words Snack', 'snack')
            .addChoice('Doodle Crew', 'doodle')
            .addChoice('SpellCast', 'spell')
            .addChoice('Awkword', 'awk')
            .addChoice('chess', 'chess')),


    async execute(interaction, client) {

        const choice = interaction.options.getString('activity');
const channel = interaction.options.getChannel('channel').id;
        
        
        if (choice === "betrayal") {
                client.discordTogether.createTogetherCode(channel, 'betrayal').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Betrayal.io')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Are u the imposter :eyes:? **[${require('../messages.json').activity_clickhere}](${invite.code})**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "poker") {
                client.discordTogether.createTogetherCode(channel, 'poker').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Poker')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Get your money and **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };

        if (choice === "youtube") {
                client.discordTogether.createTogetherCode(channel, 'youtube').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('YouTube Together')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Get the party started and **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "chess") {
                client.discordTogether.createTogetherCode(channel, 'chess').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Chess in da Park')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Are you good at chess? **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "fishy") {
                client.discordTogether.createTogetherCode(channel, 'fishing').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Fishington')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Save me some fish please! **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "letter") {
                client.discordTogether.createTogetherCode(channel, 'lettertile').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Letter Tile')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Letters, letters. **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "snack") {
                client.discordTogether.createTogetherCode(channel, 'wordsnack').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Words Snack')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Yum! **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "doodle") {
                client.discordTogether.createTogetherCode(channel, 'doodlecrew').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Doodle Crew')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Ready? Set. Draw! **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "spell") {
                client.discordTogether.createTogetherCode(channel, 'spellcast').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Spell Cast')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Spells galore => **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };
        

        if (choice === "awk") {
                client.discordTogether.createTogetherCode(channel, 'awkword').then(async invite => {
                    const betrayal = new Discord.MessageEmbed()
                        .setTitle('Awkword')
                        .setColor(require('../messages.json').embed_color)
                        .setTimestamp()
                        .setDescription(`Start already! **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
                    return interaction.reply({
                        embeds: [betrayal]
                    });


                });
            };

    },

};