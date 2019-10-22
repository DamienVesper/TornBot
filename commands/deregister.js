const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const axios = require(`axios`);
const webRequest = require(`request`);

module.exports.run = async(client, message, args) => {
	if(message.author.id == `182205823395692546` 
	|| message.author.id == `422035078504382464` 
	|| message.author.id == `312983344910565376` 
	|| message.author.id == `407149399442063361`) return message.channel.send(`${message.author} You can't use that!`); 
	let tornUser = args.join(` `);
	webRequest(`https://torn.space/leaderboard/`, (err, res, body) => {
		if(!err) {
			let tableInfo = body.split(`</tr>`);
			var tableData = [];

			for(let i = 1; i < tableInfo.length - 1; i++) {
				tableData.push(tableInfo[i].split(`</th>`));
			}

			var rawTornUsers = {};
			for(let i = 0; i < tableData.length; i++) {
				let newRawTornUser = tableData[i].slice(`,`);
				rawTornUsers[`account${i}`] = newRawTornUser;
			}

			var tornUsers = {};
			for(let i = 0; i < tableData.length; i++) {

				//Init User Vars
				let currentUser = `${rawTornUsers[`account${i}`][1].slice(4)}`;
				let oldUser = rawTornUsers[`account${i}`];
				tornUsers[currentUser] = {};

				//Get User Stats
				tornUsers[currentUser].position = parseInt(`${oldUser[0].slice(28, rawTornUsers[`account${i}`][0].length - 1)}`);
				tornUsers[currentUser].rank = parseInt(`${oldUser[3].slice(4)}`);
				tornUsers[currentUser].xp = parseInt(`${oldUser[2].slice(4)}`);
				tornUsers[currentUser].kills = parseInt(`${oldUser[4].slice(4)}`);
			//	tornUsers[currentUser].accountType = oldUser[5];

				//Determine User's Side
				if(oldUser[0].slice(17, 21) == `cyan`) tornUsers[currentUser].side = `Human`;
				else if(oldUser[0].slice(17, 21) == `pink`) tornUsers[currentUser].side = `Alien`;
				else if(oldUser[0].slice(17, 21) == `lime`) tornUsers[currentUser].side = `Moderation`;
				else console.log(`Could not determine user's team side! ${oldUser}`);
			}
		}
		else console.log(err);

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
	});
}

module.exports.config = {
  name: `deregister`
}