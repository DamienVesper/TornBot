const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const { config } = require(`../index.js`);

module.exports = {
    name: `wiki`,
    description: `View the wiki.`,
    usage: null
}

module.exports.run = async(client, message, args) => {
    let sEmbed = new Discord.RichEmbed()
        .setColor(0x663399)
        .setAuthor(`Torn.Space Wiki`, message.author.avatarURL, `https://tornspace.wikia.com/`)
        .setDescription(`A wiki run by <@422035078504382464> and <@377761651220283392> about [Torn.Space](https://torn.space/).`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
}