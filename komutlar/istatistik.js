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
**Bot Prefix** \`a!\`
**Bot İsmi** \`Alvi\`
**Bot Dili** :flag_tr:

**Sahip Adı** \`${ayarlar.ownerNAME}\`
**Sahip ID** \`${ayarlar.ownerID}\`
**Sahip Discord Nick** \`${ayarlar.ownerDcname}\`
**Kodlandığı Uygulama** \`Visual Studio Code (VSC)\`
**Kodlandığı Dil** \`Node.JS - Discord.JS - JavaScript\`

**Bot Uptime** \`${duration}\`
**Bot Bot Gecikmesi** \`${client.ws.ping}ms\`
**Bot Mesaj Gecikmesi** \`-${new Date().getTime() - message.createdTimestamp}ms\`

**Toplam Üye Sayısı** \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
**Toplam Sunucu Sayısı** \`${client.guilds.cache.size}\`
**Toplam Kanal Sayısı** \`${client.channels.cache.size}\`
**Toplam Komut Sayısı** \`${client.commands.size}\`

**Verileri alınan komutlar**
\`Otorol - Sayaç - KayıtSistemi - cezalog - afk -\`~~\`jail\`~~\` - ban - mute\`
\`Premium\`
Veri depolaması fazla artarsa silineceketir!
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