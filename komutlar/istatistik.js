const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");

exports.run = function(client, message, args) {
const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
let araEmoji =  "**⇢**"
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - İstatistik")
.setColor("RANDOM")
.setDescription(`


Geliştirici ${araEmoji} **<@${ayarlar.ownerID}>**
Bot ortağı ${araEmoji} **<@${ayarlar.ownerİD}>**
Kuruluş tarihi ${araEmoji} **${ayarlar.krştrh}**
Sunuluş tarihi ${araEmoji} **${ayarlar.snştrh}**

Çalışma Süresi ${araEmoji} **${duration}**
Bot Gecikmesi ${araEmoji} **${client.ws.ping}ms**
Mesaj Gecikmesi ${araEmoji} **-${new Date().getTime() - message.createdTimestamp}ms**

Toplam kullanıcı ${araEmoji} **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} [${client.guilds.cache.filter(m=> !m.bot).size} BOT]**
Toplam sunucu ${araEmoji} **${client.guilds.cache.size}**
Toplam kanal ${araEmoji} **${client.channels.cache.size}**
Toplam komut ${araEmoji} **${client.commands.size}**
Müzik Oynatılan sunucu ${araEmoji} **${client.voice.connections.size}**

Discord.js sürümü ${araEmoji} **v${Discord.version}**
Node.js sürümü ${araEmoji} **${process.version}**

**Verileri alınan komutlar**
\`Otorol - Sayaç - KayıtSistemi - Premium - CaptchaSistemi - kayıtlog - GörevSistemi\`
**Veri depolaması fazla artarsa silineceketir!**
[Destek Sunucusu](https://discord.gg/NAzGC2cxXR) - [Davet Et](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot) - Oyver **YAKINDA!**
`)//client.guild.member.cache.filter(m => m.user.bot).size
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