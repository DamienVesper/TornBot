const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `help`,
    description: `View help menu.`,
    usage: null
}

module.exports.run = async (client, message, args) => {
    let sEmbed = new Discord.RichEmbed()
        .setAuthor(`Help Menu`, message.author.avatarURL)
        .addField(`Accounts`, `
            \`${config.prefix}ship\` \`[rank]\` - View ships.
            \`${config.prefix}weapon\` \`[name]\` - View weapons.
            \`${config.prefix}link\` \`[username]\` - Link your Torn account to Discord.
            \`${config.prefix}unlink\` - Unlink your Torn account from Discord.
            \`${config.prefix}search\` \`[user]\` - Search the index for users.
            \`${config.prefix}stats\` \`<user>\` - View the stats of a user.
            \`${config.prefix}balance\` \`[user]\` - View the balance of a user.
        `)
        .addField(`Moderation`, `
            \`${config.prefix}ban\` \`<user>\` - Ban a user.
            \`${config.prefix}kick\` \`<user>\`- Kick a user.
        `)
        .addField(`Miscellaneous`, `
            \`${config.prefix}wiki\` - View the wiki.
            \`${config.prefix}help\` - This command.
        `)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
}