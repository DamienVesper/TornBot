import { author, version } from '../package.json';

import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    colors: {
        danger: 0xf82055,
        success: 0x47d66d,
        info: 0xcfcf53,

        teams: {
            cyborg: 0x32cd32,
            alien: 0xffc0cb,
            human: 0x00b7eb
        }
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
