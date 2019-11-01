const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const axios = require(`axios`);
let { getTornUsers } = require(`../getTornUsers.js`);

module.exports.run = async(client, message, args) => {
	if(message.author.id != config.developerID) return message.channel.send(`${message.author} You can't use that!`);
	getTornUsers().then(tornUsers => {
		message.channel.send(`Forcing registration of ${message.guild.memberCount} users...`);
		message.guild.members.forEach(member => {
			let tornUser = member.displayName.toLowerCase();
			let tornUserObj = tornUsers[tornUser];
			if(!tornUserObj) return console.log(`${member.user.id} is either not ranked yet or doesn't exist!`);

			axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${member.user.id}`).then(res => {
				if(res.data[`result`]) return console.log(`${member.user.id} is already registered.`);

				axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/authorizedUsers/${tornUser}`).then(res => {
					if(res.data[`result`]) return console.log(`${member.user.id} failed to register to an account as it was in use.`);
					
					axios.post(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${member.user.id}`, {
						tornUsername: `${tornUser}`
					}).then(res => {
						console.log(`Succesfully registered user \`${member.user.id}\` to account \`${tornUser}\`.`);
	
						axios.post(`https://www.jsonstore.io/${config.jsonstoreToken}/authorizedUsers/${tornUser}`, {
							user: `${member.user.id}`
						});
					});
				});
			});
		});
	});
}

module.exports.config = {
  name: `forceregister`
}