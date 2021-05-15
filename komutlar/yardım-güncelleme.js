const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Güncelleme")
.setColor("RANDOM")
.setDescription(`
:three: **Version: 0.0.3**
**Başlangıç: 15.05.2021 - 19:09 Bitiş: 16:05:2021 - 00:39 **\`(GUNCELLEME)\`
╔════════════════════════════════╗
║ \`afk-sistemi\` | Afk sistemi güncellendi!
║ \`kelime-tahmin\` | Kelime Tahmin**(BETA)** oyunu eklendi!
║ \`güvenlik\` | Güvenlik sistemi eklendi!
║ \`resimli-giriş-çıkış\` | Resimli giriş çıkış eklendi!
║ \`hoşgeldin-hoşçakal\` | Hoşgeldin-hoşçakal eklendi!
║ \`emoji-koruma\` | Emoji koruma eklendi!
║ \`prefix-sistemi\` | Prefix ayarlama eklendi!
║ \`sayaç/otorol\` | sayaç ve otorol güncellendi!
║ \`HATA\` | Hatalar giderildi!
║ \`fake-üye-sistemi\` | Fake üye sistemi eklendi!
║ \`captcha\` | Captcha güncellendi!
║ \`ayarlar\` | Ayarlar**(BETA)** eklendi!
║ \`mute-sistemi\` | Mute sistemi eklendi!
╚════════════════════════════════╝


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