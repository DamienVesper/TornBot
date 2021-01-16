const Discord = require(`discord.js`);
const User = require(`../models/user.model`);
const {
    config
} = require(`../index.js`);

module.exports = {
    name: `update`,
    description: `Update your roles.`,
    usage: null
}

module.exports.run = async (client, message, args) => {
    const tornUsers = await require(`../api.js`);

    const dbUser = await User.findOne({
        discordID: message.author.id
    });
    if (!dbUser) return message.channel.send(`${message.author} You don't have an account yet!`);

    let tornUserObj = tornUsers[dbUser.accountName];

    let placementRoles = [`453678967996678145`, `453678938275708960`, `453678890628546560`, `453678855534804992`, `453612904365948929`, `453620521632923660`, `453620581041045555`, `453620631116709888`, `453620675526000674`, `453620720581214208`];
    let teamRoles = [`513781861542002690`, `524288679473184806`, `633664409528565798`];
    let accountRoles = [`Player`, `488384379828043796`, `593291717394825218`, `Owner`];

    try {
        message.member.roles.forEach(role => (placementRoles.includes(role.id) || teamRoles.includes(role.id) || accountRoles.includes(role.id)) ? message.member.removeRole(role.id) : null);

        if (tornUserObj.placement <= 5) message.member.addRole(placementRoles[9]);
        else if (tornUserObj.placement <= 10) message.member.addRole(placementRoles[8]);
        else if (tornUserObj.placement <= 25) message.member.addRole(placementRoles[7]);
        else if (tornUserObj.placement <= 50) message.member.addRole(placementRoles[6]);
        else if (tornUserObj.placement <= 75) message.member.addRole(placementRoles[5]);
        else if (tornUserObj.placement <= 100) message.member.addRole(placementRoles[4]);
        else if (tornUserObj.placement <= 250) message.member.addRole(placementRoles[3]);
        else if (tornUserObj.placement <= 500) message.member.addRole(placementRoles[2]);
        else if (tornUserObj.placement <= 750) message.member.addRole(placementRoles[1]);
        else if (tornUserObj.placement <= 1000) message.member.addRole(placementRoles[0]);

        if (tornUserObj.team == `Human`) message.member.addRole(teamRoles[0]);
        else if (tornUserObj.team == `Alien`) message.member.addRole(teamRoles[1]);
        else message.member.addRole(teamRoles[2]);

        if (tornUserObj.accountType == `Player`) {} //message.member.addRole(accountRoles[0]);
        else if (tornUserObj.accountType == `VIP`) message.member.addRole(accountRoles[1]);
        else if (tornUserObj.accountType == `Moderator`) message.member.addRole(accountRoles[2])
        // else if(tornUserObj.accountType == `Administrator`) message.member.addRole(accountRoles[3]);
        // else message.member.addRole(accountRoles[3]);
    } catch (err) {
        console.error(err);
        return message.channel.send(`${message.author} There was an error executing that command. Please notify a developer.`);
    } finally {
        message.channel.send(`${message.author} Succesfully updated your roles.`);
    }
}