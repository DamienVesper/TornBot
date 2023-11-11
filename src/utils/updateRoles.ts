import type { GuildMember } from 'discord.js';

import log from './log';

import type { TornAccount } from '../typings/accounts';
import config from '../../config/config';

/**
 * Update the roles of a member.
 * @param member The member to update.
 * @param tornUser The torn account of the member.
 * @param tornUsers The map of cached torn users.
 */
const updateRoles = async (member: GuildMember, tornUser: string, tornUsers: Map<string, TornAccount>): Promise<void> => {
    log(`cyan`, `Updating roles for ${tornUser}.`);

    const curUser = tornUsers.get(tornUser);
    if (curUser === undefined) return;

    const placementRoles = Object.values(config.roles.PLACEMENT);
    const teamRoles = Object.values(config.roles.TEAM);
    const accountRoles = Object.values(config.roles.ACCOUNT);

    for (const cachedRole of member.roles.cache) {
        const role = cachedRole[1];
        if (placementRoles.includes(role.id) || teamRoles.includes(role.id)) await member.roles.remove(role.id);
    }

    await member.roles.add(accountRoles[0]);

    if (curUser.spot <= 5) await member.roles.add(placementRoles[0]);
    else if (curUser.spot <= 10) await member.roles.add(placementRoles[1]);
    else if (curUser.spot <= 25) await member.roles.add(placementRoles[2]);
    else if (curUser.spot <= 50) await member.roles.add(placementRoles[3]);
    else if (curUser.spot <= 75) await member.roles.add(placementRoles[4]);
    else if (curUser.spot <= 100) await member.roles.add(placementRoles[5]);
    else if (curUser.spot <= 250) await member.roles.add(placementRoles[6]);
    else if (curUser.spot <= 500) await member.roles.add(placementRoles[7]);
    else if (curUser.spot <= 750) await member.roles.add(placementRoles[8]);
    else if (curUser.spot <= 1000) await member.roles.add(placementRoles[9]);

    await member.roles.add(teamRoles[curUser.team]);
    log(`blue`, `Roles updated for ${tornUser}.`);
};

export default updateRoles;
