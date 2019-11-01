const request = require(`request`);
const { config } = require(`./index.js`);

function getTornUsers() {
    request(`https://torn.space/leaderboard/`, (err, res, body) => {
        if(err) console.log(err);

        let rawTR = body.split(`</tr>`); //splits by row; array ends are cutoff
        let rawTD = [];
        for(let i = 1; i < rawTR.length - 1; i++) {
            rawTD.push(rawTR[i].split(`</tr>`)); //splits row items by row into array
        }

        let rawTornUsers = {};
        for(let i = 0; i < rawTD.length; i++) {
            let newRTU = rawTD.slice(`,`).forEach(arrayItem => { //individualize row items
                newRTU[arrayItem] = newRTU[arrayItem.slice(4)]; //remove opening <tr>
            });
            rawTornUsers[i] = newRTU; //assign raw user to object
        }

        let tornUsers = {};
        for(let i = 0; i < rawTornUsers.length; i++) {
            let newUO;
            let rawUO = rawTornUsers[i]; //get raw user object

            //get name of user; remove account tag if there is one
            if(rawTornUsers[i][1].slice(0, 2) == `[`) newUO = rawTornUsers[i][1].slice(3);
            else newUO = rawTornUsers[i][1];

            //Assign side
            if(rawUO[0].slice(13, 17) == `cyan`) tornUsers[newUO].team = `Human`;
            else if(rawUO[0].slice(13, 17) == `pink`) tornUsers[newUO].team = `Alien`;
            else if(rawUO[0].slice(13, 17) == `lime`) tornUsers[newUO].team = `Green`;
            else tornUsers[newUO].team = `Undetermined`;

            //Assign account type
            if(rawUO[1].slice(0, 3) == `[J]`) tornUsers[newUO].accountType = `Janitor`;
            else if(rawUO[1].slice(0, 3) == `[M]`) tornUsers[newUO].accountType = `Moderator`;
            else if(rawUO[1].slice(0, 3) == `[O]`) tornUsers[newUO].accountType = `Owner`;
            else tornUsers[newUO].accountType = `Player`;

            //Assign other stats
            tornUsers[newUO].position = parseInt(rawUO[0].slice(24, rawUO[0].length - 1));
            tornUsers[newUO].xp = parseInt(rawUO[2]);
            tornUsers[newUO].rank = parseInt(rawUO[3]);
            tornUsers[newUO].kills = parseInt(rawUO[4]);
            // tornUsers[newUO].liquidValue = parseInt(rawUO[5]);
            // tornUsers[newUO].tech = parseInt(rawUO[6]);
        }

        //Return user object.
        return tornUsers;
    });
}