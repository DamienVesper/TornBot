const axios = require(`axios`);

let rawTornUsers = [];
let tornUsers = {};

module.exports = axios.get(`https://torn.space/leaderboard`).then(res => {
    let body = res.data;

    // Separate every player on the leaderboard.
    let rawTR = body.split(`</tr>`);
    rawTR.splice(0, 6);

    // Separate each individual player's data types.
    let rawTD = [];
    for (const row of rawTR) rawTD.push(row.split(`</td>`));

    // Remove the excess <td> at the start of each entry.
    for (let i in rawTD)
        for (let j in rawTD[i]) rawTD[i][j] = rawTD[i][j].slice(4);

        tornUsers = rawTD;

    return tornUsers;
});