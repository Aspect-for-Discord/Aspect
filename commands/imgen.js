
const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);


module.exports = {
        name: "imgen",
    description: "Generate cool images based on memes!",
	data: new SlashCommandBuilder()
		.setName('imgen')
		.setDescription('Generate an image based on a meme')
      .addStringOption(option =>
            option.setName('type')
            .setDescription('What to generate?')
            .setRequired(true)
            .addChoice('gun', 'gun')
            .addChoice('mask', 'mask')
            .addChoice('worship', 'worship')
            .addChoice('rifleshoot', 'rifle')
            .addChoice('robert', 'robert'))
    .addStringOption(option =>
                    option.setName('url')
                    .setDescription('Optional: image url')),


    async execute(interaction) {
        const choice = interaction.options.getString('type');
        const opt = interaction.options.getString('url');

		let url = ""
		if(choice === "gun") {
			url = "https://api.weky.xyz/canvas/gun?image="
		} else if(choice === "mask") {
			url = "https://api.weky.xyz/canvas/mask?image="
		} else if(choice === "worship") {
			url = "https://api.weky.xyz/canvas/pray?image="
		}  else if(choice === "rifle") {
			url = "https://api.weky.xyz/canvas/gun?rifle="
		} else if(choice === "robert") {
			url = "https://api.weky.xyz/canvas/robert?image="
		};
        let img = ""
        if(!opt) {
            img = url+interaction.user.displayAvatarURL({format: 'jpg'})
        } else if(opt) {
            img = url+opt
        }
		await interaction.reply({content : img});
        		await wait(1000);

await interaction.followUp({ content: '<a:loader:907841354623766528> If the image hasn\'t already loaded, please wait a minute or so.', ephemeral: true });
	}
    
}