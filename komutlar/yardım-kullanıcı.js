const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kullanıcı")
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}kullanıcı-bilgi\` kullanıcı'nın bilgilerine bakarsınız.
\`${ayarlar.prefix}sunucu-bilgi\` sunucu'nun bilgilerine bakarsınız.
\`${ayarlar.prefix}rol-bilgi\` rol'ün bilgilerine bakarsınız.
\`${ayarlar.prefix}emoji-bilgi(HATALI)\` emoji'nin bilgilerine bakarsınız.
\`${ayarlar.prefix}canlı-destek\` Destek alırsınız. Troll amaçlı kullanılırsa karalisteye alınırsınız.
\`${ayarlar.prefix}hata-bildir\` Hatayı, açığı bildirebilirsiniz.
\`${ayarlar.prefix}öneri\` Bot için öneri'de bulunursunuz.
\`${ayarlar.prefix}istatistik\` Botun bilgilerini gösterir.
\`${ayarlar.prefix}afk\` Afk olursunuz.
\`${ayarlar.prefix}hızlı-destek(PREMUIM)\` Çok çabuk destek alabilirsiniz.
\`${ayarlar.prefix}pre-yardım - ${ayarlar.prefix}yardım-premium\` premium özeliklerini fln görürsünüz.`)
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