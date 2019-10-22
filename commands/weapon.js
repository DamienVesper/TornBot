const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const weaponDatabase = require(`../databases/weapons.json`);

module.exports.run = async(client, message, args) => {
	return message.channel.send(`${message.author} Command not available!`);
	// let weaponName = args[0];
	// let sEmbed = new Discord.RichEmbed();
}

module.exports.config = {
  name: `weapon`
}