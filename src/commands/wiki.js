const Discord = require(`discord.js`);
const config = require(`../../config/config.js`);

module.exports = {
    desc: `View the wiki.`
};

module.exports.run = async (client, message, args) => {
    const sEmbed = new Discord.RichEmbed()
        .setColor(0x663399)
        .setAuthor(`Torn.Space Wiki`, message.author.avatarURL, `https://tornspace.fandom.com`)
        .setDescription(`Click [here](https://tornspace.fandom.com) to view the Torn.Space wiki.`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
};
