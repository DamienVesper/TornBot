const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const weaponDatabase = require(`../databases/weapons.json`);

module.exports.run = async(client, message, args) => {
	// return message.channel.send(`${message.author} Command not available!`);
	let weaponName = args.join(` `);
	let weaponObj = weaponDatabase[weaponName];
	if(!weaponObj) return message.channel.send(`${message.author} That weapon does not exist!`);
	
	let sEmbed = new Discord.RichEmbed()
		.setTitle(weaponName])
		.setDescription(weaponObj[`description`])
		.addField(`Price`, weaponObj[`price`], true)
		.addField(`Damage`, weaponObj[`damage`], true)
		.addField(`Ammo`, weaponObj[`ammo`], true)
		.addBlankField()
		.addField(`Energy`, weaponObj[`energy`], true)
		.addField(`Range`, weaponObj[`range`], true)
		.addField(`Speed`, weaponObj[`speed`], true)
		.addBlankField()
		.addField(`Charge`, weaponObj[`charge`], true)
		.addField(`Level`, weaponObj[`level`], true)
		.addField(`Type`, weaponObj[`type`], true)
		.setFooter(config.footer);

	message.channel.send(sEmbed);
}

module.exports.config = {
  name: `weapon`
}