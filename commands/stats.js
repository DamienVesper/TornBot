const Discord = require(`discord.js`);
const axios = require(`axios`);
const { config } = require(`../index.js`);
const { getTornUsers } = require(`../mainFunctions/getTornUsers.js`)l;

module.exports.run = async(client, message, args) => {
	var requestedUser;
	var tornUser = message.mentions.members.first();
	if(!tornUser && args[0]) {
		tornUser = {
			id: args[0]
		}
	}
	else tornUser = message.author;

	axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${tornUser.id}`).then(res => {
		if(!res.data[`result`]) return message.channel.send(`${message.author} The requested user is not registered!`);
		requestedUser = res.data[`result`][`tornUsername`];		
	}).catch(err => {
		console.log(err);
	}); 
	
	setTimeout(() => {
		getTornUsers().then(tornUsers => {
			//Get Stats
			let tornUserObj = tornUsers[requestedUser];
			if(!tornUserObj) return message.channel.send(`${message.author} That user is either not ranked yet or doesn't exist!`);
			
			//Send Stats
			let sEmbed = new Discord.RichEmbed()
				.setTitle(`Player Stats | ${requestedUser}`)
				.addField(`Placement`, tornUserObj.position, true)
				.addField(`Side`, tornUserObj.team, true)
				.addField(`Rank`, tornUserObj.rank, true)
				.addBlankField()
				.addField(`Experience`, tornUserObj.xp, true)
				.addField(`Kills`, tornUserObj.kills, true)
				.addField(`Account Type`. tornUserObj.accountType, true)
				/* .addBlankField()
				.addField(`Money`. tornUserObj.liquidValue, true)
				.addField(`Tech`. tornUserObj.tech, true) */
				.setTimestamp(new Date())
				.setFooter(config.footer);
				
			message.channel.send(sEmbed);
		});
	}, 500);
}

module.exports.config = {
  name: `stats`
}