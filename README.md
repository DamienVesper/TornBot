<h1 align="center">TornBot</h1>

<h3 align="center">A bot bringing together Torn.Space and its Discord counterpart.</h3>
<br>
<p align="center">
    <img src="https://img.shields.io/github/v/release/DamienVesper/TornBot?style=for-the-badge&color=1aa9f0&include_prereleases">
    <img src="https://img.shields.io/github/contributors/DamienVesper/TornBot?style=for-the-badge&color=1aa9f0">
    <img src="https://img.shields.io/github/languages/code-size/DamienVesper/TornBot?style=for-the-badge&color=1aa9f0">
</p>


**Local Bot Development Setup**
<br>
Testing the application using a database on your own machine will require a localhost database setup:

1. Create a `.env` in the root directory of the repository.
2. Inside of the `.env` file, include the following:
```env
DISCORD_TOKEN="<token>"
MONGODB_URI="<uri>"
```
Replace `<uri>` and `<discord bot token>` with your MongoDB URI and Discord bot token.

Then, in a command line at the top directory of where you have cloned the project, run:
```sh
yarn
```

Then, to compile the project, run
```
yarn build
```

To execute the project, run
```
yarn dist
```

Alternatively, you could simply run a single command in development:
```
yarn dev
```

Note: You will need MongoDB and Node.js installed to be able to build and run the bot.
