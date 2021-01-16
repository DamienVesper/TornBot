const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
  config
} = require(`../index.js`);

module.exports = {
  name: `search`,
  description: `Search for a user.`,
  usage: `<user>`
}

module.exports.run = async (client, message, args) => {
  const tornUsers = await require(`../api.js`);

  const dbUser = await User.findOne({
    accountName: args[0]
  });

  let tornUser = args[0];
  if (typeof tornUser != `string`) return message.channel.send(`${message.author} TornUser must be a string!`);
  tornUser = tornUser.toString().toLowerCase();

  let tornUserObj = tornUsers[tornUser];
  if (!tornUserObj) return message.channel.send(`${message.author} That user is either not ranked yet or doesn't exist!`);

  let sEmbed = new Discord.RichEmbed()
    .setAuthor(`#${tornUserObj.placement} | ${tornUserObj.displayName}`, client.user.avatarURL)
    .setColor(tornUserObj.team == `Green` ? 0xbfff00 : tornUserObj.team == `Alien` ? 0xffc0cb : tornUserObj.team == `Human` ? 0x00b7eb : 0x00000)
    .setDescription(`${dbUser ? `Owned by ${message.guild.members.get(dbUser.discordID)}.`: `This account has not been claimed yet!`}
        
            **Rank**: ${tornUserObj.rank}
            **Experience**: ${tornUserObj.experience}
            **Kills**: ${tornUserObj.kills}

            **Money**:  ${tornUserObj.money}
            **Tech**: ${tornUserObj.tech}
        `)
    .setTimestamp(new Date())
    .setFooter(config.footer);
  message.channel.send(sEmbed);
}