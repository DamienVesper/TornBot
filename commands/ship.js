const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const jsonstore = require(`jsonstore.io`);
const shipDatabase = require(`../databases/ships.json`);

module.exports.run = async(client, message, args) => {
	let shipRank = args[0];
	if(!shipRank || typeof shipRank != `number`) return message.channel.send(`${message.author} Please identify the ship by its respective rank!`);
	else {
		let shipID = shipRank.toString();
		let shipInfo = shipDatabase[shipRank];

		let sEmbed = new Discord.RichEmbed()
		.setColor(`#f4d35e`)
		.setTitle(`${shipInfo[`nameH`]} / ${shipInfo[`nameA`]}`)
		.setDescription(`The rank ${shipRank} ship in Torn.Space.`)
		.addField(`Health`, shipInfo["health"], true)
		.addField(`Speed`, shipInfo["speed"], true)
		.addField(`Agility`, shipInfo["agility"], true);
	}
}

module.exports.config = {
  name: `ship`
}