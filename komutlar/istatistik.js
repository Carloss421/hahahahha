const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");

exports.run = function(client, message, args, bot, size) {
const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - İstatistik")
.setColor("RANDOM")
.addField(`**Bot Prefix** \`a!\`
**Bot İsmi** \`Alvi\`
**Bot Dili** :flag_tr:
**Sahip Adı** \`${ayarlar.ownerNAME}\`
**Sahip ID** \`${ayarlar.ownerID}\`
**Sahip Discord Nick** \`${ayarlar.ownerDcname}\`
**Kodlandığı Uygulama** \`Visual Studio Code (VSC)\`
**Kodlandığı Dil** \`Node.JS - Discord.JS - JavaScript\``)
.addField(`**Bot Uptime** \``, duration, `\``)
.addField(`**Bot Ping** \``, client.pingms`)
**Toplam Üye Sayısı** \`Ölçülemedi\`
**Toplam Sunucu Sayısı** \`${bot.guilds.size.toLocaleString()}\`



**Verileri alınan komutlar**
\`Otorol - Sayaç - KayıtSistemi - cezalog - afk - jail - ban - mute\`
Veri depolaması fazla artarsa silineceketir!`)
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