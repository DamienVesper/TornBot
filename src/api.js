const axios = require(`axios`);

const rawTornUsers = [];
let tornUsers = {};

module.exports = axios.get(`https://torn.space/leaderboard`).then(res => {
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

    tornUsers = rawTD;

    return tornUsers;
});
