const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kullanıcı")
.setColor("RANDOM")
.setDescription(`
👤 \`${ayarlar.prefix}kullanıcı-bilgi\` kullanıcı'nın bilgilerine bakarsınız.
📊 \`${ayarlar.prefix}sunucu-bilgi\` sunucu'nun bilgilerine bakarsınız.
🔮 \`${ayarlar.prefix}rol-bilgi\` rol'ün bilgilerine bakarsınız.
🧰 \`${ayarlar.prefix}canlı-destek\` Destek alırsınız. Troll amaçlı kullanılırsa karalisteye alınırsınız.
⚠️ \`${ayarlar.prefix}hata-bildir\` Hatayı, açığı bildirebilirsiniz.
📝 \`${ayarlar.prefix}öneri\` Bot için öneri'de bulunursunuz.
:information_source: \`${ayarlar.prefix}istatistik\` Botun bilgilerini gösterir.
:zzz: \`${ayarlar.prefix}afk\` Afk olursunuz.
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-user"],
  permlevel: 0
};
exports.help = {
  name: "yardım-kullanıcı"
}