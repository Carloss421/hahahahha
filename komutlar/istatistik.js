const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");
exports.run = function(client, message, args, bot) {
    const duration = moment
    .duration(bot.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
let users = bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
let servers = bot.guilds.size.toLocaleString()
let channels = bot.channels.size
let commands = bot.commands.size


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
**Bot Ping** \`${client.ping}ms\`
**Toplam Üye Sayısı** \`${users}\`
**Toplam Sunucu Sayısı** \`${servers}\`
**Toplam Kanal Sayısı** \`${channels}\`
**Toplam Komut Sayısı** \`${commands}\`


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