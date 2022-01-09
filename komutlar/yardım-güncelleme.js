const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:three: **Version: 0.0.5**
Başlangıç: **09.10.2021 - 17:43** Bitiş:  **..2022 - :** \`MEGA UPDATE\`
╔═══════════════════╗
║ \`prefix-sistemi\` **|** kaldırıldı!
║ \`dil-sistemi\` **|** eklendi!
║ \`premium-sistemi\`**|** eklendi!
║ \`görev-sistemi\` **|** premium'a geçirildi!
║ \`emoji-koruma && sunucu-koruma\` **|** premium'a geçirildi!
║ \`yılbaşı\` **|** eklendi!
║ \`snipe\` **|** kaldırıldı!
║ \`HATALAR\` **|** giderildi!
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