const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const axios = require(`axios`);
let { getTornUsers } = require(`../getTornUsers.js`);

module.exports.run = async(client, message, args) => {
	let tornUser = args[0];
	axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${message.author.id}`).then(res => { 
		if(!res.data[`result`]) return message.channel.send(`${message.author} You are not registered! Please do \`${config.prefix}register\` to register your account.`);
		
		axios.delete(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${message.author.id}`, {
			tornUsername: `${tornUser}`
		}).then(res => {
			console.log(`Succesfully deregistered user \`${message.author.id}\` from account.`)
			message.channel.send(`Succesfully deregistered user \`${message.author.id}\` from account.`);
		}).catch(err => {
			console.log(err);
			message.channel.send(`${message.author} Failed to deregister you because of: ${err}.`);
		});			
		axios.delete(`https://www.jsonstore.io/${config.jsonstoreToken}/authorizedUsers/${tornUser}`, {
			user: `${message.author.id}`
		});				
	});
}

module.exports.config = {
  name: `deregister`
}