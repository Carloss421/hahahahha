const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Bot")
.setColor("RANDOM")
.setDescription(`

[Davet Et](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot) - [Destek Sunucusu](https://discord.gg/NAzGC2cxXR) - OyVer **(YAKINDA!)**

Ping: ${client.ws.ping}ms - Developer by <@${ayarlar.ownerID}>

`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help-bot"],
  permlevel: 0
};
exports.help = {
  name: "yardım-bot"
};