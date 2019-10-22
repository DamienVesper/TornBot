const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const webRequest = require(`request`);
const axios = require(`axios`);

module.exports.run = async(client, message, args) => {
	var requestedUser;
	var tornUser = message.mentions.members.first();
	if(!tornUser && args[0]) {
		tornUser = {
			id: args[0]
		}
	}
	else tornUser = message.author;

	//Special Accounts
	if(tornUser.id == `182205823395692546`) requestedUser = `[O] 2swap`;
	else if(tornUser.id == `422035078504382464`) requestedUser = `[M] tardis`;
	else if(tornUser.id == `312983344910565376`) requestedUser = `[M] 24sans24`;
	else if(tornUser.id == `407149399442063361`) requestedUser = `[M] luunch`;
	else {
		axios.get(`https://www.jsonstore.io/${config.jsonstoreToken}/users/${tornUser.id}`).then(res => {
			if(!res.data[`result`]) return message.channel.send(`${message.author} The requested user is not registered!`);
			requestedUser = res.data[`result`][`tornUsername`];		
		}).catch(err => {
			console.log(err);
		}); 
	}
	
	setTimeout(() => {
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
			
			//Get Stats
			let tornUserObj = tornUsers[requestedUser];
			if(!tornUserObj) return message.channel.send(`${message.author} That user is either not ranked yet or doesn't exist!`);
			
			//Send Stats
			let sEmbed = new Discord.RichEmbed()
				.setTitle(`Player Stats | ${requestedUser}`)
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
	}, 500);
}

module.exports.config = {
  name: `stats`
}