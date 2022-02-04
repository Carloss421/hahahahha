const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");

exports.run = function(client, message, args) {
const araEmoji =  "**⇢**"
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - İstatistik`)
.setColor("RANDOM")
.setDescription(`
Geliştirici/Sahip ${araEmoji} **<@${ayarlar.ownerID}> - AliBerat**
Kuruluş Tarihi ${araEmoji} **${ayarlar.krştrh}**
Sunuluş Tarihi ${araEmoji} **${ayarlar.snştrh}**

Uptime Süresi ${araEmoji} **${moment.duration(client.duration).format("D [gün], H [saat], m [dakika], s [saniye]")}**
Bot Pingi ${araEmoji} **${client.ws.ping}ms**
Mesaj Pingi ${araEmoji} **-${new Date().getTime() - message.createdTimestamp}ms**

Kullanıcı Sayısı ${araEmoji} **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}  [${message.client.users.cache.filter(m => m.bot, 0).size} BOT]**
Sunucu Sayısı ${araEmoji} **${client.guilds.cache.size}**
Kanal Sayısı ${araEmoji} **${client.channels.cache.size}**
Komut Sayısı ${araEmoji} **${client.commands.size}**

Ses Olan Kullanıcılar ${araEmoji} **${client.voice.connections.size}**
Discord.js Version ${araEmoji} **v${Discord.version}**
Node.js Version ${araEmoji} **${process.version}**

**Veri Alınan Komutlar**
\`Otorol - Sayaç - KayıtSistemi - CaptchaSistemi - GörevSistemi\`
**Veriler Temizlendi**
[Destek Sunucusu - ](https://discord.gg/NAzGC2cxXR)[Davet Et(Perm 8) - ](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot)[Davet Et(Perm 0) - ](https://discord.com/api/oauth2/authorize?client_id=828267474192564245&permissions=0&scope=bot)[Oy Ver - ](https://discordbots.org/bot/${client.user.id}/vote)`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "bot-bilgi"],
  permlevel: 0
};
exports.help = {
  name: "istatistik"
};