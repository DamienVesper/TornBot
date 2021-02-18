const Discord = require(`discord.js`);
const config = require(`../../config/config.js`);
const weapons = require(`../../config/weapons.json`);

module.exports = {
    desc: `View a weapon.`,
    usage: `<item>`
};

module.exports.run = async (client, message, args) => {
    const weapon = weapons[args[0] || 0];

    const sEmbed = new Discord.RichEmbed()
        .setAuthor(`${weapon.type} | ${weapon.name}`, message.author.avatarURL)
        .setColor(0xffa500)
        .setDescription(`
This weapon ${weapon.bot ? `seeks` : `does not seek`} other ships.

Damage: ${weapon.damage}
Price: ${weapon.price}
Charge: ${weapon.charge}

Range: ${weapon.range}
Speed: ${weapon.speed} 
`)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
};
