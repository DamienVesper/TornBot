import axios from 'axios';
import { LBAccount, TornAccount } from '../typings/accounts';

/**
 * Grab all accounts from the leaderboard.
 * @returns An array representation of users.
 */
const getTornUsers = async () => {
    const tornUsers: Map<string, TornAccount> = new Map();
    const res = await axios.get(`https://torn.space/leaderboard/players.json`);

    // Parse player data
    for (const player of (res.data as LBAccount[])) tornUsers.set(player.name, {
        spot: player.spot,
        team: player.team === `blue` ? 0 : player.team === `red` ? 1 : 2,

        xp: player.xp,
        elo: player.elo,
        tech: player.tech,

        kills: player.kills,
        money: player.money,
        rank: player.rank

    });

    return tornUsers;
};

export default getTornUsers;
