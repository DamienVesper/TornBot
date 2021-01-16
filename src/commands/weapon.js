const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `weapon`,
    description: `View a weapon.`,
    usage: `[item]`
}

module.exports.run = async (client, message, args) => {
    const weapons = require(`../../config/weapons.json`);
    let weapon = weapons[args[0] === undefined ? 0 : args[0]];

    let sEmbed = new Discord.RichEmbed()
        .setAuthor(`${weapon.type} | ${weapon.name}`, message.author.avatarURL)
        .setColor(0xffa500)
        .setDescription(`
This weapon ${weapon.bot ? `seeks`: `does not seek`} other ships.

Damage: ${weapon.damage}
Price: ${weapon.price}
Charge: ${weapon.charge}

Range: ${weapon.range}
Speed: ${weapon.speed} 
`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
}