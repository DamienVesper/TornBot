import axios from 'axios';
import { TornAccount } from '../types/account';

const getTornUsers = async () => {
    const tornUsers: TornAccount[] = [];
    const res = await axios.get(`https://torn.space/leaderboard`);
    const body = res.data;

    // Separate every player on the leaderboard.
    const rawTR = body.split(`</tr>`);
    rawTR.splice(0, 6);

    // Separate each individual player's data types.
    const rawTD = [];
    for (const row of rawTR) rawTD.push(row.split(`</td>`));

    // Remove the excess <td> at the start of each entry.
    for (const i in rawTD)
        for (const j in rawTD[i]) rawTD[i][j] = rawTD[i][j].slice(4);

    // Parse raw data and append to the array of users.
    for (const i in rawTD) {
        const curUser = rawTD[i];
        if (curUser.length < 7) continue;

        const rawTeamData = curUser[0].slice(13, 17);

        const accountHasTag: boolean = curUser[1].slice(0, 1) === `[`;
        let accountType: string;

        if (accountHasTag) {
            switch (curUser[1].slice(1, 2)) {
                case `V`:
                    accountType = `VIP`;
                    break;
                case `M`:
                    accountType = `Moderator`;
                    break;
                case `A`:
                    accountType = `Admin`;
                    break;
                case `O`:
                    accountType = `Owner`;
                    break;
                default:
                    accountType = `Player`;
                    break;
            }
        } else accountType = `Player`;

        const curUsername: string = accountHasTag ? curUser[1].slice(curUser[1].indexOf(`]`) + 2) : curUser[1];
        tornUsers.push({
            username: curUsername,
            displayName: curUser[1],

            placement: parseInt(curUser[0].slice(23, curUser[0].length - 1)),
            team: rawTeamData === `cyan` ? 0 : rawTeamData === `pink` ? 1 : 2,
            type: accountType,

            xp: parseInt(curUser[2]),
            elo: parseInt(curUser[3]),
            rank: parseInt(curUser[4]),
            kills: parseInt(curUser[5]),
            money: curUser[5] ? curUser[6].split(` `).join(``) : 0,
            tech: parseFloat(curUser[7])
        });
    }

    return tornUsers;
};

export default getTornUsers;
