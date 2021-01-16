const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `leaderboard`,
    description: `View the top users in the leaderboard.`,
    usage: `<type>`
}

module.exports.run = async (client, message, args) => {
    const tornUsers = await require(`../api.js`);

    let lb = [];
    for (let i in tornUsers) {
        // console.log(tornUsers[i]);
        lb.push({
            balance: tornUsers[i].money,
            experience: tornUsers[i].experience,
            kills: tornUsers[i].kills,
            username: tornUsers[i].displayName,
            tech: tornUsers[i].tech
        });
    }

    switch (args[0]) {
        case `cash`:
            lb.sort((a, b) => (a.balance <= b.balance) ? 1 : -1);
            break;
        case `kills`:
            lb.sort((a, b) => (a.kills <= b.kills) ? 1 : -1);
            break;
        case `xp`:
            lb.sort((a, b) => (a.experience <= b.experience) ? 1 : -1);
            break;
        case `tech`:
            lb.sort((a, b) => (a.tech <= b.tech) ? 1 : -1);
            break;
        default:
            let xEmbed = new Discord.RichEmbed()
                .setAuthor(`Torn.Space Leaderboard`, message.author.avatarURL, `https://torn.space/leaderboard/`)
                .setColor(0xff0000)
                .setDescription(`
                    That is an invalid leaderboard type!
                    Valid leaderboard types include \`cash\`, \`kills\`, \`xp\`, and \`tech\`.
                `)
                .setTimestamp(new Date())
                .setFooter(config.footer);
            return message.channel.send(xEmbed);
    }

    let lbTxt = ``;
    for (let i = 0; i < 25; i++) {
        switch (args[0]) {
            case `cash`:
                lbTxt += `${i == 0 ? `🥇`: i == 1 ? `🥈`: i == 2 ? `🥉`: `🏅`} - ${lb[i].username} - ${lb[i].balance}\n`;
                break;
            case `kills`:
                lbTxt += `${i == 0 ? `🥇`: i == 1 ? `🥈`: i == 2 ? `🥉`: `🏅`} - ${lb[i].username} - ${lb[i].kills}\n`;
                break;
            case `xp`:
                lbTxt += `${i == 0 ? `🥇`: i == 1 ? `🥈`: i == 2 ? `🥉`: `🏅`} - ${lb[i].username} - ${lb[i].experience}\n`;
                break;
            case `tech`:
                lbTxt += `${i == 0 ? `🥇`: i == 1 ? `🥈`: i == 2 ? `🥉`: `🏅`} - ${lb[i].username} - ${lb[i].tech}\n`;
                break;
        }
    }

    let sEmbed = new Discord.RichEmbed()
        .setAuthor(`Torn.Space Leaderboard`, message.author.avatarURL, `https://torn.space/leaderboard/`)
        .setColor(0x1e90ff)
        .setDescription(lbTxt)
        .setTimestamp(new Date())
        .setFooter(config.footer);
    return message.channel.send(sEmbed);
}