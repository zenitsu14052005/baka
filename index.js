const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1094803873639710771')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/shorts/yECCVxxh7vE`)
        .setDetails(`Darling in the franxx`)
        .setName(`Darling in the franxx`)
        .setState(`Found you, my darling.`)
        .setParty({
            max: 5,
            current: 4,
            id: Discord.getUUID(),
        })
.setAssetsLargeImage(`mp:attachments/1199450771234750464/1210193328507850842/bakkkkkkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaa.gif?ex=65e9ab5d&is=65d7365d&hm=025d604ced03ce47e971dec90e674e586e6733f0945bf9e3b443d46811d114d5&`)
         
        .setAssetsLargeText(`Bobo`)
        .addButton(`Dont click At ME`, `https://discord.gg/C6TWAAWAU9`)
        .addButton(`Dont click At ME`, `https://discord.gg/zenni-realm`)
          client.user.setActivity(rpc.toJSON());

          console.log(`${client.user.tag} is ready!`);
});

      //Account Token
      client.login(mySecret = process.env['token'])
