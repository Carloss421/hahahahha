const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:one: **Version: 0.0.1**
╔════════════════════════════╗
║ \`Afk Sistemi\` | Sıfırdan yazıldı ve embed eklendi.
║ \`Ramazan Sistemi\` | Sıfırdan Yazılıyor....
╚════════════════════════════╝
`)
message.channel.send(embed)
};

// »»————-　★　————-«« ╚╗

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["updates"],
  permlevel: 0
};
exports.help = {
  name: "güncellemeler"
};