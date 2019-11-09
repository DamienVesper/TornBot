const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const axios = require(`axios`);
let { getTornUsers } = require(`../getTornUsers.js`);


module.exports.run = async (client, message, args) => {
	let tornUser = args[0];
	getTornUsers().then(tornUsers => {
		let tornUserObj = tornUsers[tornUser];
		if(!tornUserObj) return message.channel.send(`${message.author} That user is either not ranked yet or doesn't exist!`);

		let sEmbed = new Discord.RichEmbed()
			.setTitle(`Player Info | ${tornUser}`)
			.addField(`Placement`, tornUserObj.position, true)
			.addField(`Side`, tornUserObj.side, true)
			.addField(`Rank`, tornUserObj.rank, true)
			.addBlankField()
			.addField(`Experience`, tornUserObj.xp, true)
			.addField(`Kills`, tornUserObj.kills, true)
			//.addField(`Account Type`. tornUserObj.accountType, true)
			.setTimestamp(new Date())
			.setFooter(config.footer);
		
		message.channel.send(sEmbed);
	});
}

module.exports.config = {
	name: `search`
}