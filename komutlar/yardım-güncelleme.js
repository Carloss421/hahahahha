const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:one: **Version: 0.0.1 - Tarih: 30.04.2021 - 15:57**\`(BAKIM)\`
╔════════════════════════════╗
║ \`Afk Sistemi\` | Sıfırdan yazıldı ve embed eklendi.
║ \`EMBED\` | bir çok komuta **EMBED** eklendi.
║ \`kayıt Sistemi\` | isim değiştirme hatası düzeltildi.
╚════════════════════════════╝

:two: **Version: 0.0.2 - Tarih: 4.05.2021 - 23:13**\`(BAKIM)\`
╔════════════════════════════╗
║ \`kayıt Sistemi\` | Sıfırdan yazıldı ama hataları var düzeltilecek!
║ \`afk Sistemi\` | Sıfırdan yazıldı ve güncellendi.
║ \`EMOJIS\` | Komutlara yeni emojiler ve yazılar güncellendi.
╚════════════════════════════╝

:information_source: **Güncellemeler 2 ayda bir yapılacaktır!**`)
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