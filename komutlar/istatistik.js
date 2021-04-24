const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");

exports.run = function(client, message, args) {
const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - İstatistik")
.setColor("RANDOM")
.setDescription(`


Geliştirici **⇛** **<@${ayarlar.ownerID}>**
Bot ortağı **⇛** **<@${ayarlar.ownerİD}>**

Çalışma Süresi **⇛** **${duration}**
Bot Gecikmesi **⇛** **${client.ws.ping}ms**
Mesaj Gecikmesi **⇛** **-${new Date().getTime() - message.createdTimestamp}ms**

Toplam kullanıcı **⇛** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
Toplam sunucu **⇛** **${client.guilds.cache.size}**
Toplam kanal **⇛** **${client.channels.cache.size}**
Toplam komut **⇛** **${client.commands.size}**
Toplam Müzik Oynatılan sunucu **⇛** **${client.voice.connections.size}**

Discord.js sürümü **⇛** **v${Discord.version}**
Node.js sürmü **⇛** **${process.version}**

**Verileri alınan komutlar**
\`Otorol - Sayaç - KayıtSistemi - cezalog - afk - jail - ban - mute\`
\`Premium - CaptchaSistemi - kayıtlog - GörevSistemi\`
**Veri depolaması fazla artarsa silineceketir!**
[Destek Sunucusu](https://discord.gg/NAzGC2cxXR) - [Davet Et](https://discord.com/oauth2/authorize?client_id=828267474192564245&permissions=8&scope=bot) - Oyver **YAKINDA!**
`)
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