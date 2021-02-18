const log = require(`./log.js`);

module.exports = async (client, member, tornUser, tornUsers) => {
    log(`cyan`, `Updating roles for ${tornUser}.`);

    const curUser = tornUsers.find(user => user.username === tornUser);

    const placementRoles = [`453678967996678145`, `453678938275708960`, `453678890628546560`, `453678855534804992`, `453612904365948929`, `453620521632923660`, `453620581041045555`, `453620631116709888`, `453620675526000674`, `453620720581214208`];
    const teamRoles = [`513781861542002690`, `524288679473184806`, `633664409528565798`];
    const accountRoles = [`723239225855705198`];

    member.roles.forEach(role => (placementRoles.includes(role.id) || teamRoles.includes(role.id)) ? member.removeRole(role.id) : null);
    member.addRole(accountRoles[0]);

    setTimeout(() => {
        if (curUser.placement <= 5) member.addRole(placementRoles[9]);
        else if (curUser.placement <= 10) member.addRole(placementRoles[8]);
        else if (curUser.placement <= 25) member.addRole(placementRoles[7]);
        else if (curUser.placement <= 50) member.addRole(placementRoles[6]);
        else if (curUser.placement <= 75) member.addRole(placementRoles[5]);
        else if (curUser.placement <= 100) member.addRole(placementRoles[4]);
        else if (curUser.placement <= 250) member.addRole(placementRoles[3]);
        else if (curUser.placement <= 500) member.addRole(placementRoles[2]);
        else if (curUser.placement <= 750) member.addRole(placementRoles[1]);
        else if (curUser.placement <= 1000) member.addRole(placementRoles[0]);

        if (curUser.team === `Human`) member.addRole(teamRoles[0]);
        else if (curUser.team === `Alien`) member.addRole(teamRoles[1]);
        else member.addRole(teamRoles[2]);

        log(`blue`, `Roles updated for ${tornUser}.`);
    }, 2e3);
};
