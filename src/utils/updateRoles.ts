import * as Discord from 'discord.js';
import { Client } from '../index';

import { log } from './log';
import { tornAccount } from './getTornUsers';

export const updateRoles = async (client: Client, member: Discord.GuildMember, tornUser: string, tornUsers: tornAccount[]) => {
    log(`cyan`, `Updating roles for ${tornUser}.`);

    const curUser = tornUsers.find(user => user.username === tornUser);

    const placementRoles = [`453678967996678145`, `453678938275708960`, `453678890628546560`, `453678855534804992`, `453612904365948929`, `453620521632923660`, `453620581041045555`, `453620631116709888`, `453620675526000674`, `453620720581214208`];
    const teamRoles = [`513781861542002690`, `524288679473184806`, `633664409528565798`];
    const accountRoles = [`723239225855705198`];

    for (const cachedRole of member.roles.cache) {
        const role = cachedRole[1];
        if (placementRoles.includes(role.id) || teamRoles.includes(role.id)) await member.roles.remove(role.id);
    }

    await member.roles.add(accountRoles[0]);

    setTimeout(async () => {
        if (curUser.placement <= 5) await member.roles.add(placementRoles[9]);
        else if (curUser.placement <= 10) await member.roles.add(placementRoles[8]);
        else if (curUser.placement <= 25) await member.roles.add(placementRoles[7]);
        else if (curUser.placement <= 50) await member.roles.add(placementRoles[6]);
        else if (curUser.placement <= 75) await member.roles.add(placementRoles[5]);
        else if (curUser.placement <= 100) await member.roles.add(placementRoles[4]);
        else if (curUser.placement <= 250) await member.roles.add(placementRoles[3]);
        else if (curUser.placement <= 500) await member.roles.add(placementRoles[2]);
        else if (curUser.placement <= 750) await member.roles.add(placementRoles[1]);
        else if (curUser.placement <= 1000) await member.roles.add(placementRoles[0]);

        await member.roles.add(teamRoles[curUser.team]);
        log(`blue`, `Roles updated for ${tornUser}.`);
    }, 5e3);
};