const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const jsonstore = require(`jsonstore.io`);
const request = require(`request`);

module.exports.run = async(client, message, args) => {
	let tornUser = args[0];
	webRequest(`https://torn.space/leaderboard/`, (err, response, body) => {
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
				tornUsers[currentUser].rank = `${oldUser[3].slice(4)}`;
				tornUsers[currentUser].xp = `${oldUser[2].slice(4)}`;
				tornUsers[currentUser].kills = `${oldUser[4].slice(4)}`;

				//Determine User's Side
				if(oldUser[0].slice(17, 21) == `cyan`) tornUsers[currentUser].side = `Human`;
				else if(oldUser[0].slice(17, 21) == `pink`) tornUsers[currentUser].side = `Alien`;
				else if(oldUser[0].slice(17, 21) == `lime`) tornUsers[currentUser].side = `Moderator`;
				else console.log(`Could not determine user's team side! ${oldUser}`);
			}
		}
		else console.log(err);
	});
}

module.exports.config = {
  name: `update`
}