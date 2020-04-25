const Discord = require(`discord.js`);
const axios = require(`axios`);
const { config } = require(`../index.js`);
let { getTornUsers } = require(`../getTornUsers.js`);

module.exports.run = async(client, message, args) => {
	let tornUser = args[0];

	let tornUserObj = tornUsers[tornUser];
	if(!tornUserObj) return message.channel.send(`${message.author} That user is either not ranked yet or doesn't exist!`);

	axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${message.author.id}`).then(res => {
		if(res.data[`result`]) return message.channel.send(`${message.author} You are already registered! Please do \`${config.prefix}deregister\` to unlink your Torn.Space account.`);

		axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/authorizedUsers/${tornUser}`).then(res => {
			if(res.data[`result`]) return message.channel.send(`${message.author} That account has already been registered!`);
			axios.post(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${message.author.id}`, {
				tornUsername: `${tornUser}`
			}).then(res => {
				console.log(`Succesfully registered user \`${message.author.id}\` to account \`${tornUser}\`.`)
				message.channel.send(`Succesfully registered user \`${message.author.id}\` to account \`${tornUser}\`.`);
				
				axios.post(`https://www.jsonstore.io/${config.jsonstoreToken}/authorizedUsers/${tornUser}`, {
					user: `${message.author.id}`
				});
			});
		});
	}).catch(err => {
		console.log(err);
		message.channel.send(`${message.author} Failed to register you because of: ${err}.`);
	});
}

module.exports.config = {
  name: `register`
}