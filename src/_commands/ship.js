const Discord = require(`discord.js`);
const config = require(`../../config/config.js`);

module.exports = {
    name: `ship`,
    description: `View ship stats.`,
    usage: `<rank>`
};

module.exports.run = async (client, message, args) => {
    const ships = require(`../../config/ships.json`);

    const ship = ships[args[0]];
    if (!ship) return message.channel.send(`${message.author} That rank doesn't exist!`);

    const sEmbed = new Discord.RichEmbed()
        .setAuthor(`Ships | Rank ${args[0]}`, message.author.avatarURL)
        .setColor(0xffa500)
        .setDescription(`
            Health: ${ship.health}
            Price: ${ship.price}
            Weapon Slots: ${ship.weapons}

            Thrust: ${ship.thrust}
            Agility: ${ship.agility}
            Cargo: ${ship.capacity}
        `)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
};
