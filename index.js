/* Network-Installed Dependencies */
const Discord = require(`discord.js`);
const Math = require(`math.js`);
const JSON = require(`json`);
const $ = require(`jquery`);
const jsonstore = require(`jsonstore.io`);
const http = require(`http`);
const https = require(`https`);
const fs = require(`fs`);
const getJSON = require(`get-json`);
let webRequest = require(`request`);

/* Local Dependencies */
const bus = require(`./messageBus.js`);
const nodeServer = require(`./nodeServer.js`);

/* Cooldown Setup */
let cooldown = new Set();
let cdseconds = 3;
let serverID = null;

/* Client Config */
let client = new Discord.Client({ disableEveryone: true });
var config = {
	developer: `DamienVesper`,
	developerTag: `#4927`,
	developerID: null,
	prefix: `!`,
	token: process.env.DISCORD_BOT_TOKEN,
	jsonstoreToken: process.env.JSONSTORE_TOKEN,
	version: `0.1.1`,
	footer: `© Torn.Space 2019 | Failed to load version.`,
	databases: {
		ships: require(`./databases/ships.json`),
		weapons: require(`./databases/weapons.json`)
	}
}
config.footer = `© Torn.Space 2019 | v${config.version}`
module.exports = { config };

/* Client Events */
client.on(`ready`, async () => {
		console.log(`${client.user.username}#${client.user.discriminator} has started, with ${client.users.size} users in ${client.guilds.size} servers.`);
		client.user.setActivity(`Torn.Space`);
		refreshActivity();
});

/* Other Client Events */
let memberJoin = require(`./clientEvents/memberJoin.js`);
let memberLeave = require(`./clientEvents/memberLeave.js`);

/* Client Commands */
client.commands = new Discord.Collection();
fs.readdir(`./commands/`, (err, files) => {
		if(err) console.error(err);

		let jsfiles = files.filter(f => f.split(`.`).pop() == `js`);
		if(jsfiles.length <= 0) {
			console.log(`No commands to load!`);
			return;
		}

		/* Load Commands */
		console.log(`Loading ${jsfiles.length} command(s)!`);
		jsfiles.forEach((f, i) => {
				let props = require(`./commands/${f}`);
				console.log(`${i + 1}: ${f} loaded!`);
				client.commands.set(props.config.name, props);
		});
});

/* Client Checks */
function refreshActivity() {
	let botGame = `Torn.Space`;
	let memberCount = 0;//client.guilds.get(``).memberCount;
	client.user.setPresence({
			game: { 
					name: `${memberCount} users on ${botGame}.`,
					type: `WATCHING`
			},
			status: `dnd`
	});
}

client.on(`guildMemberAdd`, async () => refreshActivity());
client.on(`guildMemberRemove`, async () => refreshActivity());

client.on(`guildMemberAdd`, member => bus.emit(`guildMemberAdd`, member));
client.on(`guildMemberAdd`, member => bus.emit(`guildMemberRemove`, member));


client.on(`message`, async message => {
	/* Botception & Message Handling */
	if(message.channel.name != `bots` && message.channel.name != `bot-commands`) return;
	if(message.author.bot || message.channel.type == `dm`) return;

	/* Get Commands & Arguments */
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(cooldown.has(message.author.id)) {
		let warningMessage = message.channel.send(`You must wait before you can use another command.`).then(() => {
			setTimeout(() => {
				warningMessage.delete();
			}, 1000);
		});
	}
	if(!message.member.hasPermission(`ADMINISTRATOR`)) {
		if(message.member.id != `${config.developerID}`) {
			cooldown.add(message.author.id);
		}
	}
	/* Delete Cooldowns */
	setTimeout(() => {
		cooldown.delete(message.author.id);
	}, cdseconds * 1000);

	console.log(command);
  let cmd = client.commands.get(command); //console.log(cmd);
	if(cmd) cmd.run(client, message, args);
});

client.login(config.token);