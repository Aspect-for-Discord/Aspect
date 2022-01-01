console.log("NodeJS Version: " + process.version)
const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');
 
const mySecret = process.env['TOKEN']
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { loadCommands } = require("./handler/loadCommands");

const { token } = require('./config.json');
const { clientId, guildId } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.commands = new Collection();
loadCommands(client);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.once('ready', async () => {
	console.log('Ready!');
   client.user.setActivity(`/help`, {
  type: "LISTENING",
});
    

});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, client)
    await command
	} catch (error) {
		console.error(error)
        const join = new MessageActionRow()
        			.addComponents(

          new MessageButton()
					.setLabel('Join server!')
					.setStyle('LINK')
                	.setURL('https://discord.gg/Fkjgn8WsyH'),
        );
		return interaction.reply({ content: 'There was an error while executing this command!\n If you want, you can send the following error to our support server.\n```js\n'+ error + '```', ephemeral: true, components: [join] });
	}
    
});

   //web
   const fetch = require('node-fetch');

const express = require('express');
const {  port } = require('./config.json');
const clientSecret = process.env['SECRET']

const app = express();

app.get('/', async ({ query }, response) => {
	const { code } = query;

	if (code) {
		try {
			const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: clientId,
					client_secret: clientSecret,
					code,
					grant_type: 'authorization_code',
					redirect_uri: `https://aspect.sdmdevelopment.repl.co/`,
					scope: 'identify',
				}),
				headers: {
					'Content-Type': 'Bot application/x-www-form-urlencoded',
				},
			});

			const oauthData = await oauthResult.json();

const userResult = await fetch('https://discord.com/api/users/@me', {
	headers: {
		authorization: `Bot ${oauthData.token_type} ${oauthData.access_token}`,
	},
});

			console.log(await userResult.json());
		} catch (error) {
			// NOTE: An unauthorized token will not throw an error;
			// it will return a 401 Unauthorized response in the try block above
			console.error(error);
		}
	}

	return response.sendFile('index.html', { root: '.' });

});
app.get('/css/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "css/style.css");
});

app.get('/css/discord.css', function(req, res) {
  res.sendFile(__dirname + "/" + "css/discord.css");
});

app.get('/img/aspect-logo.png', function(req, res) {
  res.sendFile(__dirname + "/" + "img/aspect-logo.png");
});

app.get('/img/Discord-Logo-White.svg', function(req, res) {
  res.sendFile(__dirname + "/" + "img/Discord-Logo-White.svg");
});

app.get('/fonts/whitney-bold.woff', function(req, res) {
  res.sendFile(__dirname + "/" + "fonts/whitney-bold.woff");
});

app.get('/fonts/whitney.woff', function(req, res) {
  res.sendFile(__dirname + "/" + "fonts/whitney.woff");
});

app.get('/fonts/whitney-italic.woff', function(req, res) {
  res.sendFile(__dirname + "/" + "fonts/whitney-italic.woff");
});

app.get('/js/script.js', function(req, res) {
  res.sendFile(__dirname + "/" + "js/script.js");
});

app.get('/js/img-lazyload.js', function(req, res) {
  res.sendFile(__dirname + "/" + "js/img-lazyload.js");
});
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
client.login(mySecret);