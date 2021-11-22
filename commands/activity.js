const messages = require("../messages.json")
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
        .addChoice('Fishington', 'fishing')
        .addChoice('Letter Tile', 'lettertile')
        .addChoice('Words Snack', 'wordsnack')
        .addChoice('Doodle Crew', 'doodlecrew')
        .addChoice('SpellCast', 'spellcast')
        .addChoice('Awkword', 'awkword')
                .addChoice('Checkers', 'checkers')

        .addChoice('Chess', 'chess')),


  async execute(interaction, client) {

    const choice = interaction.options.getString('activity');
    const channel = interaction.options.getChannel('channel').id;
    let game = ''
    let msg = ''


    if (choice === "betrayal") {
msg='Are u the imposter :eyes:?'

    } else     if (choice === "youtube") {
msg='YouTube is the biggest video streaming platform in the world.'

    }  else  if (choice === "chess") {
msg='A1 to B3. Wait, no. I mean yeah. No... UGH!!!!'

    }  else  if (choice === "checkers") {
msg='My grandma is good at this one :D'

    }  else  if (choice === "fishing") {
msg=':tropical_fish:   :fish:  :blowfish:   :fishing_pole_and_fish: '

    } else if (choice === "lettertile") {
msg='I\'m good at this one :)'

    } else     if (choice === "wordsnack") {
msg='Save a snack for me?'

    } else     if (choice === "doodlecrew") {
msg='Ready? Set. Draw!'

    } else     if (choice === "spellcast") {
msg='Spells galore =>'

    } else     if (choice === "awkword") {
msg='GOGOGOGOGO, and dont make it awkward (get it?)!'

    } else     if (choice === "puttparty") {
msg='This is so new we dont even know what to put here'

    }

    client.discordTogether.createTogetherCode(channel, choice).then(async invite => {
      const invitee = new Discord.MessageEmbed()
        .setTitle("Alright! Let's get the part started! 🎉")
        .setColor("BLACK")
        .setTimestamp()
        .setDescription(`${msg} **[${require('../messages.json').activity_clickhere}](${invite.code})!**`)
      return interaction.reply({
        embeds: [invitee]
      });


    })
  }
}
