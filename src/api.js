const axios = require(`axios`);

let rawTornUsers = {};
let tornUsers = {};

axios.get(`https://torn.space/leaderboard`).then(res => {
    let rawTR = res.data.split(`</tr>`);
    let rawTD = [];
    for (let i = 1; i < rawTR.length - 1; i++) rawTD.push(rawTR[i].split(`</td>`));

    for (let i = 0; i < rawTD.length; i++) {
        for (let j = 0; j < rawTD[i].length; j++) {
            rawTD[i][j] = rawTD[i][j].slice(4);
        }
        rawTornUsers[i] = rawTD[i];
    }
    for (let i in rawTornUsers) {
        let newUO;
        let rawUO = rawTornUsers[i];

        let typeUO = null;
        if (rawUO[1].slice(0, 1) == `[`) {
            let tagEnd = rawUO[1].indexOf(`]`);
            if (tagEnd == 2) {
                switch (rawUO[1].slice(1, 2)) {
                    case `V`:
                        typeUO = `VIP`;
                        break;
                    case `M`:
                        typeUO = `Moderator`;
                        break;
                    case `A`:
                        typeUO = `Administrator`;
                        break;
                    case `O`:
                        typeUO = `Owner`;
                        break;
                }
            } else typeUO = `Player`;
            newUO = rawUO[1].toString().slice(tagEnd + 2);
        }
        if (!newUO) newUO = rawUO[1].toString();

        tornUsers[newUO] = {
            displayName: rawUO[1]
        };

        switch (rawUO[0].slice(13, 17)) {
            case `cyan`:
                tornUsers[newUO].team = `Human`;
                break;
            case `pink`:
                tornUsers[newUO].team = `Alien`;
                break;
            case `lime`:
                tornUsers[newUO].team = `Green`;
                break;
        }

        if (typeUO) tornUsers[newUO].accountType = typeUO;
        else tornUsers[newUO].accountType = `Player`;

        tornUsers[newUO].placement = parseInt(rawUO[0].slice(24, rawUO[0].length - 1));
        tornUsers[newUO].experience = parseInt(rawUO[2]);
        tornUsers[newUO].rank = parseInt(rawUO[3]);
        tornUsers[newUO].kills = parseInt(rawUO[4]);
        tornUsers[newUO].money = rawUO[5];
        tornUsers[newUO].tech = parseFloat(rawUO[6]);
    }
});

module.exports = tornUsers;