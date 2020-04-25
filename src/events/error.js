const { client, config } = require(`../index.js`);

client.on(`error`, err => console.error(err));