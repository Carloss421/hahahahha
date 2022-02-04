const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:two: **Version: 0.0.4**
**Başlangıç: 18.08.2021 - 13:19 Bitiş:  18.08.2021 - 22:48**\`(GUNCELLEME)\`
╔═══════════════════╗
║ \`görev-sistemi(BETA)\` **|** eklendi!
║ \`emojiler\` **|** eklendi!
║ \`veri-tabanı\` **|** sıfırlandı!
╚═══════════════════╝`)
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