const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const jsonstore = require(`jsonstore.io`);
const weaponDatabase = require(`../databases/weapons.json`);

module.exports.run = async(client, message, args) => {
	let weaponName = args[0];
	let sEmbed = new Discord.RichEmbed();
}

module.exports.config = {
  name: `weapon`
}