import { author, version } from '../package.json';

import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    colors: {
        danger: 0xf82055,
        success: 0x47d66d,
        info: 0xcfcf53,

        teams: [
            0x00b7eb,
            0xffc0cb,
            0x32cd32
        ],

        purple: 0x663399
    },

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
    version,
    footer: `© Created by ${author} | v${version}`
};

export default config;
