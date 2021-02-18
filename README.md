<h1 align="center">TornBot</h1>

<h3 align="center">A bot bringing together Torn.Space and its Discord counterpart.</h3>
<br>
<p align="center">
    <img src="https://img.shields.io/github/v/release/DamienVesper/TornBot?style=for-the-badge&color=1aa9f0">
    <img src="https://img.shields.io/github/last-commit/DamienVesper/TornBot?style=for-the-badge&color=1aa9f0">
    <img src="https://img.shields.io/github/contributors/DamienVesper/TornBot?style=for-the-badge&color=1aa9f0">
</p>


**Local Bot Development Setup**
<br>
Testing the application using a database on your own machine will require a localhost database setup:

1. Create a `.env` in the root directory of the repository.
2. Inside of the `.env` file, include the following:
```
DISCORD_BOT_TOKEN="<token>"
URI="<uri>"
```
Replace `<uri>` and `<discord bot token>` with your MongoDB URI and Discord bot token.

**Running The Bot**
```
npm i
npm run prod
```
