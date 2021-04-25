const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require('moment')
require("moment-duration-format")

exports.run = function(client, message, args) {
  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Bot")
.setColor("RANDOM")
.setDescription(`

:warning: **kayıt-sistemi** HATALI!
:warning: **otorol** HATALI!
:

[Davet Et](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot) - [Destek Sunucusu](https://discord.gg/NAzGC2cxXR) - OyVer **(YAKINDA!)**

Bot Uptime: **${duration}** Developer by <@${ayarlar.ownerID}>

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