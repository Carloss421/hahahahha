const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:three: **Version: 0.0.3**
**Başlangıç: 15.05.2021 - 19:09 Bitiş: 17:05:2021 - 20:30 **\`(GUNCELLEME)\`
╔═══════════════════╗
║ \`afk-sistemi\` | güncellendi!
║ \`güvenlik\` | eklendi!
║ \`resimli-giriş-çıkış\` | eklendi!
║ \`hoşgeldin-hoşçakal\` | eklendi!
║ \`emoji-koruma\` | eklendi!
║ \`prefix-sistemi\` | eklendi!
║ \`sayaç/otorol\` | güncellendi!
║ \`HATA\` | Hatalar giderildi!
║ \`fake-üye-sistemi\` | eklendi!
║ \`captcha\` | güncellendi!
║ \`ayarlar\` | **(BETA)** eklendi!
║ \`mute-sistemi\` |  eklendi!
║ \`jail-sistemi\` | eklendi!
║ \`seviye-sistemi\` | kaldırıldı!
║ \`premium-sistemi\` | kaldırıldı!(Herşey Bedava)
╚═══════════════════╝


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