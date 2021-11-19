# Welcome to Aspect!
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)

### Aspect is an open source game, meme and imgen discord bot.

# Hosting:
## Local Hosting:
First, download the code. Click on the `Code` button (on this page), then click download as zip. Extract the files, and them to a new folder. Next, add yur config file. Name it config.json and put the following code in it:
```json
{
	"clientId": "your-client-id",
	"guildId": "the-id-of-the-server-that-you-want-to-have-slash-commands",
	"token": "your-token"
}
```
All the information can be found at https://discord.com/developers/applications.

Next open your console:

FOR MAC USERS: enter your terminal, then type `cd <your folder>
open .` (replace `<your folder>` with the name of your folder)

FOR WINDOWS USERS: open the folder, click file, then click open windows powershell.

Run: `npm install`. This will install all the packages. You can also run the `npm i @discordjs/rest discord-api-types @discordjs/builders util discord-together https discordjs-activity @discordjs/voice`, which does the smae thing but installs each package individually. After that, run `node deploy-commands.js`. This will deploy the commands to Discord. Finally, run `node index,js`. If everything works, it should say: ```
ready
online```.

You can join the support server for more help:
![](https://discord.com/widget?id=821084643431415818&theme=dark)
