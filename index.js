const Discord = require(`discord.js`);
const Math = require(`math.js`);
const JSON = require(`json`);
const $ = require(`jquery`);

let replServer = require(`./serverCreate.js`);

let client = new Discord.Client();

var config = {
	prefix: `t.`,
	devUsername: `DamienVesper`,
	devDiscriminator: `4927`,
	alphaUsername: `DamienVesper YT`,
	alphaDiscriminator: `5698`,
	token: process.env.DISCORD_BOT_TOKEN
}

client.on(`ready`, () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`${config.prefix}help | ${client.guilds.size} servers | ${client.users.size} players`);
});
client.on(`guildCreate`, guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`${config.prefix}help | ${client.guilds.size} servers | ${client.users.size} players`);
});
client.on(`guildDelete`, guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`${config.prefix}help | ${client.guilds.size} servers | ${client.users.size} players`);
});
client.on(`guildMemberAdd`, member => {
  member.guild.channels.get(`564930384861855754`).send({
		"embed": {
			"title": "Welcome!",
			"description": `<@${member.id}>, welcome to the server! \nThere are now **${member.guild.memberCount}** members.`,
			"timestamp": new Date(),
			"footer": {
				"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
				"text": "© DamienVesper 2019"
			},
			"thumbnail": {
				"url": `${member.user.avatarURL}`
			}
		}
	});
});
client.on(`guildMemberRemove`, member => {
  member.guild.channels.get(`564930384861855754`).send({
		"embed": {
			"title": "Leave...",
			"description": `<@${member.id}> has just left the server. :cry: \nThere are now **${member.guild.memberCount}** members.`,
			"timestamp": new Date(),
			"footer": {
				"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
				"text": "© DamienVesper 2019"
			},
			"thumbnail": {
				"url": `${member.user.avatarURL}`
			}
		}
	}); 
});
//Declare Cache
/*var cache = {
	twitch: {
		profile: $.getJSON(`https://api.twitch.tv/helix/users?login=trainergabe`)
	}
}
//Update Cache
setInterval(function() {
	cache.twitch.profile = $.getJSON(`https://api.twitch.tv/helix/users?login=trainergabe`);
}, 600000);*/

client.on(`message`, async message => {
	if(message.author.bot) return;
	if(message.content.slice(0, config.prefix.length) != config.prefix) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

	//Dev Commands
	if(message.author.username.toString().toLowerCase() == config.devUsername.toLowerCase() && message.author.discriminator.toString().toLowerCase() == config.devDiscriminator.toLowerCase() && command == `dev`) {
		let subCommand = args[0];
		if(!subCommand) return message.channel.send(`Please specify a subcommand.`);
		else if(subCommand == ``) return message.channel.send(`Please don't use a blank subcommand.`);
		else if(subCommand == `ping`) return;
		else if(subCommand == `shudown`) {
			message.channel.send(`Shutting down ${client.username}...`);
			return client.destroy();
		}
		else if(command == `restart`) {
			message.channel.send(`Restarting ${client.username}...`);
			client.destroy();
			return client.login(config.token);
		}
		else if(subCommand == `codebase`) return message.reply(`https://repl.it/@DamienVesper/TrainerBot`);
		//else if(subCommand == ``) {}
	}
	//Alpha | VIP Commands
	if(message.author.username.toString().toLowerCase() == config.alphaUsername.toLowerCase() && message.author.discriminator.toString().toLowerCase() == config.alphaDiscriminator.toLowerCase() && command == `vip`) {
		let subCommand = args[0];
		if(!subCommand) return message.channel.send(`Please specify a subcommand.`);
		else if(subCommand == ``) return message.channel.send(`Please don't use a blank subcommand.`);
		else if(subCommand == ``) {}
		else if(subCommand == ``) {}
		else if(subCommand == ``) {}
		else if(subCommand == ``) {}
		else if(subCommand == ``) {}
		else if(subCommand == ``) {}
	}

	//Regular Commands
	if(command == ``) return message.channel.send(`Please don't use a blank command.`);
	//else if(command == `help`) {}
	
	//Gabe's Social 
	//else if(command == `social`) {}
	else if(command == `twitch`) return message.reply(`Here is TrainerGabe's twitch: https://twitch.tv/trainergabe/`);
	else if(command == `yt` || command == `youtube`) return message.reply(`Here is TrainerGabe's youtube: https://www.youtube.com/channel/UCSgf08iZwdRRH51aEKYCsZw/.`);
	else if(command == ``) {}
	else if(command == ``) {}
	else if(command == ``) {}

	//Custom Commands
	/*else if(command == `poll`) {
		message.react(`✅`)
			.then(() => message.react(`❌`))
			.catch(() => console.error('One of the emojis failed to react.'));
	}*/
	//else if(command == ``) {}
});
client.login(config.token);
