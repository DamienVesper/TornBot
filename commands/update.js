const Discord = require(`discord.js`);
const { config } = require(`../index.js`);
const axios = require(`axios`);
const webRequest = require(`request`);

module.exports.run = async(client, message, args) => {
	return message.channel.send(`${message.author} Command not available!`);
}

module.exports.config = {
  name: `update`
}