const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
let users = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
let servers = client.guilds.cache.size
.setTitle("Alvi - Bot")
.setColor("RANDOM")
.setDescription(`
**Linkler;**
[Davet Linki]() - [Destek Sunucusu Linki]() - OyVer linki**(YAKINDA!)**

Toplam Kullanıcı Sayısı:  \`${users}\`
Toplam Sunucu Sayısı: \`\`
`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help-bot"],
  permlevel: 0
};
exports.help = {
  name: "yardım-bot"
}