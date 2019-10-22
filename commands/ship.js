const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const shipDatabase = require(`../databases/ships.json`);

module.exports.run = async(client, message, args) => {
	let shipRank = args[0];
	if(!shipRank) return message.channel.send(`${message.author} Please identify the ship by its respective rank!`);
	else {
		let shipID = shipRank;
		let shipInfo = shipDatabase[shipRank];

		let sEmbed = new Discord.RichEmbed()
		.setColor(`#f4d35e`)
		.setTitle(`${shipInfo[`nameR`]} / ${shipInfo[`nameB`]}`)
		.setDescription(`The rank ${shipRank} ship in Torn.Space.`)
		.addField(`Health`, shipInfo[`health`], true)
		.addField(`Thrust`, shipInfo[`thrust`], true)
		.addField(`Agility`, shipInfo[`agility`], true)
		.addBlankField()
		.addField(`Cargo`, shipInfo[`capacity`], true)
		.addField(`Price`, shipInfo[`price`], true)
		.addField(`Weapons`, shipInfo[`weapons`], true)
		.setFooter(config.footer);
		
		message.channel.send(sEmbed);
	}
}

module.exports.config = {
  name: `ship`
}