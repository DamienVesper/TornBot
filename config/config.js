require(`dotenv`).config();
const pjson = require(`../package.json`);

const config = {
    colors: {
        success: 0x00ff00,
        primary: 0x1e90ff,
        warning: 0xffa500,
        danger: 0xff0000
    },
    developer: `DamienVesper`,
    developerTag: `0001`,
    developerID: `386940319666667521`,
    botChannel: `493489353046097926`,
    prefix: `;`,
    token: process.env.DISCORD_BOT_TOKEN,
    db: {
        uri: process.env.MONGO_URI,
        uriParams: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    version: pjson.version,
    footer: `© Created by ${pjson.author}`
};

config.footer += ` | v${config.version}`;
module.exports = config;
