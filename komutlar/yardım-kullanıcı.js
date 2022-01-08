const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let prefix = ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kullanıcı")
.setColor("RANDOM")
.setDescription(`
\`${prefix}kullanıcı-bilgi\` kullanıcı'nın bilgilerine bakarsınız.
\`${prefix}sunucu-bilgi\` sunucu'nun bilgilerine bakarsınız.
\`${prefix}rol-bilgi\` rol'ün bilgilerine bakarsınız.
\`${prefix}emoji-bilgi\` emoji'nin bilgilerine bakarsınız.
\`${prefix}canlı-destek\` Destek alırsınız. Troll amaçlı kullanılırsa karalisteye alınırsınız.
\`${prefix}hata-bildir\` Hatayı, açığı bildirebilirsiniz.
\`${prefix}öneri\` Bot için öneri'de bulunursunuz.
\`${prefix}istatistik\` Botun bilgilerini gösterir.
\`${prefix}afk\` Afk olursunuz.`)
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