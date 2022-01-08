const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require('moment')
require("moment-duration-format")

exports.run = function(client, message, args) {
let prefix = ayarlar.prefix;
  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Bot")
.setColor("RANDOM")
.setDescription(`
:warning: **kayıt-sistemi** HATALI!
:warning: **captcha-sistemi** Üzerinde Çalışılıyor!
:warning: **müzik-sistemi** HATALI!
:warning: **kanal-kilit/aç** Üzerinde Çalışılıyor!
:warning: **yavaş-mod** Üzerinde Çalışılıyor!

**Bütün hepsi düzeltilicek!**
**Hata gördüyseniz** \`${prefix}hata-bildir\`
**Yardım almak için Aşağıda bulunana DESTEK SUNUCUSU'na tıklaman yeterli.**

[Davet Et](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot) - [Destek Sunucusu](https://discord.gg/NAzGC2cxXR) - [Oy Ver](https://discordbots.org/bot/${client.user.id}/vote)
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