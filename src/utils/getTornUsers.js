const axios = require(`axios`);

module.exports = async () => {
    const tornUsers = [];
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
        const accountType = curUser[1].slice(0, 1) === `[`
            ? curUser[1].slice(1, 2) === `V`
                ? `VIP`
                : curUser[1].slice(1, 2) === `M`
                    ? `Moderator`
                    : curUser[1].slice(1, 2) === `A`
                        ? `Admin`
                        : curUser[1].slice(1, 2) === `O`
                            ? `Owner`
                            : `Player`
            : `Player`;

        tornUsers.push({
            username: curUser[1],
            placement: parseInt(curUser[0].slice(23, curUser[0].length - 1)),
            team: rawTeamData === `cyan` ? `Human` : rawTeamData === `pink` ? `Alien` : `Cyborg`,
            type: accountType,

            xp: parseInt(curUser[2]),
            rank: parseInt(curUser[3]),
            kills: parseInt(curUser[4]),
            money: curUser[5] ? curUser[5].split(` `).join(``) : undefined,
            tech: parseFloat(curUser[6])
        });
    }

    return tornUsers;
};
